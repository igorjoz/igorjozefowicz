<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index()
    {
        return Inertia::render('Home/Index');
    }

    public function aboutMe()
    {
        return view('home.about-me');
    }

    public function services()
    {
        return view('home.services');
    }
    public function contact()
    {
        return view('home.contact');
    }
}
