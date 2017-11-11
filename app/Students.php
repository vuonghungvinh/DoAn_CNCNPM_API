<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Students extends Model
{
    protected $table = 'users';

    public function lop()
    {
      return $this->belongsTo('App\Lop','malop','id');
    }
}
