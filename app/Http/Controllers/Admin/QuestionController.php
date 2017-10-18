<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Question;
use App\DapAn;
use App\Http\Controllers\Controller;
use Validator;

class QuestionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
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
        $cauhoi = new Question;
        $cauhoi->mamon = $request->mamon;
        $cauhoi->noidung = $request->noidungcauhoi;
        $cauhoi->mucdo = $request->dokho;
        $cauhoi->dapan = '';
        $cauhoi->save();
        $id_cauhoi = $cauhoi->id;
        $dapan_dung = '';
        foreach($request->list_dap_an as $dapan){
            $da = new DapAn;
            $da->macauhoi =$id_cauhoi;
            $da->tendapan = $dapan['ten'];
            $da->noidung = $dapan['noi_dung'];
            $da->save();
            if ($dapan['is_true']){
              $dapan_dung .= strval($da->id);//'1', '1,3'
            }
        }
        //update bang cau hoi field dapan=$dapan_dung
        $question = Question::find($id_cauhoi);
        $question->dapan=$dapan_dung;
        $question->save();
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
