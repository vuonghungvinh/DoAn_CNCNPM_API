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
        ->select("lophocphan.malophp","mon.tenmon")->distinct()->orderByRaw('lophocphan.malophp')->get();
        return response()->json(['lophocphan' => $lophocphan]);
    }
    public function sinhvienkhongthuocmon(Request $request)
    {
        // $sinhvien = User::with(["mon"])->whereHas('mon', function($query) use($request){
        //   $query->where("mamon", "<>", $request->id);
        // })->get();
        $sinhvien2 = DB::table('lophocphan')
        ->where('mamon', $request->id)->get(['mssv'])->pluck('mssv');
        $sinhvien = DB::table('users')
        ->whereNotIn('mssv', $sinhvien2)
        ->orderBy('lop')
        ->get(['mssv','name', 'lop']);
        return response()->json(['sinhvien' => $sinhvien]);
    }
    public function danhsachsinhvien(Request $request)
    {
        $lophocphan = LopHocPhan::with(['mon', 'student'])
        ->where('malophp',$request->id)->get();
        return response()->json(['lophocphan' => $lophocphan]);
    }
    public function tongcauhoi(Request $request)
    {

        $tongcauhoi = DB::table('cauhoi')
        ->where('mamon',$request->id)->count();
        return response()->json(['tongcauhoi' => $tongcauhoi]);
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
      $index = 0;
      foreach((array)$request->listsinhvien as $mssv){
        $lophocphan = new LopHocPhan;
        $lophocphan->mamon = $mamon;
        $lophocphan->mssv = $mssv;
        $lophocphan->save();
        $index++;
      }
        //update bang cau hoi field dapan=$dapan_dung
      return Response(['status' => 200]);
    }


    public function themlophocphan(Request $request)
    {
      $monhoc = new Mon;
      $monhoc->tenmon = $request->name;
      $monhoc->save();
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

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\LopHocPhan  $lopHocPhan
     * @return \Illuminate\Http\Response
     */
    public function delete($id, $mssv)
    {
      $da = LopHocPhan::where("mamon","=", $id)->where("mssv", "=", $mssv);
      $da->delete();
      return Response(['status' => 200]);
    }
    public function destroy(LopHocPhan $lopHocPhan, Request $request)
    {
        //
    }
}
