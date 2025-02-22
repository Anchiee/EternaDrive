<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;


class FileController extends Controller
{
    public function index() {
        return Inertia::render("Dashboard");
    }

    public function store(Request $request) {
        $request->validate([
            "name" => ["required"],
            "size" => ["required"],
            "file_type" => ["required"],
            "user_id" => ["required"],
        ]);

    }
}
