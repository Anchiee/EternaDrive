<?php

use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\Auth\RegisteredUserController;
use App\Http\Controllers\EmailController;
use App\Http\Controllers\ProfileController;
use Illuminate\Auth\Middleware\RedirectIfAuthenticated;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\FileController;

Route::get("/", function() {
    return Inertia::render("Home");
})->name("Home");



Route::middleware(["auth", "verified"])->group(function() {
    Route::get("/dashboard/{type}", [FileController::class, "index"])->name("file.index");    
    Route::get("/settings", [ProfileController::class, "edit"])->name("profile.edit");
});

Route::get("/email/verify", [EmailController::class, "index"])
->middleware("auth")->name("verification.notice");

Route::middleware("guest")->group(function() {
    Route::get("/sign", [RegisteredUserController::class, "create"])->name("sign.create");
    Route::get("/login", [AuthenticatedSessionController::class, "create"])->name("session.create");
});

require __DIR__.'/auth.php';
require __DIR__.'/user.php';
