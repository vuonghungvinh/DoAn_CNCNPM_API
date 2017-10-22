<?php
namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Http\Requests;
use App\Http\Controllers\Controller;
use JWTAuth;
use App\Admin;
use JWTAuthException;

class LoginController extends Controller
{   
    private $user;
    public function __construct(Admin $user){
        $this->user = $user;
    }
    
    public function login(Request $request){
        $credentials = $request->only('name', 'password');
        $token = null;
        try {
        \Config::set('auth.providers.users.model', \App\Admin::class);
           if (!$token = JWTAuth::attempt($credentials)) {
            return response()->json(['invalid_name_or_password'], 422);
           }
        } catch (JWTAuthException $e) {
            return response()->json(['failed_to_create_token'], 500);
        }
        return response()->json(compact('token'));
    }

    public function getAuthUser(Request $request){
        $user = JWTAuth::toUser($request->token);
        return response()->json(['result' => $user]);
    }
}  