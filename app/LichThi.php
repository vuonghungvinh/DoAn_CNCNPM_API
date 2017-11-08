<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class LichThi extends Model
{
    protected $table = 'lichthi';
    public function getMon(){
      return $this->belongsTo('App\Mon', 'mamon');
    }
}
