<?php

use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get("/", function() {
    return Inertia::render("Home");
})->name("Home");

Route::middleware("guest")->group(function() {
    Route::get("/login", [AuthenticatedSessionController::class, "create"])->name("login");
});

require __DIR__.'/auth.php';
