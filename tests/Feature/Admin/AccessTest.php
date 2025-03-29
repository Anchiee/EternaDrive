<?php

use App\Models\Admin;


test("login can render", function() {
    $response = $this->get("admin/login");

    $response->assertStatus(200);
});

test("admins cant access the page", function() {
    $user = Admin::factory()->create();

    $response = $this->actingAs($user, "admin")->get(route("admin.index"));
    $response->assertRedirect(route("admin.show"));
});