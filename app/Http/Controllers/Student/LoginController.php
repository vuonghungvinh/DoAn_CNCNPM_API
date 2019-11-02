<?php

namespace App\Http\Controllers\Student;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\User;
use Illuminate\Support\Facades\Auth;
use Validator;
use App\LopHocPhan;
use App\Mon;
class LoginController extends Controller
{
    public $successStatus = 200;

    public function login(){
        if(Auth::attempt(['mssv' => request('mssv'), 'password' => request('password')])){
            $user = Auth::user();
            $success['token'] =  $user->createToken('MyApp')->accessToken;
            return response()->json(['success' => $success], $this->successStatus);
        }
        else{
            return response()->json(['error'=>'Unauthorised'], 401);
        }
    }
    public function details()
    {
        $user = Auth::user();
        return response()->json($user, $this->successStatus);
    }

    public function getMon()
    {
      $user = Auth::user();
      $lophp = Mon::with(['lichThi', 'lopHp'])->whereHas('lopHp', function($query) use ($user){
        $query->where('mssv', $user->mssv);
      })->get();
      return response()->json($lophp);
    }
}
