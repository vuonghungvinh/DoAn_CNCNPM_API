<?php

namespace App\Http\Controllers\Admin;
use \stdClass;
use Maatwebsite\Excel\Facades\Excel;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Students;
use App\LopHocPhan;
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
        $students = DB::table('users')->orderByRaw('lop')->orderByRaw('mssv')->get();
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
        $students->lop = $request->lop;
        $students->mssv = $request->mssv;
        $students->ngaysinh = $request->ngaysinh;
        $students->trangthai =true;
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
    public function show($id)
    {
        //
        $students = DB::table('users')->where('lop', $id)->get();
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

                              $sinhvien = new Students;
                              $students->name = $v['name'];
                              $students->gioitinh =  $v['gioitinh'];
                              $students->lop =  $v['lop'];
                              $students->mssv =  $v['mssv'];
                              $students->ngaysinh =  '10-02-1995';
                              $students->trangthai =true;
                              $students->diachi=  $v['diachi'];
                              $students->password=bcrypt('123456');
                              $students->save();
                              // $insert[] = ['name' => $v['name'], 'ngaysinh' => $v['ngaysonh']];
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
        $lophocphan = LopHocPhan::where("mssv", $id);
        $lophocphan->delete();
        $students = Students::where("mssv", $id);
        $students->delete();
        return Response(['status' => 200]);
    }
}
