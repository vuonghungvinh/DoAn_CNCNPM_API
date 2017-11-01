<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\LichThi;
use App\LopHocPhan;
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

        $lichthi = new LichThi;
        $lichthi->mamon = $request->mamon;
        $lichthi->thoigianbatdauthi = $request->ngaydangki;
        $lichthi->phong = $request->phongthi;
        $lichthi->thoigianthi = $request->thoigianthi;
        $lichthi->tongcauhoi = $request->tongcauhoi;
        $lichthi->save();
        DB::table('lophocphan')
        ->where('mamon', $request->mamon)
        ->update(['dkthi'=> 1]);
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
    }
}
