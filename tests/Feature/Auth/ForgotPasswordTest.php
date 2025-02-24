<?php

use App\Models\User;


test("the pages render correctly", function() {
    $request = $this->get("/forgot-password");
    $request->assertStatus(200);

    $request = $this->get(route("password.request"));
    $request->assertStatus(200);
});


test("error upon entering wrong email", function() {
    $request = $this->post("/forgot-password", [
        "email" => "wrong@example.com"
    ]);

    $request->assertSessionHasErrors("email");
});


test("email sends correctly", function() {
    $user = User::factory()->create();

    $request = $this->post("/forgot-password", [
        "email" => $user->email
    ]);

    $this->assertDatabaseHas("password_reset_tokens", [
        "email" => $user->email
    ]);

});


test("error upon empty input", function() {

    $request = $this->post("/forgot-password", [
        "email" => ""
    ]);
    $request->assertSessionHasErrors("email");

    $user = User::factory()->create();

    $token = Password::createToken($user);

    $request = $this->post(route("password.update", ["token" => $token]), [
        "token" => $token,
        "email" => "",
        "password" => "",
        "password_confirmation" => "" 
    ]);

    $request->assertSessionHasErrors(["email", "password"]);

});


test("authed user cant enter the pages", function() {

    $user = User::factory()->create();

    $request = $this->actingAs($user)->get("/forgot-password");
    $request->assertRedirect("/dashboard");


    $user = User::factory()->create();
    $token = Password::createToken($user);
    $request = $this->actingAs($user)->get(route("password.reset", ["token" => $token]), [
        "token" => $token
    ]);
    $request->assertRedirect("/dashboard");

});