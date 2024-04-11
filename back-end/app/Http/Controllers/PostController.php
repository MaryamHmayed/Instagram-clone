<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Auth;
use App\Models\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{
    function viewPosts(Request $req){
            $user_id = $req->user_id;
        
            $posts = Post::where("user_id",$user_id)->orderBy('created_at', 'desc')->get();

            if ($posts->isNotEmpty()) {
                return response()->json([
                    'success' => true,
                    'data' => $posts
                ]);
            }
        
            return response()->json([
                'success' => false,
                'message' => 'No posts found.'
            ], 404);
        }
    };

    function createPost(Request $req){
        
        $req->validate([
            'caption' => 'required|string|max:255',
            'image' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048',
        ]);

        $imagePath = $req->file('image')->store('images', 'public');

        $post = new Post();
        $post->user_id = Auth::id();
        $post->caption = $req->caption;
        $post->image_url = $imagePath;
      
        $post->save();

        return response()->json([
            'success' => true,
            'message' => 'Post created successfully.',
            'data' => $post
        ]);
    // function likePost(Request $req){};
    // function commentPost(Request $req){}


    }

    


    

