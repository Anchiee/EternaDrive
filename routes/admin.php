<?php


use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Http\Controllers\AdminController;
use Illuminate\Foundation\Application;

Route::post("admin/login", [AdminController::class, "store"])->middleware("blockadmin")->name("admin.store");
Route::get("/admin/login", [AdminController::class, "index"])->middleware("blockadmin")->name("admin.index"); 

Route::middleware(["admin", "CheckBanned"])->group(function () {
    Route::get("/admin/dashboard", [AdminController::class, "show"])->name("admin.show");
    Route::post("/admin/dashboard", [AdminController::class, "create"])->name("admin.create");
    Route::delete("/admin/dashboard", [AdminController::class, "destroy"])->name("admin.destroy");
    Route::put("/admin/dashboard", [AdminController::class, "ban"])->name("admin.ban");
});