<?php

namespace App\Http\Controllers\Admin;

use App\LopHocPhan;
use App\Students;
use App\User;
use App\Mon;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use DB;

class LophocphanController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $lophocphan = DB::table('lophocphan')->join('mon','lophocphan.mamon', '=', 'mon.id')
        ->select("lophocphan.malophp","mon.tenmon","lophocphan.mamon")->distinct()->orderByRaw('lophocphan.malophp')->get();
        return response()->json(['lophocphan' => $lophocphan]);
    }
    public function lophptheomon($id)
    {
      $lophocphan = DB::table('lophocphan')->join('mon','lophocphan.mamon', '=', 'mon.id')
      ->select("lophocphan.malophp","mon.tenmon","lophocphan.mamon")->where("lophocphan.mamon", $id)->distinct()->orderByRaw('lophocphan.malophp')->get();
      return response()->json(['lophocphan' => $lophocphan]);
    }
    public function getlophpchuadkthi($id) {
      $lophocphan = DB::table('lophocphan')->join('mon','lophocphan.mamon', '=', 'mon.id')
      ->select("lophocphan.malophp","mon.tenmon","lophocphan.mamon")->where('lophocphan.dkthi', '=', 0)
      ->where("lophocphan.mamon", $id)
      ->distinct()->orderByRaw('lophocphan.malophp')->get();
      return response()->json(['lophocphan' => $lophocphan]);
    }
    public function getalllophpchuadkthi() {
      $lophocphan = DB::table('lophocphan')->join('mon','lophocphan.mamon', '=', 'mon.id')
      ->select("lophocphan.malophp","mon.tenmon","lophocphan.mamon")->where('lophocphan.dkthi', '=', 0)
      ->whereNotIn("lophocphan.mssv",["null"])
      ->distinct()->orderByRaw('lophocphan.malophp')->get();
      return response()->json(['lophocphan' => $lophocphan]);
    }
    public function getlophpcungmon($id)
    {
      $lophocphan = DB::table('lophocphan')->where('mamon',$id)->select('malophp')->distinct()->get();
      return response()->json(['mon_lophocphan' => $lophocphan]);
    }
    public function sinhvienkhongthuoclophp(Request $id)
    {
        // $sinhvien = User::with(["mon"])->whereHas('mon', function($query) use($request){
        //   $query->where("mamon", "<>", $request->id);
        // })->get();
        $sinhvien2 = DB::table('lophocphan')
        ->where('malophp', $id->malophp)->orWhere('mamon', $id->mamon)->get(['mssv'])->pluck('mssv');
        $sinhvien = DB::table('users')
        ->where('trangthai','1')
        ->whereNotIn('mssv', $sinhvien2)
        ->join('lop','lop.id','=','users.malop')
        ->orderByRaw('users.mssv')
        ->get(['users.mssv','users.name', 'lop.tenlop']);
        return response()->json(['sinhvien' => $sinhvien]);
    }
    public function danhsachsinhvien(Request $request)
    {
        $lophocphan = LopHocPhan::with(['mon', 'student'])
        ->where('malophp',$request->id)->get();
        return response()->json(['lophocphan' => $lophocphan]);
    }
    public function tongcauhoi($id)
    {
        $mamon = DB::table('lophocphan')
        ->select('mamon')
        ->where('malophp', '=', $id)->offset(0)->limit(1)->get()->pluck('mamon')[0];
        $tongcauhoi = DB::table('cauhoi')
        ->where('mamon',$mamon)->where('trangthai',1)->count();
        return response()->json(['tongcauhoi' => $tongcauhoi]);
    }

    public function tongsinhvientheolop($id)
    {
      $tongsinhvien = DB::table('lophocphan')->where('malophp',$id)->count();
      return response()->json(['tongsinhvien' => $tongsinhvien]);
    }
    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }
    public function getMon()
    {
        //
        // $listquestion = Question::all();
        // return response()->json(['listquestion'=>$listquestion]);
        // $listquestion = DB::table('cauhoi')
        // ->join('mon','cauhoi.mamon', '=', 'mon.id')
        // ->join('dapan', 'cauhoi.id', '=', 'dapan.macauhoi')
        // ->select('cauhoi.noidungcauhoi','cauhoi.dapan','cauhoi.mucdo','mon.id','mon.tenmon','dapan.tendapan','dapan.noidungdapan','dapan.id','dapan.macauhoi')
        // ->get();
        // $mon = LopHocPhan::with(['mon'])->where('dkthi',0)->distinct()->get();
        $mon = DB::table('mon')->get();
        // ->join('lophocphan','mon.id', '=', 'lophocphan.mamon')
        // ->select('mon.id', 'mon.tenmon')
        // ->distinct()
        // ->where('lophocphan.dkthi', '0')
        // ->get();
        return response()->json(['mon' => $mon]);
    }
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
      $mamon = $request->mamon;
      $malophp = $request->malophp;
      $lophp = DB::table('lophocphan')->select('mssv')->where('malophp', 'like', $malophp)->get();
      if ($lophp->pluck('mssv')[0]=="null"){
        $da = LopHocPhan::where("malophp","=",$malophp);
        $da->delete();
      }
      $index = 0;
      foreach((array)$request->listsinhvien as $mssv){
        $lophocphan = new LopHocPhan;
        $lophocphan->mamon = $mamon;
        $lophocphan->mssv = $mssv;
        $lophocphan->malophp = $malophp;
        $lophocphan->save();
        $index++;
      }
        //update bang cau hoi field dapan=$dapan_dung
      return Response(['status' => 200]);
    }


    public function themlophocphan(Request $request)
    {
      $lophp = new LopHocPhan;
      $lophp->mamon = $request->idmon;
      $lophp->malophp = $request->lophp;
      $lophp->save();
      return Response(['status' => 200]);
    }
    /**
     * Display the specified resource.
     *
     * @param  \App\LopHocPhan  $lopHocPhan
     * @return \Illuminate\Http\Response
     */
    public function show(LopHocPhan $lopHocPhan)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\LopHocPhan  $lopHocPhan
     * @return \Illuminate\Http\Response
     */
    public function edit(LopHocPhan $lopHocPhan)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\LopHocPhan  $lopHocPhan
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, LopHocPhan $lopHocPhan)
    {
        //
    }

    public function checkdk($id)
    {
      $check = DB::table('lophocphan')->where('malophp',$id)->where('dkthi',1)->count();
      if ($check > 0){
        return response()->json(['Lớp đã DK thi, không thể chuyển lớp cho sinh viên này'], 422);
      }
      return  Response(['status' => 200]);
    }
    public function chuyenlophp(Request $request)
    {
      $lophp = DB::table('lophocphan')->select('mssv')->where('malophp', 'like', $request->lophp)->get();
      if ($lophp->pluck('mssv')[0]=="null"){
        DB::table('lophocphan')
        ->where('malophp',$request->lophp)
        ->update(['mssv' => $request->mssv]);
        $da = LopHocPhan::where("malophp","=",$request->lopcu)->where('mssv', $request->mssv);
        $da->delete();
        return Response(['status' => 200]);
      }
      DB::table('lophocphan')->where('malophp', $request->lopcu)->where('mssv',$request->mssv)->update(['malophp' => $request->lophp]);
      return Response(['status' => 200]);
    }
    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\LopHocPhan  $lopHocPhan
     * @return \Illuminate\Http\Response
     */
    public function deletelopHP($id)
    {
      $delelte = LopHocPhan::where("malophp", "=", $id)->where("dkthi", "=",0);
      $delelte->delete();
      return Response(['status' => 200]);
    }

    public function deletesinhviencualophp($id, $mssv)
    {
      $da = LopHocPhan::where("malophp","=", $id)->where("mssv", "=", $mssv);
      $lophp = LopHocPhan::where("malophp", "=", $id)->get();
      if (count($lophp)==1){
        $mamon = $lophp->pluck('mamon')[0];
        $lophocphan = new LopHocPhan;
        $lophocphan->mamon = $mamon;
        $lophocphan->malophp = $id;
        $lophocphan->save();
      }
      $da->delete();
      return Response(['status' => 200]);
    }
    public function destroy(LopHocPhan $lopHocPhan, Request $request)
    {
        //
    }
}
