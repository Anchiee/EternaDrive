<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" class="min-h-full scroll-smooth">
    <head>
        <meta charset="utf-8">
        <title inertia>{{ config('app.name', 'Laravel') }}</title>


        <!-- Scripts -->
        @routes
        @viteReactRefresh
        @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
        @inertiaHead
    </head>
    <body class="font-montserrat bg-black px-5 md:px-20 min-h-screen">
        @inertia
    </body>
</html>
