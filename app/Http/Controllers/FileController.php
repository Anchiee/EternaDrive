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
            "file" => "file|required|max:51200"
        ]);


        $uploadedFile = $request->file("file");

        $fileName = $uploadedFile->getClientOriginalName();
        $fileExtension = $uploadedFile->extension();
        $fileSize = $uploadedFile->getSize();

        if($uploadedFile->isValid()) {
            File::create([
                "name" => $fileName,
                "size" => $fileSize,
                "file_type" => $fileExtension,
                "user_id" => auth()->id()
            ]);
        }


       
        return redirect(route("file.index", absolute:false));
    }
}
