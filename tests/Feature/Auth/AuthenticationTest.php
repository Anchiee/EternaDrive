<?php

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;

uses(RefreshDatabase::class);

test("user can access the login screen", function() {
    $response = $this->get("/login");

    $response->assertStatus(200);
});

test("authenticated user cant see the login", function() {
    $user = User::factory()->create();


    $response = $this->actingAs($user)->get("/login");

    $response->assertRedirect(route("file.index", ["type" => "all"]));
});


test("empty inputs will appear upon giving an empty input", function() {
    $response = $this->post("/login", [
        "email" => "",
        "password" => ""
    ]);

    $response->assertSessionHasErrors(["email", "password"]);
});

test("incorrect credentials error when giving wrong info", function() {
    $response = $this->post("/login", [
        "email" => "wrong@example.com",
        "password" => "invalid-password"
    ]);

    $response->assertSessionHasErrors();
});


test("user redirected to verify email when logging and not verified", function() {
    $password = "123";
    $user = User::factory()->create([
        "password" => bcrypt($password),
        "email_verified_at" => null
    ]);

    $response = $this->post("/login", [
        "email" => $user->email,
        "password" => $password,
        
    ]);

    $response->assertRedirect(route("file.index", ["type" => "all"]));

    $protectedResponse= $this->actingAs($user)->get(route("file.index", ["type" => "all"]));
    $protectedResponse->assertRedirect("/email/verify");
});

