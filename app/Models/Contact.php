<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Contact extends Model
{
    protected $fillable = [
        'first_name',
        'last_name',
        'phone_number',
        'email',
        'gender',
        'is_test_account',
        'is_training_done',
        'is_office_visit',
        'is_block',
        'is_profile_lock',
        'is_email_verified',
        'is_driver_verified',
        'is_suspended_for_cancel',
        'is_suspended_for_negative_balance',
        'is_suspended_for_city',
        'role',
        'city',
        'id_card_status',
        'driving_license_status',
        'vehicle_picture_status',
        'inspection_report_status',
        'vehicle_registeration_status',
        'police_clearance_status',


    ];

}
