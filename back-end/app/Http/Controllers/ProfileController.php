<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Auth;
use App\Models\Profile;

use Illuminate\Http\Request;

class ProfileController extends Controller
{
    public function getProfile($user_id)
  
    {
        $profile = Profile::with('user')->where('user_id', $user_id)->firstOrFail();
        return response()->json([
            'id' => $profile->id,
            'bio' => $profile->bio,
            'img_url' => asset($profile->img_url), 
            'user' => [
                'id' => $profile->user->id,
                'username' => $profile->user->username,
                
            ]
        ]);
    }



 public function updateProfile(Request $req, $user_id){
    
    
    $profile = Profile::where('user_id', $user_id)->firstOrFail();

        $profile->bio = $req->input('bio');

        if ($req->hasFile('img_file')) {
            $imgPath = $req->file('img_file')->store('profile_images');
            $profile->img_url = $imgPath;
        }

        $profile->save();

        return response()->json(['message' => 'Profile updated successfully']);
    }

}