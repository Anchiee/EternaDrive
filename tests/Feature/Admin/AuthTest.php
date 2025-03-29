<?php

use App\Models\Admin;


test("error upon wrong inputs", function() {
    $response = $this->post(route("admin.store", [
        "name" => "",
        "password" => ""
    ]));
    $response->assertSessionHasErrors();
});


test("admin can log in", function() {
    $user = Admin::factory()->create([
        "password" => Hash::make("test"),
    ]);

    $response = $this->post(route("admin.store"), [
        "name" => $user->name,
        "password" => "test",
    ]);

    $response->assertRedirect(route("admin.show"));
});

test("error upon wrong credentials", function() {
    $user = Admin::factory()->create([
        "name" => "test123",
        "password" => Hash::make("test"),
    ]);

    $response = $this->post(route("admin.store"), [
        "name" => $user->name,
        "password" => "wrong password",
    ]);

    $response->assertSessionHasErrors();
});