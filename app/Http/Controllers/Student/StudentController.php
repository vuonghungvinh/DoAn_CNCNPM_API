<?php

namespace App\Http\Controllers\Student;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\User;
use Illuminate\Support\Facades\Auth;
use Validator;
use App\LopHocPhan;
use App\Mon;
use App\LichThi;
use App\DeThi;
use App\DeThiLichThi;
use App\Question;
use App\DeThiCauHoi;
use App\KetQuaThi;

class StudentController extends Controller
{
    public $successStatus = 200;

    public function getDanhSachMonThi()
    {
      $user = Auth::user();
      $lophp = Mon::with(['lichThi', 'lopHp'])->whereHas('lopHp', function($query) use ($user){
        $query->where('mssv', $user->mssv)->where('dkthi', 0);
      })->has("lichThi")->get();
      return response()->json($lophp);
    }

    private function generateRandomString($length = 10) {
      $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
      $charactersLength = strlen($characters);
      $randomString = '';
      for ($i = 0; $i < $length; $i++) {
          $randomString .= $characters[rand(0, $charactersLength - 1)];
      }
      return $randomString;
    }

    public function getDeThi(Request $request) {
      $user = Auth::user();
      $lichthi = LichThi::find($request->lichthi_id);
      $madethi = '';
      do {
        $madethi = $this->generateRandomString(5);
      } while(count(DeThi::where('madethi', $madethi)->get())>0);
      $dethi = new DeThi();
      $dethi->madethi = $madethi;
      $dethi->mamon = $lichthi->mamon;
      $dethi->tongcauhoi = $lichthi->tongcauhoi;
      $dethi->save();
      $dethilichthi = new DeThiLichThi();
      $dethilichthi->madethi = $madethi;
      $dethilichthi->malichthi = $request->lichthi_id;
      $dethilichthi->save();
      $questions = Question::with(['listdapan'])->where('mamon', $lichthi->mamon)->get()->random($lichthi->tongcauhoi);
      foreach($questions as $question) {
        $dethicauhoi = new DeThiCauHoi();
        $dethicauhoi->madethi = $madethi;
        $dethicauhoi->macauhoi = $question->id;
        $dethicauhoi->save();
      }
      LopHocPhan::where('mamon', $lichthi->mamon)->where('mssv', $user->mssv)->update(['dkthi'=>1]);
      $result = (object) array('start_time' => date('Y-m-d H:i:s'), 'madethi' => $madethi, 'questions' => $questions,'thoigianthi' => $lichthi->thoigianthi);
      return response()->json($result);
    }

    private function processString($str=''){
      $str = trim($str);
      if(substr($str, count($str)-2, 1) == ',') {
        return substr($str, 0, count($str)-2);
      }
      return $str;
    }

    public function nopBaiThi(Request $request) {
      if (count($request->questions)<1) {
        return '';
      }
      $user = Auth::user();
      $end_time = date('Y-m-d H:i:s');
      $dapan_str = '';//'id_cauhoi: id_dapan[, id_dapan];'
      $diem = 0;
      $diem_moi_cau = 10.0/count($request->questions);

      foreach($request->questions as $question) {
        $dapan=''.$question->id.':'.$this->processString($question->answer);
        if(count($dapan_str) < 1){
          $dapan_str = $dapan;
        } else {
          $dapan_str = $dapan_str.';'.$dapan;
        }
        $dapan_arr = explode(',', $this->processString($question->dapan));
        $answer_arr = explode(',', $this->processString($question->answer));
        if (count($answer_arr) > count($dapan_arr)){
          continue;
        } else {
          foreach($answer_arr as $answer){
            if (in_array($answer, $dapan_arr)){
              $diem=$diem+$diem_moi_cau/(float)count($dapan_arr);
            }
          }
        }
      }
      $ketquathi = new KetQuaThi();
      $ketquathi->mssv = $user->mssv;
      $ketquathi->diem = $diem;
      $ketquathi->madethi = $request->madethi;
      $ketquathi->thoigianlam = $request->thoigianlam;
      $ketquathi->thoigian = $end_time;
      $ketquathi->dapan = $dapan;
      $ketquathi->save();
      return response()->json($diem);
      // return response()->json(explode(',', $tmp));
    }
}
