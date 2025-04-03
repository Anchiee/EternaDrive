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

    $this->assertEquals(1, $user->is_banned);

    $response = $this->actingAs($admin, "admin")->put(route("admin.ban"), [
        "id" => $user->id,
    ]);

    $user->refresh();

    $response->assertRedirect();

    $this->assertEquals(0, $user->is_banned);

});




test("admins can log out", function() {
    $user = Admin::factory()->create();

    $response = $this->actingAs($user, "admin")->delete(route("admin.destroy"));

    $this->assertFalse(auth()->guard("admin")->check());
});