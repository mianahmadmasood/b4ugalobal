<?php

namespace App\Http\Controllers;


use App\Http\Requests\Templates\EmailSaveRequest;
use App\Http\Requests\Templates\EmailUpdateRequest;
use App\Http\Requests\Templates\PushNotificationSaveRequest;
use App\Http\Requests\Templates\PushNotificationUpdateRequest;
use App\Http\Requests\Templates\SmsSaveRequest;
use App\Http\Requests\Templates\SmsUpdateRequest;
use Spatie\Browsershot\Browsershot;
use Illuminate\Support\Facades\Storage;
use VerumConsilium\Browsershot\Facades\Screenshot;
use Anam\PhantomMagick\Converter;
use Intervention\Image\ImageManagerStatic as Image;

use Illuminate\Support\Facades\Log;
use App\Models\Template;
use Illuminate\Http\Request;

class TemplateController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index($type)
    {
       if(!empty($type)) {
           $template = Template::where('medium', $type)->paginate(10);
       }else {
           $template = Template::paginate(10);
       }
        if($template) {
            $massage = 'All Template Data';
            return successResponse($template, $massage);
        }else{
            $massage = "Error:Data no more";
            $error =[];
            return errorResponse($error, $massage);
        }
    }

    public function allTemplateData($type)
    {
       if(!empty($type)) {
           $template = Template::where('medium', $type)->select('id','subject')->get();
       }
        if($template) {
            $massage = 'All Template Data';
            return successResponse($template, $massage);
        }else{
            $massage = "Error:Data no more";
            $error =[];
            return errorResponse($error, $massage);
        }
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function emailStore(EmailSaveRequest $request)
    {
        $base64_image=$request->base64Image;
        $folderPath ="emailTemplate";

        if ($base64_image) {
//        if (preg_match('/^data:image\/(\w+);base64,/', $base64_image)) {

            $data = substr($base64_image, strpos($base64_image, ',') + 1);
            $data = base64_decode($data);
            $image_parts = explode(";base64,", $base64_image);
            $image_type_aux = explode("image/", $image_parts[0]);
            $image_type = $image_type_aux[1];
            $image_name = $folderPath . uniqid() . '.'.$image_type;
            $result=Storage::disk('local')->put($image_name, $data );
            $imagefullPath = env("baseimage_url").$image_name;
        }
        $saveEmailTemp['subject'] = $request->subject;
        $saveEmailTemp['medium'] = $request->medium;
        $saveEmailTemp['email_content'] = $request->email_content;
        $saveEmailTemp['category'] = $request->category;
        $saveEmailTemp['thumbnail_path'] = !empty($result)?$imagefullPath:"";
        $saveEmailTemp['design'] = $request->design;
        $template = Template::insertGetId($saveEmailTemp);
        if($template) {
            $massage = 'save email template';
            return successResponse($template, $massage);
        }else{
            $massage = "Error:Data is missing";
            return errorResponse($massage);
        }
    }



    public function smsStore(SmsSaveRequest $request)
    {
        $saveSmsTemp['subject'] = $request->subject;
        $saveSmsTemp['medium'] = $request->medium;
        $saveSmsTemp['txt'] = $request->txt;
        $saveSmsTemp['category'] = $request->category;
        $template = Template::insertGetId($saveSmsTemp);
        if($template) {
            $massage = 'save Sms template';
            return successResponse($template, $massage);
        }else{
            $massage = "Error:Data is missing";
            return errorResponse($massage);
        }
    }

    public function pushNotificationStore(PushNotificationSaveRequest $request)
    {
        $image=$request->image_path;
        $destination = 'notifi';
        if ( !empty($image) &&  $image != null) {
            $image_type= $image->getClientOriginalExtension();
            $pre_fix="notifiImage";
            $full_name = $pre_fix . uniqid() . time() . '.' . $image_type;
            $result_image_path = $image->storeAs($destination, $full_name, 'local');
            $imagefullPath = env("baseimage_url").$result_image_path;
        }
        $thumbnail=$request->thumbnail_path;
        if ( !empty($thumbnail) &&  $thumbnail != null) {
            $image_type= $thumbnail->getClientOriginalExtension();
            $pre_fix="notifiThumbnail";
            $full_name = $pre_fix . uniqid() . time() . '.' . $image_type;
            $result_thumbnail_path = $thumbnail->storeAs($destination, $full_name, 'local');
            $thumbnailfullPath = env("baseimage_url").$result_thumbnail_path;
        }
        $savePushNotiTemp['subject'] = $request->subject;
        $savePushNotiTemp['medium'] = $request->medium;
        $savePushNotiTemp['promo_code'] = $request->promo_code;
        $savePushNotiTemp['image_path'] = $result_image_path;
        $savePushNotiTemp['image_path'] = !empty($result_image_path)?$imagefullPath:"";
        $savePushNotiTemp['thumbnail_path'] = !empty($result_thumbnail_path)?$thumbnailfullPath:"";
        $savePushNotiTemp['category'] = $request->category;
        $template = Template::insertGetId($savePushNotiTemp);
        if($template) {
            $massage = 'save Push Notification template';
            return successResponse($template, $massage);
        }else{
            $massage = "Error:Data is missing";
            return errorResponse($massage);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $template = Template::where('id', $id)->first();
        if($template) {
            $massage = 'Template Data';
            return successResponse($template, $massage);
        }else{
            $massage = "Error:Data is missing";
            $error =[];
            return errorResponse($error, $massage);
        }
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */

    public function emailUpdate(EmailUpdateRequest $request)
    {
        $base64_image=$request->base64Image;
        $folderPath ="emailTemplate";
        if (preg_match('/^data:image\/(\w+);base64,/', $base64_image)) {
            $data = substr($base64_image, strpos($base64_image, ',') + 1);
            $data = base64_decode($data);
            $image_parts = explode(";base64,", $base64_image);
            $image_type_aux = explode("image/", $image_parts[0]);
            $image_type = $image_type_aux[1];
            $image_name = $folderPath . uniqid() . '.'.$image_type;
            $result=Storage::disk('local')->put($image_name, $data );
            $imagefullPath = env("baseimage_url").$image_name;
        }
        $updateEmailTemp = Template::find($request->id);
        $updateEmailTemp['subject'] = !empty($request->subject)?$request->subject: $updateEmailTemp->subject;
        $updateEmailTemp['medium'] = !empty($request->medium)?$request->medium: $updateEmailTemp->medium;
        $updateEmailTemp['email_content'] = !empty($request->email_content)?$request->email_content: $updateEmailTemp->email_content;
        $updateEmailTemp['category'] = !empty($request->category)?$request->category: $updateEmailTemp->category;
        $updateEmailTemp['thumbnail_path'] = !empty($result)?$imagefullPath:$updateEmailTemp->thumbnail_path;
        $updateEmailTemp['design'] = !empty($request->design)?$request->design: $updateEmailTemp->design;
        $template = $updateEmailTemp->save();
        if($template) {
            $massage = 'update email template';
            return successResponse($template, $massage);
        }else{
            $massage = "Error:Data is missing";
            return errorResponse($massage);
        }
    }

    public function smsUpdate(SmsUpdateRequest $request)
    {
        $updateSmsTemp = Template::find($request->id);
        $updateSmsTemp['subject'] = !empty($request->subject)?$request->subject: $updateSmsTemp->subject;
        $updateSmsTemp['medium'] =  !empty($request->medium)?$request->medium: $updateSmsTemp->medium;
        $updateSmsTemp['txt'] = !empty($request->txt)?$request->txt: $updateSmsTemp->txt;
        $updateSmsTemp['category'] = !empty($request->category)?$request->category: $updateSmsTemp->category;
        $template = $updateSmsTemp->save();
        if($template) {
            $massage = 'update Sms template';
            return successResponse($template, $massage);
        }else{
            $massage = "Error:Data is missing";
            return errorResponse($massage);
        }
    }

    public function pushNotificationUpdate(PushNotificationUpdateRequest $request)
    {
        $image=$request->image_path;
        $destination = 'notifi';
        if ( !empty($image) &&  $image != null) {
            $image_type= $image->getClientOriginalExtension();
            $pre_fix="notifiImage";
            $full_name = $pre_fix . uniqid() . time() . '.' . $image_type;
            $result_image_path = $image->storeAs($destination, $full_name, 'local');
            $imagefullPath = env("baseimage_url").$result_image_path;
        }
        $thumbnail=$request->thumbnail_path;
        if ( !empty($thumbnail) &&  $thumbnail != null) {
            $image_type= $thumbnail->getClientOriginalExtension();
            $pre_fix="notifiThumbnail";
            $full_name = $pre_fix . uniqid() . time() . '.' . $image_type;
            $result_thumbnail_path = $thumbnail->storeAs($destination, $full_name, 'local');
            $thumbnailfullPath = env("baseimage_url").$result_thumbnail_path;
        }

        $updatePushNotiTemp = Template::find($request->id);
        $updatePushNotiTemp['subject'] = !empty($request->subject)?$request->subject: $updatePushNotiTemp->subject;
        $updatePushNotiTemp['medium'] = !empty($request->medium)?$request->medium: $updatePushNotiTemp->medium;
        $updatePushNotiTemp['promo_code'] = !empty($request->promo_code)?$request->promo_code: $updatePushNotiTemp->promo_code;
        $updatePushNotiTemp['image_path'] = !empty($result_image_path)?$imagefullPath:$updatePushNotiTemp->image_path;
        $updatePushNotiTemp['thumbnail_path'] = !empty($result_thumbnail_path)?$thumbnailfullPath:$updatePushNotiTemp->thumbnail_path;
        $updatePushNotiTemp['category'] = !empty($request->category)?$request->category: $updatePushNotiTemp->category;
        $template = $updatePushNotiTemp->save();
        if($template) {
            $massage = 'update Push Notification template';
            return successResponse($template, $massage);
        }else{
            $massage = "Error:Data is missing";
            return errorResponse($massage);
        }
    }


    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $templateDelete = Template::find( $id );
        $result = $templateDelete->delete();

        if($result) {
            $massage = 'Deleted template';
            return successResponse($result, $massage);
        }else{
            $massage = "Error";
            $error =$result;
            return errorResponse($error, $massage);
        }
    }
}
