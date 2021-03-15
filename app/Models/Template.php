<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Template extends Model
{
    use HasFactory,SoftDeletes;

    protected $fillable = [
        'subject',
        'promo_code',
        'image_path',
        'medium',
        'txt',
        'email_content',
        'category',
        'thumbnail_path',
    ];

    public $timestamps = true;
    protected $softDelete = true;


    public function setImage_PathAttribute()
    {
        $this->attributes['image_path'] = "http://localhost:8083/images". $this->image_path;
    }

}
