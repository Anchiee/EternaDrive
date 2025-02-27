<?php

namespace App\Http\Controllers;

use Illuminate\Auth\Middleware\RedirectIfAuthenticated;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Models\File;
use Storage;


class FileController extends Controller
{
    public function index(string $type) {

        $user = auth()->user();
        $files = $user->file()->
        when($type == "recent", function($query) {
            return $query->orderBy("created_at", "desc");
        })->
        when($type === "all", function(){
            return null;
        })->get();

        return Inertia::render("Dashboard", [
            "files" => $files
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

        $userName = $request->user()->name;


        if($uploadedFile->isValid()) {
            if(!Storage::exists($userName)) {
                Storage::createDirectory($userName);
            }

            $randomName = $uploadedFile->store($userName);

            File::create([
                "name" => $fileName,
                "size" => $fileSize,
                "file_type" => $fileExtension,
                "random_name" => $randomName,
                "user_id" => auth()->id(),
            ]);
            
        }
       
        return back();
    }
}

