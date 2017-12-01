<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\LichThi;
use App\LopHocPhan;
use App\Mon;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use Validator;
class LichThiController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $lichthi = LichThi::with(['getMon'])->get();
        return response()->json(['listlichthi' => $lichthi]);
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

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
        DB::table('lophocphan')->where('malophp', '=', $request->malophp)
        ->where('dkthi','=',0)->update(['dkthi'=>1]);
        $lichthi = new LichThi;
        $lichthi->mamon = $request->mamon;
        $lichthi->thoigianbatdauthi = $request->ngaydangki;
        $lichthi->phong = $request->phongthi;
        $lichthi->malophp = $request->malophp;
        $lichthi->thoigianthi = $request->thoigianthi;
        $lichthi->tongcauhoi = $request->tongcauhoi;
        $lichthi->save();
        // DB::table('lophocphan')
        // ->where('mamon', $request->mamon)
        // ->update(['dkthi'=> 1]);
        return Response(['status' => 200]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //

    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
        $mamon = LichThi::find($id);
        $check = DB::table('lophocphan')->where('malophp',$mamon->malophp)->where('dkthi',2)->count();
        if ($check > 0){
          return response()->json(['Lớp đã DK thi'], 422);
        }
        else {
          DB::table('lophocphan')
          ->where('malophp', $mamon->malophp)
          ->update(['dkthi' => 0]);
          $lichthi = LichThi::where('id','=',$id);
          $lichthi->delete();
          return Response(['status' => 200]);
    }
}
