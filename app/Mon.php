<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Mon extends Model
{
    protected $table = 'mon';

    public function lichThi()
    {
      return $this->hasOne('App\LichThi', 'mamon', 'id');
    }

    public function lopHp()
    {
      return $this->hasMany("App\LopHocPhan", "mamon", "id");
    }
}
