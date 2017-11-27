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
        Route::get('/thongtinsinhvien/{id}', 'Admin\StudentsController@thongtinsinhvien');
        Route::post('/create', 'Admin\StudentsController@store');
        Route::get('/lop/{id}', 'Admin\StudentsController@lopsinhviendanghoc');
        Route::get('/lopnghihoc/{id}', 'Admin\StudentsController@lopsinhviennghihoc');
        Route::get('/loptotnghiep/{id}', 'Admin\StudentsController@lopsinhvientotnghiep');
        Route::get('/sinhviennghihoc', 'Admin\StudentsController@getsinhviennghihoc');
        Route::get('/sinhvientotnghiep', 'Admin\StudentsController@getsinhvientotnghiep');
        Route::delete('/delete/{id}', 'Admin\StudentsController@destroy');
        Route::post('/uploadfile', 'Admin\StudentsController@uploadfile');
        Route::put('/update/{id}', 'Admin\StudentsController@update');
    });
    Route::group(['prefix' => 'xemlaibaithi', 'middleware' => ['jwt.auth']], function () {
        Route::get('/', 'Admin\XemLaiBaiThiController@list');
        Route::get('/{id}', 'Admin\XemLaiBaiThiController@detail');
    });
    Route::group(['prefix' => 'lop', 'middleware' => ['jwt.auth']], function () {
      Route::get('/', 'Admin\LopController@index');
      Route::get('/khoa', 'Admin\LopController@getKhoa');
      Route::get('/tongsosinhvien', 'Admin\LopController@getsoluongsinhvien');
      Route::get('/{id}', 'Admin\LopController@show');
      Route::post('/themlop', 'Admin\LopController@store');
      Route::get('/khoa/{id}', 'Admin\LopController@getLopCuaKhoa');
  });
    Route::group(['prefix' => 'lophocphan', 'middleware' => ['jwt.auth']], function () {
        Route::get('/lophpcuamon/{id}', 'Admin\LophocphanController@lophptheomon');
        Route::get('/', 'Admin\LophocphanController@index');
        Route::get('/checkdkthi/{id}', 'Admin\LophocphanController@checkdk');
        Route::get('/lophptheomon/{id}', 'Admin\LophocphanController@getlophpcungmon');
        Route::put('/update/{id}', 'Admin\LophocphanController@update');
        Route::put('/chuyenlophp', 'Admin\LophocphanController@chuyenlophp');
        Route::get('/allchuadkthi', 'Admin\LophocphanController@getalllophpchuadkthi');
        Route::get('/chuadkthi/{id}', 'Admin\LophocphanController@getlophpchuadkthi');
        Route::get('/danhsachsinhvien/{id}', 'Admin\LophocphanController@danhsachsinhvien');
        Route::get('/danhsachsinhvien/tongcauhoi/{id}', 'Admin\LophocphanController@tongcauhoi');
        Route::post('/mon/danhsachsinhvien', 'Admin\LophocphanController@sinhvienkhongthuoclophp');
        Route::post('/addsinhvien', 'Admin\LophocphanController@store');
        Route::post('/themlophocphan', 'Admin\LophocphanController@themlophocphan');
        Route::get('/themsinhvienmon', 'Admin\LophocphanController@getMon');
        Route::delete('/delete/{id}/{mssv}', 'Admin\LophocphanController@deletesinhviencualophp');
        Route::delete('/delete/{id}', 'Admin\LophocphanController@deletelopHP');
    });
    Route::group(['prefix' => 'mon', 'middleware' => ['jwt.auth']], function () {
      Route::get('/', 'Admin\MonController@index');
      Route::delete('/delete/{id}', 'Admin\MonController@delete');
      Route::post('/themmon', 'Admin\MonController@store');
    });
    Route::group(['prefix' => 'question', 'middleware' => ['jwt.auth']], function () {
        Route::post('/add','Admin\QuestionController@store');
        Route::get('/listquestion', 'Admin\QuestionController@index');
        Route::get('/listquestion/khoiphuc/{id}', 'Admin\QuestionController@khoiphuccauhoi');
        Route::get('/listquestionbixoa', 'Admin\QuestionController@getcauhoibixoa');
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
