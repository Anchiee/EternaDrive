<?php


use App\Models\Admin;
use App\Models\User;

use Illuminate\Foundation\Testing\RefreshDatabase;

uses(RefreshDatabase::class);

test("admin can generate accounts", function() {
    $user = Admin::factory()->create();

    $response = $this->actingAs($user)->post(route("admin.create"));

    $response->assertRedirect();

    $this->assertDatabaseHas("admins", [
        "name" => Admin::latest()->first()->name
    ]);

});


test("admin can ban and unban users", function() {

    $user = User::factory()->create();
    $admin = Admin::factory()->create();

    $response = $this->actingAs($admin, "admin")->put(route("admin.ban"), [
        "id" => $user->id,
    ]);

    $user->refresh();

    $response->assertRedirect();

    $this->assertTrue($user->is_banned);

    $response = $this->actingAs($admin, "admin")->put(route("admin.ban"), [
        "id" => $user->id,
    ]);

    $user->refresh();

    $response->assertRedirect();

    $this->assertFalse($user->is_banned);

});




test("admins can log out", function() {
    $user = Admin::factory()->create();

    $response = $this->actingAs($user, "admin")->delete(route("admin.destroy"));

    $this->assertFalse(auth()->guard("admin")->check());
});


test("users get unbanned after hitting expiration date", function() {
    $user = User::factory()->create([
        "is_banned" => 1,
        "ban_expires_at" => now(),
    ]);


    $this->travel(5)->years();
    $response = $this->actingAs($user)->get("/settings");

    $user->refresh();

    $this->assertFalse($user->is_banned);
    $this->assertNull($user->ban_expires_at);

});


test("users get perma banned when no expiration date given", function() {
    $user = User::factory()->create([
        "is_banned" => 1,
        "ban_expires_at" => null
    ]);


    $this->travel(5)->years();
    $response = $this->actingAs($user)->get("/settings");

    $user->refresh();

    $response->assertRedirect("/banned");
    $this->assertTrue($user->is_banned);
    $this->assertNull($user->ban_expires_at);
});