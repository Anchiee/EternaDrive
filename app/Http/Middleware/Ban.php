<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Carbon\Carbon;

class Ban
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $user = auth()->user();
        $todayDate = now();

        if($user && $user->is_banned) {

            if($user->ban_expires_at && $user->ban_expires_at->lt($todayDate)) {
                $user->is_banned = 0;
                $user->ban_expires_at = null;

                $user->save();

                return $next($request);
            }

            return redirect('/banned');
        }
        return $next($request);
    }
}
