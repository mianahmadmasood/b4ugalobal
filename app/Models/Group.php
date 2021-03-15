<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Group extends Model
{
    use SoftDeletes;

    protected $fillable = [
        'name',
    ];

    public $timestamps = true;
    protected $softDelete = true;

    public function groupCriteria(){
        return $this->hasMany(GroupCriteria::class, 'group_id', 'id')
            ->select('id','group_id', 'type', 'k as key', 'operator', 'v as value');
    }
}
