<?php

namespace App\Http\Controllers;

use App\Models\User;

class UserController extends Controller
{
    public function index()
    {
        $allUser = User::all();
        if($allUser) {
            $massage = 'Active User Data';
            return successResponse($allUser, $massage);
        }else{
            $massage = "Error:Data no more";
            $error =[];
            return errorResponse($error, $massage);
        }


    }
}
