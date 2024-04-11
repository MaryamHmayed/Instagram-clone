<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use App\Models\User;
class FollowController extends Controller
{
    
    public function getFollowers(Request $request)
    {

        $user = Auth::user();
        $followers = $user->followers;
        return response()->json(['followers' => $followers]);
    }


    public function getFollowing(Request $request)
    {

        $user = Auth::user();
        $following = $user->following;
        return response()->json(['following' => $following]);
    }




    public function followUser(Request $request, $following_id)
    {

        $userToFollow = User::findOrFail($following_id);
    
        if (Auth::user()->following->contains($userToFollow)) {
            return response()->json(['message' => 'You are already following this user.'], 400);
        }

        Auth::user()->following()->attach($userToFollow);

        return response()->json(['message' => 'You are now following the user.']);
    }


    public function unfollowUser(Request $request, $followingId)
    {
      
        $userToUnfollow = User::findOrFail($followingId);

        if (!Auth::user()->following->contains($userToUnfollow)) {
            return response()->json(['message' => 'You are not following this user.'], 400);
        }

        Auth::user()->following()->detach($userToUnfollow);

        return response()->json(['message' => 'You have unfollowed the user.']);
    }
}




