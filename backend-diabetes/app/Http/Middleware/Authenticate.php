<?php

namespace App\Http\Middleware;

use Illuminate\Auth\Middleware\Authenticate as Middleware;

class Authenticate extends Middleware
{
    protected function redirectTo($request)
    {
        // API TIDAK BOLEH REDIRECT KE VIEW
        if ($request->is('api/*')) {
            return null;
        }

        return null;
    }
}
