<?php

namespace App\Jobs;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

use Mail;

class ProcessEmailSending implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * Create a new job instance.
     *
     * @return void
     */

    protected $email_content;
    protected $contactData;

    public function __construct($email_content,$contactData)
    {
        $this->email_content=$email_content;
        $this->contactData=$contactData;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        foreach ($this->contactData as $row) {
            $full_name = $row->first_name.' '.$row->last_name;
            $email_content =  $this->email_content;
            $email_content = str_replace('{$name}',$full_name,$email_content);
            $email_content = str_replace('{$title}',"News alter",$email_content);
            $email_content = str_replace('{$promo_code}',"5260",$email_content);
            $support_email = "postmaster@b4uglobal.com";
            $site_title = "B4UGlobal";
//            $to_email = "mianahmadmasood@gmail.com";
            $to_email = $row->email;
            $email_content=$email_content;
            $result = Mail::send([], [], function ($message) use ($support_email, $site_title, $to_email,$email_content) {
                $message->from($support_email, $site_title);
                $message->subject($site_title);
                $message->to($to_email);
                $message->setBody($email_content, 'text/html');
            });

        }
        return "email sent";
    }
}
