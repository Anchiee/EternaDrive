<?php

use App\Models\File;
use App\Models\User;
use Illuminate\Http\UploadedFile;
use App\Exceptions\InvalidOrderException;
use Illuminate\Support\Facades\Exceptions;


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

    $this->assertDatabaseHas("users", [
        "name" => $user->name,
        "memory_usage" => $file->size * 1024,
    ]);

    $response->assertRedirect();
});

test("guests cant enter the request", function() {
    $response = $this->post("/file");

    $response->assertRedirect("/login");
});


test("user can delete files", function() {
    Storage::fake("local");

    UploadedFile::fake()->create("example.png", 1024, "image/png");

    $user = User::factory()->create([
        "memory_usage" => 1024
    ]);

    $file = File::factory()->create([
        "user_id" => $user->id,
        "random_name" => $user->name . "/example.png",
        "size" => 1024
    ]);
    $newMemoryUsage = $user->memory_usage - $file->size;

    $this->actingAs($user)->delete(route("file.delete", ["file" => $file]));

    
    $this->assertDatabaseMissing("files", [
        "id" => $file->id
    ]);
    $this->assertDatabaseHas("users", [
        "name" => $user->name,
        "memory_usage" => $newMemoryUsage
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


test("user cant upload files if their memory usage is over 100mb", function() {
    $user = User::factory()->create([
        "memory_usage" => 104857600
    ]);

    $uploadedFile = UploadedFile::fake()->create("example.png", 1024, "image/png");

    $response = $this->actingAs($user)->post("/file", [
        "file" => $uploadedFile
    ]);
    $response->assertSessionHasErrors("file");
}) ;