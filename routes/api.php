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
        Route::get('/lop/{id}', 'Admin\StudentsController@show');
        Route::delete('/delete/{id}', 'Admin\StudentsController@destroy');
        Route::post('/uploadfile', 'Admin\StudentsController@uploadfile');
    });
    Route::group(['prefix' => 'lop', 'middleware' => ['jwt.auth']], function () {
      Route::get('/', 'Admin\LopController@index');
      Route::get('/khoa', 'Admin\LopController@getKhoa');
      Route::get('/{id}', 'Admin\LopController@show');
      Route::get('/khoa/{id}', 'Admin\LopController@getLopCuaKhoa');
  });
    Route::group(['prefix' => 'lophocphan', 'middleware' => ['jwt.auth']], function () {
        Route::get('/', 'Admin\LophocphanController@index');
        Route::get('/danhsachsinhvien/{id}', 'Admin\LophocphanController@danhsachsinhvien');
        Route::get('/danhsachsinhvien/tongcauhoi/{id}', 'Admin\LophocphanController@tongcauhoi');
        Route::get('/mon/danhsachsinhvien/{id}', 'Admin\LophocphanController@sinhvienkhongthuocmon');
        Route::post('/addsinhvien', 'Admin\LophocphanController@store');
        Route::post('/themlophocphan', 'Admin\LophocphanController@themlophocphan');
        Route::get('/themsinhvienmon', 'Admin\LophocphanController@getMon');
        Route::delete('/delete/{id}/{mssv}', 'Admin\LophocphanController@delete');
    });
    Route::group(['prefix' => 'mon', 'middleware' => ['jwt.auth']], function () {
      Route::get('/', 'Admin\MonController@index');
      Route::delete('/delete/{id}', 'Admin\MonController@delete');
    });
    Route::group(['prefix' => 'question', 'middleware' => ['jwt.auth']], function () {
        Route::post('/add','Admin\QuestionController@store');
        Route::get('/listquestion', 'Admin\QuestionController@index');
        Route::delete('/{id}/delete', 'Admin\QuestionController@delete');
        Route::put('/update/{id}', 'Admin\QuestionController@update');
        Route::get('/listquestion/{id}', 'Admin\QuestionController@show');
    });
    Route::group(['prefix' => 'lichthi', 'middleware' => ['jwt.auth']], function () {
        Route::get('/xemlichthi', 'Admin\LichThiController@index');
        Route::post('/add', 'Admin\LichThiController@store');
        Route::delete('/delete/{id}', 'Admin\LichThiController@destroy');
    });
});


Route::prefix('student')->group(function () {
    Route::post('login', 'Student\LoginController@login');
    Route::group(['prefix' => 'v1'], function(){
        Route::get('details', 'Student\LoginController@details')->middleware('auth:api');
        Route::get('getmon', 'Student\LoginController@getMon')->middleware('auth:api');
        Route::get('getdanhsachmonthi', 'Student\StudentController@getDanhSachMonThi')->middleware('auth:api');
        Route::post('getdethi', 'Student\StudentController@getDeThi')->middleware('auth:api');
        Route::post('nopbaithi', 'Student\StudentController@nopBaiThi')->middleware('auth:api');
    });
});
