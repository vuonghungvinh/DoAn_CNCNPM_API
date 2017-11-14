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
    public function SinhVienDangHoc()
    {
      return $this->hasmany('App\Students','malop')->where('trangthai', '=', 1);
    }
    public function SinhVienTotNghiep()
    {
      return $this->hasmany('App\Students','malop')->where('trangthai', '=', 0);
    }
    public function SinhVienNghiHoc()
    {
      return $this->hasmany('App\Students','malop')->where('trangthai', '=', 2);
    }
}
