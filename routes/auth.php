<?php

use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\Auth\NewPasswordController;
use App\Http\Controllers\Auth\PasswordResetLinkController;
use App\Http\Controllers\Auth\RegisteredUserController;
use App\Http\Controllers\EmailController;
use App\Http\Controllers\FileController;
use Illuminate\Foundation\Auth\EmailVerificationRequest;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Http\Controllers\OAuth2Controller;

Route::middleware("guest")->group(function() {
  Route::post("/sign", [RegisteredUserController::class, "store"])->name("sign.store");
  Route::post("/login", [AuthenticatedSessionController::class, "store"])->name("session.store");


  //creates forgot password email form
  Route::get("/forgot-password", [PasswordResetLinkController::class, "create"])->
  name("password.request");

  //sends the email link
  Route::post("/forgot-password", [PasswordResetLinkController::class, "store"])->
  name("password.email");

  //when the user clicks the link display the new password form
  Route::get("/reset-password/{token}", [NewPasswordController::class, "create"])->
  name("password.reset");

  //handle the new password form
  Route::post("/reset-password", [NewPasswordController::class, "store"])->name("password.update");

  Route::get("/github/callback", [OAuth2Controller::class, "githubCallback"])->name("github.callback");

});

Route::middleware("auth")->group(function () {


  //when the user clicks the link
  Route::get("/email/verify/{id}/{hash}", [EmailController::class, "verificationLink"])
  ->middleware("signed")->name("verification.verify");

  //resend the email link
  Route::post("/email/verify", [EmailController::class, "sendVerificationLink"])
  ->middleware("throttle:6,1")->name("verification.send");


  Route::middleware("verified")->group(function() {
    Route::post("/file", [FileController::class, "store"])->name("file.store");
    Route::delete("/file/{file}", [FileController::class, "delete"])->name("file.delete");
    Route::put("/file/{file}", [FileController::class, "setFavorite"])->name("file.setFavorite");
    Route::get("/file/download/{file}", [FileController::class, "download"])->name("file.download");
  });
});

