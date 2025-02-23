<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class File extends Model
{
    protected $fillable = ["name", "user_id", "size", "file_type", "random_name"];

    public function user() {
        return $this->belongsTo(User::class);
    }
}
