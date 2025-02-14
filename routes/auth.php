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
  Route::post("/sign", [RegisteredUserController::class, "store"])->name("register");
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

