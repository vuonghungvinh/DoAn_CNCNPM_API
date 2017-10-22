<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Question extends Model
{
    protected $table = 'cauhoi';
    public function listdapan(){
      return $this->hasmany('App\DapAn','macauhoi');
    }
    public function mon(){
      return $this->belongsTo('App\Mon', 'mamon');
    }
}
