<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Http\Requests\AdminRequest;
use Illuminate\Support\Facades\DB; 

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
  
}
