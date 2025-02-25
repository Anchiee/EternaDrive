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

test("files are being deleted upon user deleting their account", function() {
    Storage::fake("local");

    $user = User::factory()->create();

    $response = $this->actingAs($user)->delete("/settings");

    $response->assertRedirect("/");

    Storage::disk("local")->assertMissing($user->name);
});