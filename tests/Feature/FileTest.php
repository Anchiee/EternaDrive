<?php

use App\Models\File;
use App\Models\User;
use Illuminate\Http\UploadedFile;

test("file uploading", function() {
    Storage::fake("local");
    

    $user = User::factory()->create();
    $file = File::factory()->make();

    $uploadedFile = UploadedFile::fake()->create($file->name, $file->size, $file->file_type);


    $response = $this->actingAs($user)->post("/file", [
        "file" => $uploadedFile
    ]);

    Storage::disk("local")->assertExists($user->name);
    Storage::disk("local")->assertExists($user->name . '/' . $file->random_name);

    $this->assertDatabaseHas("files", [
        "name" => $file->name,
        "size" => $file->size * 1024,
        "file_type" => $uploadedFile->extension(),
        "user_id" => $user->id
    ]);

    $response->assertRedirect(route("file.index"));
});

test("guests cant enter the request", function() {
    $response = $this->post("/file");

    $response->assertRedirect("/login");
});