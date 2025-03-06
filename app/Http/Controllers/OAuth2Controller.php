<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Laravel\Socialite\Facades\Socialite;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;


class OAuth2Controller extends Controller
{
    public function githubRedirect() {
        return Socialite::driver('github')->scopes("user:email")->redirect();
    }

    public function githubCallback() {
        $user = Socialite::driver("github")->user();

        $user = User::updateOrCreate([
            "email" => $user->email,
        ], [
            "name" => $user->name,
            "email" => $user->email,
            "github_id" => $user->id,
            "github_token" => $user->token,
            "github_refresh_token" => $user->refreshToken,
            "password" => Hash::make(Str::random(32)),
        ]);

        Auth::login($user);

        $user->email_verified_at = now();
        $user->save();


        return redirect(route("file.index", ["type" => "all"]));
    }

    public function discordRedirect() {
        return Socialite::driver('discord')->redirect();
    }

    public function discordCallback() {
        $user = Socialite::driver('discord')->user();
        
        $user = User::updateOrCreate([
            'email' => $user->email
        ], [
            'name' => $user->name,
            'email' => $user->email,
            'discord_id' => $user->id,
            'discord_token' => $user->token,
            'discord_refresh_token' => $user->refreshToken,
            'password' => Hash::make(Str::random(32)),
        ]);

        Auth::login($user);

        $user->email_verified_at = now();
        $user->save();

        return redirect(route("file.index", ["type" => "all"]));
    }


}
