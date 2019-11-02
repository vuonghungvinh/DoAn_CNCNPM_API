<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class LopHocPhan extends Model
{
  // truong dkthi: 0 chua dk thi, 1 da dkthi, 2 da nop bai;
	protected $table = 'lophocphan';
	public function mon(){
		return $this->belongsTo('App\Mon', 'mamon','id');
	}
	public function lichthi(){
		return $this->belongsTo('App\LichThi', 'malophp','malophp');
	}
	public function student(){
		return $this->belongsTo('App\Students' , 'mssv','mssv');
  }
}
