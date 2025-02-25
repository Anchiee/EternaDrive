<?php

use App\Models\User;

test('unauthed users cant access the page', function () {
    $response = $this->get("/settings");
    $response->assertRedirect("/login");
});

test('users can access the page', function () {
    $user = User::factory()->create();

    $response = $this->actingAs($user)->get("/settings");
    $response->assertStatus(200);
});


test("users can change the info", function() {
    $user = User::factory()->create([
        "password" => bcrypt("password")
    ]);

    $this->actingAs($user)->put("/settings", [
        "name" => "updated_name",
        "password" => "password"
    ]);

    $this->assertDatabaseHas("users", [
        "name" => "updated_name"
    ]);
});

test("empty input error upon giving empty input", function() {
    $user = User::factory()->create([
        "password" => bcrypt("password")
    ]);

    $response = $this->actingAs($user)->put("/settings", [
        "name" => "",
        "password" => "password"
    ]);

    $response->assertSessionHasErrors("name");
});

test("files are being deleted upon user deleting their account", function() {
    Storage::fake("local");

    $user = User::factory()->create();

    $response = $this->actingAs($user)->delete("/settings");

    $response->assertRedirect("/");

    Storage::disk("local")->assertMissing($user->name);
});

test("user is deleted", function() {
    $user = User::factory()->create([
        "password" => bcrypt("password")
    ]);

    $response = $this->actingAs($user)->delete("/settings", [
        "password" => "password"
    ]);

    $response->assertRedirect("/");

    $this->assertDatabaseMissing($user);
});

test("acccount deletion error while giving empty input", function() {
    $user = User::factory()->create();

    $response = $this->actingAs($user)->delete("/settings", [
        "password" => ""
    ]);

    $response->assertSessionHasErrors("password");
});