<?php

namespace App\Http\Controllers;

use App\Http\Requests\Campaigns\SaveCampaignRequest;
use App\Http\Requests\Campaigns\UpdateCampaignRequest;
use App\Models\Campaign;
use App\Models\Contact;
use App\Models\Group;
use Illuminate\Http\Request;

class CampaignController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {

//            $URL="http://gateway.its.com.pk/api?action=sendmessage&username=B4U&password=P@kistan123&recipient=923014550134&originator=923014550134&messagedata=Hello World.";
//            $client = new \GuzzleHttp\Client();
//            $request = $client->get($URL);
//            $status = $request->getStatusCode();
//
//            if ($status == 200) {
//                $resBodyContents = $request->getBody()->getContents();
//                $resBodyContents = json_decode($resBodyContents, true);
//                return $resBodyContents;
//            } else {
//                return errorResponse('Server responded with a status code of ' . $status);
//            }

        $campaign = Campaign::paginate(10);
        if($campaign) {
            $massage = 'All Group Data';
            return successResponse($campaign, $massage);
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
    public function store(SaveCampaignRequest $request)
    {
        $saveCampaign['name'] = $request->name;
        $saveCampaign['group_id'] = $request->group_id;
        $saveCampaign['template_id'] = $request->template_id;
        $saveCampaign['status'] = $request->status;
        $saveCampaign['total_count'] = $request->total_count;
        $saveCampaign['success_count'] = $request->success_count;
        $saveCampaign['failure_count'] = $request->failure_count;
        $campaign = Campaign::insertGetId($saveCampaign);
        if($campaign) {
            $massage = 'save Campaign';
            return successResponse($campaign, $massage);
        }else{
            $massage = "Error:Data is missing";
            return errorResponse($massage);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Campaign  $campaign
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $campaign = Campaign::with('template')->where('id', $id)->first();
        if($campaign) {
            $massage = 'Campaign Data';
            return successResponse($campaign, $massage);
        }else{
            $massage = "Error:Data is missing";
            $error =[];
            return errorResponse($error, $massage);
        }
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Campaign  $campaign
     * @return \Illuminate\Http\Response
     */
    public function edit(Campaign $campaign)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Campaign  $campaign
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateCampaignRequest $request, Campaign $campaign)
    {
        $updateCampaign = Campaign::find($request->id);
        $updateCampaign->name = $request->name;
        $updateCampaign->group_id = $request->group_id;
        $updateCampaign->template_id = $request->template_id;
        $updateCampaign->status = $request->status;
        $updateCampaign->total_count = $request->total_count;
        $updateCampaign->success_count = $request->success_count;
        $updateCampaign->failure_count = $request->failure_count;
        $result = $updateCampaign->save();
        if($result) {
            $massage = 'update Campaign';
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
     * @param  \App\Models\Campaign  $campaign
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $campaignDelete = Campaign::find( $id );
        $result = $campaignDelete->delete();

        if($result) {
            $massage = 'Deleted Campaign';
            return successResponse($result, $massage);
        }else{
            $massage = "Error";
            $error =$result;
            return errorResponse($error, $massage);
        }
    }
}
