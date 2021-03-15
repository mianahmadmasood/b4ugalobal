<?php

namespace App\Console\Commands;

use App\Jobs\ProcessEmailSending;
use App\Models\Contact;
use Illuminate\Console\Command;
use App\Models\Campaign;
use App\Models\Group;
use App\Models\Template;
use Mail;

class NotifiSchedule extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'notifi:send';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command notification';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
//       $campaigns =  Campaign::where('status',$this->argument('grouptype'))->get();
        $campaigns =  Campaign::with("template")->where('status',"created")->get();
        foreach ($campaigns as $campaign ) {
            $campaign_template = Template::where('id', $campaign->template_id)->where("medium","email")->first();
            $groupCriteria = Group::with('groupCriteria')->where('id', $campaign->group_id)->first();
            if(!empty($groupCriteria['groupCriteria'])) {
                foreach ($groupCriteria['groupCriteria'] as $row) {
                    if ($row['type'] == "BOOLEAN") {
                        if ($row['value'] == "true") {
                            $contactData = Contact::where($row['key'], $row['operator'], '1')->get();
                        } else {
                            $contactData = Contact::where($row['key'], $row['operator'], '0')->get();
                        }
                    } else {

                        if($row['operator'] != "not in"){
                            $group_value=explode(',',$row['value']);
                            $contactData = Contact::whereIn($row['key'], $group_value)->get();
                        }else{
                            $contactData = Contact::where($row['key'],$row['value'])->get();

                        }
                    }
                    $email_content =  $campaign_template->email_content;
                    ProcessEmailSending::dispatch($email_content, $contactData);
                }
            }else{
                return "group Criteria is empty";
            }
        }

        return "Notifi to All customer";



//            $template =  Template::where('id',$campaign->template_id)->first();
//
//            if($template->medium == "EMAIL"){
//                // email template
//            }elseif($template->medium == "SMS"){
//                // sms template
//            }elseif($template->medium == "PUSH_NOTIFICATION"){
//                // push notification template
//            }



        \Log::info('This is some useful information.   $contactData '.  $contactData);
        return 0;
    }
}
