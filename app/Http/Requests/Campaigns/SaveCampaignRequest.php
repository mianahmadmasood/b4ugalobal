<?php

namespace App\Http\Requests\Campaigns;

use App\Http\Requests\RequestConstants;
use App\User;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;

class SaveCampaignRequest extends FormRequest
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
            'name'          => 'required',
            'group_id'      => RequestConstants::onlyNumberValidation,
            'template_id'   => RequestConstants::onlyNumberValidation,
            'status'        => RequestConstants::TemplateCampaignStatusValidationRequire,
            'total_count'   => RequestConstants::onlyNumberValidation,
            'success_count' => 'sometimes',
            'failure_count' => 'sometimes',
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
