<?php

use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;



Route::middleware(["auth", "verified"])->group(function() {
  Route::delete("/user", [AuthenticatedSessionController::class, "destroy"])->name("user.destroy");
  Route::delete("/settings", [ProfileController::class, "destroy"])->name("user.delete");
  Route::put("/settings", [ProfileController::class, "update"])->name("user.update");
});