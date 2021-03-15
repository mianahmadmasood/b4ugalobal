<?php

use Illuminate\Support\Facades\Route;
//use Inertia\Inertia;
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

// Route::get('/', function () {
//     return view('welcome');
// });
// Route::get('/contact/{id?}', function () {
//     return Inertia::render('Dashboard');
// });

Route::get('{any?}', function () {
    return view('app');
})->where('any', '.*');

// Route::group(['middleware' => ['auth']->name('dashboard')], function () {
//     Route::get('/dashboard', function(){
//         return Inertia::render('Dashboard');
//     });
//     Route::get('/dashboard', function(){
//         return Inertia::render('Dashboard');
//     });

// });


// Route::get('admin', function(){
//     return Inertia::render('Admin');
//   });

// Route::get('login', function(){
//     return Inertia::render('Login');
//   });


//require __DIR__.'/auth.php';

