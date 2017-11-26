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
      // $lophp = Mon::with(['lichThi', 'lopHp'])->whereHas('lopHp', function($query) use ($user){
      //   $query->where('mssv', $user->mssv)->where('dkthi', 1);
      // })->has("lichThi")->get();
      $lophp = LopHocPhan::with(['lichthi', 'mon'])->where('mssv', $user->mssv)->where('dkthi', 1)->get();
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
      LopHocPhan::where('mamon', $lichthi->mamon)->where('mssv', $user->mssv)->update(['dkthi'=>2]);
      $result = (object) array('start_time' => date('Y-m-d H:i:s'), 'madethi' => $madethi, 'questions' => $questions,'thoigianthi' => $lichthi->thoigianthi);
      return response()->json($result);
    }

    private function processString($str=''){
      $str = trim($str);
      if(substr($str, strlen($str)-2, 1) == ',') {
        return substr($str, 0, strlen($str)-2);
      }
      return $str;
    }

    public function nopBaiThi(Request $request) {
      // return $request;
      // return response()->json(count(json_decode($request->questions)));
      // return response()->json(json_decode($request['data']));
      // $request = json_decode($request['data']);
      // $request = json_decode($request);
      // $request = json_decode($request);
      //return $request->questions;
      // return response()->json($request);
      if (count($request->questions)<1) {
        return '';
      }
      $user = Auth::user();
      $end_time = date('Y-m-d H:i:s');
      $dapan_str = '';//'id_cauhoi: id_dapan[, id_dapan];'
      $diem = 0;
      $questions = ($request->questions);
      $diem_moi_cau = 10.0/count($questions);
      for($i=0;$i<count($questions); $i++) {
        $question = $questions[$i];
        $dapan=''.$question['id'].':'.$this->processString($question['answer']);
        if(strlen($dapan_str) < 1){
          $dapan_str = $dapan;
        } else {
          $dapan_str = $dapan_str.';'.$dapan;
        }

      
        $dapandung_arr = explode(',', $this->processString($question['dapan']));
        $answer_arr = explode(',', $this->processString($question['answer']));
        if (count($answer_arr) > count($dapandung_arr)){
          continue;
        } else {
          foreach($answer_arr as $answer){
            if (in_array($answer, $dapandung_arr)){
              $tongdapan = count($dapandung_arr);
              if ($tongdapan < 1) {
                $tongdapan = 1;
              }
              $diem=$diem+(float)$diem_moi_cau/$tongdapan;
            }
          }
        }
      }
      // return response()->json((($dapan_str)));
      // $ketquathi = new KetQuaThi;
      // $ketquathi->mssv = "'".$user->mssv."'";
      // $ketquathi->diem = "'".number_format((float)$diem, 2, '.', '')."'";
      // $ketquathi->madethi = "'".$request->madethi."'";
      // $ketquathi->thoigianlam = "'".$request->thoigianlam."'";
      // $ketquathi->thoigianbatdau = "'".$end_time."'";
      // $ketquathi->dapan = "'".str_replace(',', ' ', $dapan_str)."'";

      $ketquathi = new KetQuaThi;
      $ketquathi->mssv = $user->mssv;
      $ketquathi->diem = number_format((float)$diem, 2, '.', '');
      $ketquathi->madethi = $request->madethi;
      $ketquathi->thoigianlam = $request->thoigianlam;
      $ketquathi->thoigianbatdau = $end_time;
      $ketquathi->dapan = str_replace(',', ' ', $dapan_str);
      $ketquathi->save();
      return response()->json($diem);
      // return response()->json(explode(',', $tmp));
    }
}
