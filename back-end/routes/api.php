<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\FollowController;

Route::group(['middleware' => 'auth:api'], function () {
    Route::post('/login', [AuthController::class, 'login']);
    Route::post('register', [AuthController::class, 'register']);
    Route::post('logout', [AuthController::class, 'logout']);
    Route::post('refresh', [AuthController::class, 'refresh']);
});
Route::post('/login', [AuthController::class, 'login']);
Route::post('register', [AuthController::class, 'register']);


Route::middleware('auth:api')->group(function () {
    Route::get('/posts', [PostController::class, 'viewPosts']);
});

Route::get('/followers', [FollowController::class, 'getFollowers']);
Route::get('/following', [FollowController::class, 'getFollowing']);
Route::post('/follow/{following_id}', [FollowController::class, 'followUser']);
Route::post('/follow/{following_id}', [FollowController::class, 'unfollowUser']);




Route::get('/posts', [PostController::class, 'viewPosts']);
Route::post('/addPost', [PostController::class, 'createPost']);
Route::post('/likePost', [PostController::class, 'likePost']);
Route::post('/comment', [PostController::class, 'commentOnPost']);




Route::get('/Profile', [PostController::class, 'getProfile']);
Route::post('/profile/edit', [PostController::class, 'updateProfile']);
