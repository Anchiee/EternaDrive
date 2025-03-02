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

    $username = preg_replace("/[^A-Za-z0-9]/", "_", $user->name);
    Storage::disk("local")->assertExists($username);
    Storage::disk("local")->assertExists($username . '/' . $file->random_name);

    $this->assertDatabaseHas("files", [
        "name" => $file->name,
        "size" => $file->size * 1024,
        "file_type" => $uploadedFile->getMimeType(),
        "user_id" => $user->id
    ]);

    $response->assertRedirect();
});

test("guests cant enter the request", function() {
    $response = $this->post("/file");

    $response->assertRedirect("/login");
});


test("user can delete files", function() {
    Storage::fake("local");

    $user = User::factory()->create();
    $file = File::factory()->create([
        "user_id" => $user->id,
        "random_name" => $user->name . "/example.png"
    ]);

    $this->actingAs($user)->delete(route("file.delete", ["file" => $file]));
    
    $this->assertDatabaseMissing("files", [
        "id" => $file->id
    ]);
});


test("user can mark files as favorite", function() {

    $user = User::factory()->create();
    $file = File::factory()->create([
        "user_id" => $user->id,
        "is_favorite" => false,
        "random_name" => "1"
    ]);

    $this->actingAs($user)->put(route("file.setFavorite", ["file" => $file]));
    
    $this->assertDatabaseHas("files", [
        "is_favorite" => true
    ]);
});
