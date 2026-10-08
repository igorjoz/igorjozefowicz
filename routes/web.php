<?php

use App\Http\Controllers\WorkController;
use Illuminate\Support\Facades\Route;

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

// Canonical bilingual pages and permanent redirects for the original portfolio.
Route::get('/sitemap.xml', [\App\Http\Controllers\SiteController::class, 'sitemap']);
Route::get('/{locale}/{section?}/{slug?}', [\App\Http\Controllers\SiteController::class, 'show'])
    ->where('locale', 'pl|en')
    ->where('section', 'services|projects|about|articles|contact')
    ->name('site.show');

foreach (['/', '/strona-główna', '/strona-glowna', '/index', '/home', '/home-page'] as $path) {
    Route::redirect($path, '/pl', 301);
}
foreach (['/bio', '/biography', '/about-me'] as $path) {
    Route::redirect($path, '/pl/about', 301);
}
foreach (['/usługi', '/uslugi', '/services'] as $path) {
    Route::redirect($path, '/pl/services', 301);
}
Route::redirect('/contact', '/pl/contact', 301);
Route::redirect('/blog', '/pl/articles', 301);

Route::get('/giganci-programowania', [WorkController::class, 'giganciProgramowania']);
Route::get('/giganci', [WorkController::class, 'giganciProgramowania']);
Route::get('/g', [WorkController::class, 'giganciProgramowania']);
Route::get('/gp', [WorkController::class, 'giganciProgramowania'])
    ->name('work.giganci_programowania');

Route::get('/gp2', [WorkController::class, 'giganciProgramowania']);
