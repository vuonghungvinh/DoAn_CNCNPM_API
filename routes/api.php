<?php

use Illuminate\Http\Request;

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

Route::prefix('admin')->group(function () {
    Route::post('login', 'Admin\LoginController@login');
    Route::post('info', 'Admin\LoginController@getAuthUser');
    Route::group(['prefix' => 'students', 'middleware' => ['jwt.auth']], function () {
        Route::get('/', 'Admin\StudentsController@index');
        Route::post('/create', 'Admin\StudentsController@store');
    });
    Route::group(['prefix' => 'lophocphan', 'middleware' => ['jwt.auth']], function () {
        Route::get('/', 'Admin\LophocphanController@index');
        Route::get('/danhsachsinhvien/{id}', 'Admin\LophocphanController@danhsachsinhvien');
    });
    Route::get('/mon', 'Admin\MonController@index');
    Route::group(['prefix' => 'question', 'middleware' => ['jwt.auth']], function () {
        Route::post('/add','Admin\QuestionController@store');
        Route::get('/listquestion', 'Admin\QuestionController@index');
        Route::delete('/{id}/delete', 'Admin\QuestionController@delete');
        Route::put('/listquestion/update/{id}', 'Admin\QuestionController@update');
        Route::get('/listquestion/{id}', 'Admin\QuestionController@show');
    });
});


Route::prefix('student')->group(function () {
    Route::post('login', 'Student\LoginController@login');
    Route::group(['prefix' => 'v1'], function(){
        Route::post('details', 'Student\LoginController@details')->middleware('auth:api');
    });
});
