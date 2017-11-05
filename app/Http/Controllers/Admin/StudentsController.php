<?php

namespace App\Http\Controllers\Admin;

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
