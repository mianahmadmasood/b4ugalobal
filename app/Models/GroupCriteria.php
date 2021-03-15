<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class GroupCriteria extends Model
{
    use SoftDeletes;
    protected $table = "group_criteria";
    protected $fillable = [
        'group_id',
        'type',
        'k',
        'operator',
        'v',
    ];

    public $timestamps = true;
    protected $softDelete = true;
}
