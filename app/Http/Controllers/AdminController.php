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

        $dbInfo = [
            "driverName" => $database->getAttribute(\PDO::ATTR_DRIVER_NAME),
            "serverInfo" => $database->getAttribute(\PDO::ATTR_SERVER_INFO),
            "clientVersion" => $database->getAttribute(\PDO::ATTR_CLIENT_VERSION),
            "serverVersion" => $database->getAttribute(\PDO::ATTR_SERVER_VERSION),
            "connectionStatus" => $database->getAttribute(\PDO::ATTR_CONNECTION_STATUS),
        ];
        
        $status = $database == null ? "Disconnected" : "Connected";

   

        return Inertia::render("Admin/Dashboard", [
            "databaseStatus" => $status,
            "databaseInfo" => $dbInfo,
        ]);
    }


    public function store(AdminRequest $request) {
        $request->authenticate();

        $request->session()->regenerate();

        return redirect(route("admin.show"));
    }
  
}
