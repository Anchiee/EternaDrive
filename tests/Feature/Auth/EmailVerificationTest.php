<?php
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;

uses(RefreshDatabase::class);


test('email verification page renders', function () {

    $user = User::factory()->create([
        "email_verified_at" => null
    ]);
    $response = $this->actingAs($user)->get('/email/verify');

    $response->assertStatus(200);
});

test("verified users cant access the page", function() {

    $user = User::factory()->create();
    $response = $this->actingAs($user)->get("/email/verify");

    $response->assertRedirect(route("file.index", ["type" => "all"]));
});


test("user can verify the email", function() {
    $user = User::factory()->create([
        "email_verified_at" => null
    ]);

    $verificationUrl = URL::signedRoute("verification.verify", [
        "id" => $user->id,
        "hash" => sha1($user->email)
    ]);

    $response = $this->actingAs($user)->get($verificationUrl);

    $user->refresh();
    $this->assertNotNull($user->email_verified_at);
    $response->assertRedirect(route("file.index", ["type" => "all"]));


});