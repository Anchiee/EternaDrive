<?php

namespace App\Http\Controllers;
use Illuminate\Foundation\Auth\EmailVerificationRequest;
use Inertia\Inertia;
use Illuminate\Http\Request;
class EmailController extends Controller
{
    public function index()
    {
        if(auth()->user()->hasVerifiedEmail()) {
            return redirect(route("file.index"));
        }
      
        return Inertia::render("Auth/verifyEmail");
    }

    public function verificationLink(EmailVerificationRequest $request) {
        $request->fulfill();
        return redirect(route("file.index", absolute:false));
    }

    public function sendVerificationLink(Request $request) {
        $request->sendEmailVerificationNotification();
        return back()->with("message","Verification link sent!");
    }
}
