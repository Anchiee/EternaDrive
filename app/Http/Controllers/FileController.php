<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;

class FileController extends Controller
{
    public function index() {
        return Inertia::render("Dashboard");
    }
}
