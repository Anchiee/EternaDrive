<?php

use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\Auth\NewPasswordController;
use App\Http\Controllers\Auth\PasswordResetLinkController;
use App\Http\Controllers\Auth\RegisteredUserController;
use Illuminate\Foundation\Auth\EmailVerificationRequest;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Illuminate\Http\Request;


Route::middleware("guest")->group(function() {
  Route::post("/sign", [RegisteredUserController::class, "store"])->name("sign");
  Route::post("/login", [AuthenticatedSessionController::class, "store"])->name("login");


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

});

Route::middleware("auth")->group(function () {

  //display the verify email notification
  Route::get("/email/verify", function() {
    return Inertia::render("Auth/verifyEmail");
  })->name("verification.notice");

  //when the user clicks the link
  Route::get("/email/verify/{id}/{hash}", function(EmailVerificationRequest $request) {
    $request->fulfill();

    return redirect(route("file.index", absolute:false));
  })->middleware("signed")->name("verification.verify");

  //resend the email link
  Route::post("/email/verify", function(Request $request) {
    $request->user()->sendEmailVerificationNotification();

    return back()->with("message","Verification link sent!");
  })->middleware("throttle:6,1")->name("verification.send");

});

