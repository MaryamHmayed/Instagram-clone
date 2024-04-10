<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Auth;
use App\Models\Profile;

use Illuminate\Http\Request;

class ProfileController extends Controller
{
    public function getProfile()
    {
    $user = Auth::user();
    $profile = $user->profile;
    
    return response()->json([
        'success' => true,
        'data' => [
        'user' => $user,
        'profile' => $profile
        ]
    ]);
    }

    
}
