<?php

namespace App\Http\Controllers\Admin;

use App\LopHocPhan;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;


class LophocphanController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $lophocphan = LopHocPhan::with(['mon', 'student'])->get();
        return response()->json(['lophocphan' => $lophocphan]);
    }

    public function danhsachsinhvien(Request $request)
    {
        $lophocphan = LopHocPhan::with(['mon', 'student'])->get()->where('mamon',$request->id);
        return response()->json(['lophocphan' => $lophocphan]);
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
    public function destroy(LopHocPhan $lopHocPhan)
    {
        //
    }
}
