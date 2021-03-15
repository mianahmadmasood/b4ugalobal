<?php

namespace App\Http\Controllers;

use App\Http\Requests\Groups\SaveGroupRequest;
use App\Http\Requests\Groups\UpdateGroupCriteriaRequest;
use App\Http\Requests\Groups\SaveGroupCriteriaRequest;
use App\Http\Requests\Groups\UpdateGroupRequest;
use App\Jobs\ProcessEmailSending;
use App\Models\Campaign;
use App\Models\Contact;
use App\Models\Group;
use App\Models\GroupCriteria;
use App\Models\Template;
use Illuminate\Http\Request;
use DB;
use Mail;

class  GroupController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {



//        $campaigns =  Campaign::with("template")->where('status',"created")->get();
//        foreach ($campaigns as $campaign ) {
//            $campaign_template = Template::where('id', $campaign->template_id)->where("medium","email")->first();
////            dd($campaign_template);
//            $groupCriteria = Group::with('groupCriteria')->where('id', $campaign->group_id)->first();
//            if(!empty($groupCriteria['groupCriteria'])) {
//                foreach ($groupCriteria['groupCriteria'] as $row) {
//                    if ($row['type'] == "BOOLEAN") {
//                        if ($row['value'] == "true") {
//                            $contactData = Contact::where($row['key'], $row['operator'], '1')->get();
//                        } else {
//                            $contactData = Contact::where($row['key'], $row['operator'], '0')->get();
//                        }
//                    } else {
//
//                        if($row['operator'] != "not in"){
//                            $group_value=explode(',',$row['value']);
//                            $contactData = Contact::whereIn($row['key'], $group_value)->get();
//                        }else{
//                            $contactData = Contact::where($row['key'],$row['value'])->get();
//
//                        }
//                    }
//                    $email_content =  $campaign_template->email_content;
//                    $email_content = str_replace('{$name}',"Peter",$email_content);
//                    $email_content = str_replace('{$title}',"News alter",$email_content);
//                    $email_content = str_replace('{$promo_code}',"5260",$email_content);
//                    $support_email = "postmaster@b4uglobal.com";
//                    $site_title = "B4UGlobal";
//                    $to_email = "mianahmadmasood@gmail.com";
//                    $email_content=$email_content;
//                    $result = Mail::send([], [], function ($message) use ($support_email, $site_title, $to_email,$email_content) {
//                        $message->from($support_email, $site_title);
//                        $message->subject($site_title);
//                        $message->to($to_email);
//                        $message->setBody($email_content, 'text/html');
//                    });
//
//                    dd($result);
////                    ProcessEmailSending::dispatch($email_content, $contactData);
//                }
//            }else{
//                return "group Criteria is empty";
//            }
//        }

        $group = Group::paginate(10);
        if($group) {
            $massage = 'All Group Data';
            return successResponse($group, $massage);
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
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(SaveGroupRequest $request)
    {
        DB::beginTransaction();
        $saveGroup['name'] = $request->name;
        $result = Group::insertGetId($saveGroup);
        if($result) {
            DB::commit();
            $massage = 'save group';
            return successResponse($result, $massage);
        }else{
            DB::rollback();
            $massage = "Error:Data is missing";
            $error =[];
            return errorResponse($error, $massage);
        }
    }
    public function storeCriteria(SaveGroupCriteriaRequest $request)
    {

        DB::beginTransaction();
         $groupId = $request->group_id;
        $groupArray=$request->group;
        if(!empty($groupArray)) {
            foreach ($groupArray as $row) {
                $saveGroupCriteria['group_id'] = $groupId;
                $saveGroupCriteria['type'] = $row["type"];
                $saveGroupCriteria['k'] = $row["key"];
                $saveGroupCriteria['operator'] = $row["operator"];
                $saveGroupCriteria['v'] = is_array($row["value"])?implode(",",$row["value"]):$row["value"];
                $result = GroupCriteria::insert($saveGroupCriteria);
            }
        }
        if($result) {
            DB::commit();
            $massage = 'save group and criteria';
            return successResponse($result, $massage);
        }else{
            DB::rollback();
            $massage = "Error:Data is missing";
            $error =[];
            return errorResponse($error, $massage);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $group = Group::where('id', $id)
            ->select('id','name')
            ->first();
        if($group) {
            $massage = 'Group Data';
            return successResponse($group, $massage);
        }else{
            $massage = "Error:Data is missing";
            $error =[];
            return errorResponse($error, $massage);
        }


    }
    public function showGroupCriteria($id)
    {
        $group = Group::with('groupCriteria')->where('id', $id)
            ->select('id','name')
            ->first();
        if($group) {
            $massage = 'Group Data';
            return successResponse($group, $massage);
        }else{
            $massage = "Error:Data is missing";
            $error =[];
            return errorResponse($error, $massage);
        }


    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateGroupRequest $request)
    {
        $updateGroup = Group::find($request->id);
        $updateGroup->name = $request->name;
        $result = $updateGroup->save();
        if($result) {
            $massage = 'update group';
            return successResponse($result, $massage);
        }else{
            $massage = "Error:Data is missing";
            $error =[];
            return errorResponse($error, $massage);
        }



    }

    public function UpdateGroupCriteria(UpdateGroupCriteriaRequest $request)
    {
        $updateGroupCriteria = GroupCriteria::find($request->id);
        $updateGroupCriteria['group_id'] = $request->group_id;
        $updateGroupCriteria['type'] = $request->group_type;
        $updateGroupCriteria['k'] = $request->group_key;
        $updateGroupCriteria['operator'] = $request->group_operator;
//        $updateGroupCriteria['v'] = $request->group_value;
        $updateGroupCriteria['v'] = is_array($request->group_value)?implode(",",$request->group_value):$request->group_value;
        $result = $updateGroupCriteria->save();
        if($result) {
            $massage = 'update groupCriteria';
            return successResponse($result, $massage);
        }else{
            $massage = "Error:Data is missing";
            $error =[];
            return errorResponse($error, $massage);
        }


    }

    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $groupDelete = Group::find( $id );
       $result = $groupDelete->delete();

       if($result) {
           $massage = 'Deleted Group';
           return successResponse($result, $massage);
       }else{
           $massage = "Error";
           $error =$result;
           return errorResponse($error, $massage);
       }
    }
    public function destroyGroupCriteria($id)
    {
        $groupDelete = GroupCriteria::find( $id );
       $result = $groupDelete->delete();

       if($result) {
           $massage = 'Deleted Group';
           return successResponse($result, $massage);
       }else{
           $massage = "Error";
           $error =$result;
           return errorResponse($error, $massage);
       }
    }
}
