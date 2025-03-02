<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Models\File;
use Storage;
use DB;

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
        })->
        when($type === "favorites", function($query) {
            return $query->where("is_favorite", true);
        })->
        get();

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
        $fileExtension = $uploadedFile->getMimeType();
        $fileSize = $uploadedFile->getSize();

        $userName = preg_replace("[^A-Za-z0-9]", "_", $request->user()->name);


        if($uploadedFile->isValid()) {
            if(!Storage::directoryExists($userName)) {
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

    public function delete(File $file) {
        if($file->user_id !== auth()->id()) {
            abort(403, "Unauthorized action");
        }

        Storage::delete($file->random_name);
        $file->delete();
        return back();
    }

    public function setFavorite(File $file) {
        if($file->user_id !== auth()->id()) {
            abort(403, "Unauthorized action");
        }  

        $favoriteStatus = $file->is_favorite;

        $file->update(["is_favorite" => !$favoriteStatus]);
    }


    public function download(File $file) {
        $fileRandomName = $file->random_name;
        $fileName = $file->name;

        if (!Storage::disk('local')->exists($fileRandomName)) {
            abort(404, "File not found");
        }

        return Storage::disk("local")->download($fileRandomName, $fileName);

    }
}

