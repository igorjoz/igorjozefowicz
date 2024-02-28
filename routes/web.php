<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\BlogController;
use App\Http\Controllers\WorkController;


/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/strona-główna', [HomeController::class, 'index']);
Route::get('/strona-glowna', [HomeController::class, 'index']);
Route::get('/index', [HomeController::class, 'index']);
Route::get('/home', [HomeController::class, 'index']);
Route::get('/home-page', [HomeController::class, 'index']);
Route::get('/', [HomeController::class, 'index'])
    ->name('home.index');

Route::get('/bio', [HomeController::class, 'aboutMe']);
Route::get('/biography', [HomeController::class, 'aboutMe']);
Route::get('/about-me', [HomeController::class, 'aboutMe'])
    ->name('home.about_me');

Route::get('/contact', [HomeController::class, 'contact'])
    ->name('home.contact');

Route::get('/usługi', [HomeController::class, 'services']);
Route::get('/uslugi', [HomeController::class, 'services']);
Route::get('/services', [HomeController::class, 'services'])
    ->name('home.services');

Route::get('/blog', [BlogController::class, 'index'])
    ->name('blog.index');

Route::get('/giganci-programowania', [WorkController::class, "giganciProgramowania"]);
Route::get('/giganci', [WorkController::class, "giganciProgramowania"]);
Route::get('/g', [WorkController::class, "giganciProgramowania"]);
Route::get('/gp', [WorkController::class, "giganciProgramowania"])
    ->name('work.giganci_programowania');

Route::get('/gp2', [WorkController::class, "giganciProgramowania"])
    ->name('work.giganci_programowania');
