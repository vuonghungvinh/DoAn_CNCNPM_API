<?php

namespace App\Http\Controllers\Admin;
use \stdClass;
use Maatwebsite\Excel\Facades\Excel;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Students;
use App\LopHocPhan;
use App\Lop;
use DB;

class StudentsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $students = Students::with(['lop'])->where('trangthai', '=', 1)
        ->select('mssv','name','ngaysinh','gioitinh','malop','trangthai')
        ->orderByRaw('mssv')->get();
        return response()->json(['students' => $students]);
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

    public function getsinhvientotnghiep(){
      $students = Students::with(['lop'])->where('trangthai', '=', 0)
      ->select('name', 'mssv', 'ngaysinh', 'gioitinh','diachi','malop', 'trangthai', 'updated_at')
      ->orderByRaw('updated_at')->get();
      return response()->json(['students' => $students]);
    }
    public function getsinhviennghihoc(){
      $students = Students::with(['lop'])->where('trangthai', '=', 2)
      ->select('name', 'mssv', 'ngaysinh', 'gioitinh','diachi','malop', 'trangthai', 'updated_at')
      ->orderByRaw('updated_at')->get();
      return response()->json(['students' => $students]);
    }
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

        $students=new Students;
        $students->name = $request->name;
        $students->gioitinh = $request->gioitinh;
        $students->malop = $request->malop;
        $students->mssv = $request->mssv;
        $students->ngaysinh = $request->ngaysinh;
        $students->trangthai =true;
        $students->updated_at = null;
        $students->diachi= $request->diachi;
        $students->password=bcrypt('123456');
        $students->save();
        return response()->json(['status' => 200]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function thongtinsinhvien($id)
    {
      $students = Students::all()->where('mssv','=', $id);
      return response()->json(['students' => $students]);
    }


    public function lopsinhviendanghoc($id)
    {
        //
        $students = Students::with(['lop'])->where('malop', '=', $id)->where('trangthai', '=', '1')->orderByRaw('mssv')->get();
        return response()->json(['students' => $students]);
    }
    public function lopsinhviennghihoc($id)
    {
        //
        $students = Students::with(['lop'])->where('malop', '=', $id)->where('trangthai', '=', '2')->orderByRaw('mssv')->get();
        return response()->json(['students' => $students]);
    }
    public function lopsinhvientotnghiep($id)
    {
        //
        $students = Students::with(['lop'])->where('malop', '=', $id)->where('trangthai', '=', '0')->orderByRaw('mssv')->get();
        return response()->json(['students' => $students]);
    }
    public function uploadfile(Request $request)
    {
      if($request->hasFile('uploadFile')){
                $path = $request->file('uploadFile')->getRealPath();
                $data = Excel::load($path, function($reader) {})->get();
                if(!empty($data) && $data->count()){
                    foreach ($data->toArray() as $key => $value) {
                        if(!empty($value)){
                            foreach ($value as $v) {

                              // $sinhvien = new Students;
                              // $students->name = $v['name'];
                              // $students->gioitinh =  $v['gioitinh'];
                              // $students->lop =  $v['lop'];
                              // $students->mssv =  $v['mssv'];
                              // $students->ngaysinh =  '10-02-1995';
                              // $students->trangthai =true;
                              // $students->diachi=  $v['diachi'];
                              // $students->password=bcrypt('123456');
                              // $students->save();
                              $insert = array();
                              $malop = DB::table('lop')->select('id')->where('tenlop', 'like', $v['lop'])->get();
                              $insert[] = ['name' => $v['ten'], 'mssv' => $v['mssv'], 'ngaysinh' => $v['ngaysinh'],
                              'gioitinh' =>  $v['gioitinh'],'diachi'=>  $v['diachi'],'malop' =>  $malop->pluck('id')[0],'trangthai' => 1,'password' => bcrypt('123456') ];
                               Students::insert($insert);
                            }
                        }
                    }

                }
            }
            return response()->json(['status' => 200]);
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
    public function tongsoluongsinhvien()
    {
      $tongsinhvien =DB::table('users')->where('trangthai',1)
      ->count();
      return response()->json(['tongsinhvien' => $tongsinhvien]);
    }


    public function tongsinhvienlop($id)
    {
      $tongsinhvien =DB::table('users')->where('trangthai',1)
      ->where('malop', $id)->count();
      return response()->json(['tongsinhvien' => $tongsinhvien]);
    }

    public function update(Request $request, $id)
    {
        //
        if ($request->trangthai == 1) {
          DB::table('users')->where('mssv', '=', $id)
          ->update(['name' => $request->name, 'ngaysinh' => $request->ngaysinh,
           'diachi'=> $request->diachi, 'trangthai' => $request->trangthai]);
        }
        else {
          DB::table('users')->where('mssv', '=', $id)
          ->update(['name' => $request->name, 'ngaysinh' => $request->ngaysinh,
           'diachi'=> $request->diachi, 'trangthai' => $request->trangthai,'updated_at' => date('Y-m-d H:i:s')]);
        }

         return Response(['status' => 200]);
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
        $lophocphan = LopHocPhan::where("mssv", $id);
        $lophocphan->delete();
        $students = Students::where("mssv", $id);
        $students->delete();
        return Response(['status' => 200]);
    }
}
