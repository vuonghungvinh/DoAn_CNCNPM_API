<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class KetQuaThi extends Model
{
    public $timestamps = false;
    protected $table = 'ketquathi';

    public function dethi_lichthi()
    {
      return $this->hasOne('App\DeThiLichThi', 'madethi', 'madethi');
    }
    public function dethi()
    {
        return $this->hasOne('App\DeThi', 'madethi', 'madethi');
    }

    public function sinhvien()
    {
        return $this->hasOne('App\User', 'mssv', 'mssv');
    }
}
