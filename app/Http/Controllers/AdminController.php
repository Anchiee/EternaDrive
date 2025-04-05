<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Http\Requests\AdminRequest;
use Illuminate\Support\Facades\DB; 
use App\Models\Admin;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Hash; 
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Validation\ValidationException;


class AdminController extends Controller
{
    public function index() {
        return Inertia::render("Admin/Login");
    }

    public function show() {
        $database = DB::connection()->getPdo();
        $status = $database == null ? "Disconnected" : "Connected";

        $dbInfo = [
            "status" => $status,
            "driverName" => $database->getAttribute(\PDO::ATTR_DRIVER_NAME),
            "clientVersion" => $database->getAttribute(\PDO::ATTR_CLIENT_VERSION),
            "serverVersion" => $database->getAttribute(\PDO::ATTR_SERVER_VERSION),
            "connectionStatus" => $database->getAttribute(\PDO::ATTR_CONNECTION_STATUS),
        ];

        return Inertia::render("Admin/Dashboard", [
            "databaseInfo" => $dbInfo,
        ]);
    }


    public function store(AdminRequest $request) {
        $request->authenticate();

        $request->session()->regenerate();

        return redirect(route("admin.show"));
    }
    
    public function create() {
        $name = Str::random(20);
        $unhashedPassword = Str::random(20);
        $password = Hash::make($unhashedPassword);

        Admin::create([
            "name" => $name,
            "password" => $password,
        ]);

        session()->flash("generateStatus", "Copy and store it securely. You won't be able to see it again");
        session()->flash("name", $name);
        session()->flash("pass", $unhashedPassword);
        return back();
    }


    public function destroy(Request $request) {
        auth()->guard("admin")->logout();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return redirect(route("admin.index"));
    }


    public function ban(Request $request) {

        $request->validate([
            "id" => "required",
            "duration" => "max:365|integer|nullable",
            "reason" => "max:40",
        ]);

        $id = $request->input("id");
        $duration = $request->input("duration");
        $reason = $request->input("reason");

        $user = User::where("id", $id)->first();

        if(!$user) {
            session()->flash("banStatus", "User not found");
            return back();
        } 

        else if(!$user->is_banned && empty($reason)) {
            throw ValidationException::withMessages([
                "reason" => "Reason is required.",
            ]);
        }

        $newBanStatus = !$user->is_banned;
        $banExpiration = $duration === null ? null : Carbon::now()->addDays((int)$duration)->format("Y-m-d");

        switch($newBanStatus) {
            case 0:
                session()->flash("banStatus", "Successfully unbanned the user");
                $banExpiration = null;
                break;
            case 1:
                session()->flash("banStatus", "Successfully banned the user");
                break;
        }

        $user->update([
            "is_banned" => $newBanStatus,
            "ban_expires_at" => $banExpiration,
            "ban_reason" => $reason
        ]);
       
        return back();
    }
}
