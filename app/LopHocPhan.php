<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class LopHocPhan extends Model
{
	protected $table = 'lophocphan';
	public function mon(){
		return $this->belongsTo('App\Mon', 'mamon','id');
	}
	public function student(){
		return $this->belongsTo('App\Students' , 'mssv','mssv');
  }
}
