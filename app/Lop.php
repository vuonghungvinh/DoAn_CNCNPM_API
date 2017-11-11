<?php

namespace App;
use App\Students;
use Illuminate\Database\Eloquent\Model;

class Lop extends Model
{
    protected $table = 'lop';
    public function SinhVienLop()
    {
      return $this->hasmany('App\Students','malop');
    }
}
