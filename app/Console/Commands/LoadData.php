<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

class LoadData extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'data:load';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

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

        $user = \DB::connection('mongodb')->collection('users')->orderBy('_id','desc')->chunk(1000,function($users){
            foreach($users as $user){
                if(count($user['roles']) == 1){
                    \DB::table('contacts')->insert([
                        '_id'=>$user['_id'],
                        'first_name'=> $user['profile']['name']['first'],
                        'last_name'=> $user['profile']['name']['last'],
                        'phone_number'=> $user['phoneNumber'],
                        'role'=>$user['roles'][0]['name']

                    ]);

                }else{
                    foreach($user['roles'] as $role){
                        \DB::table('contacts')->insert([
                            '_id'=>$user['_id'],
                            'first_name'=> $user['profile']['name']['first'],
                            'last_name'=> $user['profile']['name']['last'],
                            'phone_number'=> $user['phoneNumber'],
                            'role'=>$role['name']

                        ]);
                    }

                }


            }


        });


        //   $user['profile']['name']['first'];

        return 0;
    }
}
