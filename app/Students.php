<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Students extends Model
{
    //truong trang thai: 0 tot nghiep, 1 dang hoc, 2 bo hoc
    protected $table = 'users';

    public function lop()
    {
      return $this->belongsTo('App\Lop','malop','id');
    }
}
