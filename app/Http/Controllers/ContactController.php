<?php

namespace App\Http\Controllers;

use App\Models\Contact;

class ContactController extends Controller
{
    public function index()
    {
        $allConact = Contact::paginate(10);
        if( $allConact) {
            $massage = 'All Contact Data';
            return successResponse($allConact, $massage);
        }else{
            $massage = "Error:Data no more";
            $error =[];
            return errorResponse($error, $massage);
        }

    }
}
