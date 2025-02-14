<?php

use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\Auth\ConfirmablePasswordController;
use App\Http\Controllers\Auth\EmailVerificationNotificationController;
use App\Http\Controllers\Auth\EmailVerificationPromptController;
use App\Http\Controllers\Auth\NewPasswordController;
use App\Http\Controllers\Auth\PasswordController;
use App\Http\Controllers\Auth\PasswordResetLinkController;
use App\Http\Controllers\Auth\RegisteredUserController;
use App\Http\Controllers\Auth\VerifyEmailController;
use Illuminate\Foundation\Auth\EmailVerificationRequest;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Illuminate\Http\Request;


Route::middleware("guest")->group(function() {
  Route::post("/sign", [RegisteredUserController::class, "store"])->name("sign");
  Route::post("/login", [AuthenticatedSessionController::class, "store"])->name("login");

  Route::get("/forgot-password", [PasswordResetLinkController::class, "create"])->
  name("password.request");

  Route::post("/forgot-password", [PasswordResetLinkController::class, "store"])->middleware("throttle:1,1")->
  name("password.email");

  Route::get("/reset-password/{token}", [NewPasswordController::class, "create"])->
  name("password.reset");
});

Route::middleware("auth")->group(function () {

  
  Route::get("/email/verify", function() {
    return Inertia::render("Auth/verifyEmail");
  })->name("verification.notice");

  Route::get("/email/verify/{id}/{hash}", function(EmailVerificationRequest $request) {
    $request->fulfill();

    return redirect(route("dashboard", absolute:false));
  })->middleware("signed")->name("verification.verify");

  Route::post("/email/verify", function(Request $request) {
    $request->user()->sendEmailVerificationNotification();

    return back()->with("message","Verification link sent!");
  })->middleware("throttle:6,1")->name("verification.send");
});

