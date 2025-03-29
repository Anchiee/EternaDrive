<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Http\Requests\AdminRequest;

class AdminController extends Controller
{
    public function index() {
        return Inertia::render("Admin/Login");
    }

    public function show() {
        return Inertia::render("Admin/Dashboard");
    }


    public function store(AdminRequest $request) {
        $request->authenticate();

        $request->session()->regenerate();

        return redirect(route("admin.show"));
    }
  
}
