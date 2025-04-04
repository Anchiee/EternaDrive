<?php

namespace App\Http\Middleware;

use Illuminate\Http\Request;
use Inertia\Middleware;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     */
    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        return [
            ...parent::share($request),
            'auth' => [
                'user' => $request->user(),
                'admin' => auth()->guard('admin')->user()
            ],
            'flash' => 
            [
                'signedUrl' => fn () => $request->session()->get('signedUrl'),
                'adminStatus' => fn() => $request->session()->get('generateStatus'),
                'adminName' => fn() => $request->session()->get('name'),
                'adminPass' => fn() => $request->session()->get('pass'),
                'banStatus' => fn() => $request->session()->get('banStatus'),
            ],
        ];
    }
}
