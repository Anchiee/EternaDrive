<?php

use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\Auth\RegisteredUserController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::get("/", function() {
    return Inertia::render("Home");
})->name("Home");



Route::middleware(["auth", "verified"])->group(function() {
    Route::get("/dashboard", function() {
        return Inertia::render("Dashboard");
    })->name("dashboard");

    Route::get("/settings", [ProfileController::class, "edit"])->name("profile.edit");
    Route::delete("/settings", [ProfileController::class, "destroy"])->name("profile.destroy");
});

Route::middleware("guest")->group(function() {
    Route::get("/sign", [RegisteredUserController::class, "create"])->name("sign");
    Route::get("/login", [AuthenticatedSessionController::class, "create"])->name("login");
});

require __DIR__.'/auth.php';
