<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UserController extends Controller
{
    public function login(Request $request){
        $data = $request->validate([
            'name'=>'required',
            'email'=>'required|unique:users,email',
            'password'=>'required|confirmed'
        ]);
        if($data){
            return response('value is valid',200);
        }
        else{
            return response('value is invalid',404);
        }
    }
}
