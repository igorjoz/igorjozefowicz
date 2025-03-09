<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;
use Inertia\Inertia;

class BlogController extends Controller
{
    public function index()
    {
        // Retrieve blog posts from the database
        $posts = Post::select('id', 'title', 'slug')->get();
        
        return Inertia::render('Blog', ['posts' => $posts]);
    }
}
