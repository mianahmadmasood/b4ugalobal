<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('/login', 'AuthController@login');

Route::middleware(['auth:sanctum'])->group(function () {
    Route::get('/users', 'UserController@index');
    Route::get('/contactListing', 'ContactController@index');

    Route::group(['prefix' => 'groups'], function () {
        Route::get('/groupsAll', 'GroupController@index');
        Route::get('/delete/{id}', 'GroupController@destroy');
        Route::get('/deleteGroupCriteria/{id}', 'GroupController@destroyGroupCriteria');
        Route::get('show/{id}', 'GroupController@show');
        Route::get('showGroupCriteria/{id}', 'GroupController@showGroupCriteria');
        Route::post('/save', 'GroupController@store');
        Route::post('/saveCriteria', 'GroupController@storeCriteria');
        Route::post('/update', 'GroupController@update');
        Route::post('/updateCriteria', 'GroupController@UpdateGroupCriteria');
    });


    Route::group(['prefix' => 'template'], function () {
        Route::get('show/{id}', 'TemplateController@show');
        Route::post('/emailSave', 'TemplateController@emailStore');
        Route::post('/smsSave', 'TemplateController@smsStore');
        Route::post('/pushNotificationSave', 'TemplateController@pushNotificationStore');

        Route::post('/emailUpdate', 'TemplateController@emailUpdate');
        Route::post('/smsUpdate', 'TemplateController@smsUpdate');
        Route::post('/pushNotificationUpdate', 'TemplateController@pushNotificationUpdate');

        Route::get('/delete/{id}', 'TemplateController@destroy');
        Route::get('/templateAllData/{type}', 'TemplateController@allTemplateData');
        Route::get('/templateAll/{type}', 'TemplateController@index');

    });
    Route::group(['prefix' => 'campaign'], function () {
        Route::get('/campaignAll', 'CampaignController@index');
        Route::get('/delete/{id}', 'CampaignController@destroy');
        Route::get('show/{id}', 'CampaignController@show');
        Route::post('/save', 'CampaignController@store');
        Route::post('/update', 'CampaignController@update');
    });

    Route::post('/logout', 'AuthController@destroy')
     ->name('logout');

});

//Route::middleware('auth:api')->get('/user', function (Request $request) {
//    return $request->user();
//});
