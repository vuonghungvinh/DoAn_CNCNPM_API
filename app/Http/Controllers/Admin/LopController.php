<?php

namespace App\Http\Controllers\Admin;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Lop;
use App\Students;
use DB;
class LopController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $lop = Lop::all();
        return response()->json(['lop' => $lop]);
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



    public function getsoluongsinhvien()
    {
      $lop = Lop::withCount(['SinhVienLop as tongsinhvien'])
      ->withCount(['SinhVienDangHoc as danghoc'])
      ->withCount(['SinhVienTotNghiep as totnghiep'])
      ->withCount(['SinhVienNghiHoc as nghihoc'])
      ->orderByRaw('khoa')->get();
      return response()->json(['danhsachlop' => $lop]);
    }

    public function getKhoa()
    {
      $khoa = DB::table('lop')->select('khoa')->distinct()->orderByRaw('khoa')->get();
      return response()->json(['khoa' => $khoa]);
    }
    public function getLopCuaKhoa($id)
    {
      $khoa = Lop::where('khoa', '=', $id)->get();
      return response()->json(['lopcuakhoa' => $khoa]);
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
        $sinhvienlop = Lop::with(['SinhVienLop'])->where('tenlop', '=', $id)->get();
        return response()->json(['sinhvienlop' => $sinhvienlop]);
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
