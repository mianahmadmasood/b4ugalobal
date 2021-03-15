<?php

namespace App\Http\Requests\Templates;

use App\Http\Requests\RequestConstants;
use App\User;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;

class PushNotificationSaveRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }


    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'subject' => RequestConstants::TemplateSubjectValidationRequire,
            'medium' => RequestConstants::TemplatePushNotificationmediumValidationRequire,
            'promo_code' => 'required',
            'image_path' => 'required',
            'category' => 'required',
            'thumbnail_path' => 'required',
        ];
    }
    protected function failedValidation(\Illuminate\Contracts\Validation\Validator $validator)
    {
        $massage = "Error:The given data is invalid";
        $error =$validator->errors();
        $response = errorResponse($error, $massage);
        throw new \Illuminate\Validation\ValidationException($validator, $response);
    }
}
