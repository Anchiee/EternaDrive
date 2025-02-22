<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Models\File;

class FileController extends Controller
{
    public function index() {
        return Inertia::render("Dashboard", [
            "files" => auth()->user()->file()
        ]);
    }

    public function store(Request $request) {
        $request->validate([
            "name" => ["required"],
            "size" => ["required"],
            "file_type" => ["required"],
            "user_id" => ["required"],
        ]);


        File::create([
            "name" => $request->name,
            "size" => $request->size,
            "file_type" => $request->file_type,
            "user_id" => $request->user_id
        ]);
        return redirect(route("file.index", absolute:false));
    }
}
