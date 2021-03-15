<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Campaign extends Model
{
    use HasFactory,SoftDeletes;

    protected $fillable = [
        'name',
        'group_id',
        'template_id',
        'status',
        'total_count',
        'success_count',
        'failure_count',
    ];

    public $timestamps = true;
    protected $softDelete = true;

    public function template(){
        return $this->hasOne(Template::class, 'id', 'template_id')
            ->select('id','subject', 'medium','email_content');
    }

}
