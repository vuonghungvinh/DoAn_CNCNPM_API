<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Question;
use App\DapAn;
use Illuminate\Support\Facades\DB;
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
        // $listquestion = Question::all();
        // return response()->json(['listquestion'=>$listquestion]);
        // $listquestion = DB::table('cauhoi')
        // ->join('mon','cauhoi.mamon', '=', 'mon.id')
        // ->join('dapan', 'cauhoi.id', '=', 'dapan.macauhoi')
        // ->select('cauhoi.noidungcauhoi','cauhoi.dapan','cauhoi.mucdo','mon.id','mon.tenmon','dapan.tendapan','dapan.noidungdapan','dapan.id','dapan.macauhoi')
        // ->get();
        $listquestion = Question::with(['listdapan', 'mon'])->get();
        return response()->json(['listquestion'=>$listquestion]);
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
        $cauhoi->noidungcauhoi = $request->noidungcauhoi;
        $cauhoi->dapan = '';
        $cauhoi->save();
        $id_cauhoi = $cauhoi->id;
        $dapan_dung = '';
        foreach($request->list_dap_an as $dapan){
            $da = new DapAn;
            $da->macauhoi =$id_cauhoi;
            $da->tendapan = $dapan['ten'];
            $da->noidungdapan = $dapan['noi_dung'];
            $da->save();
            if ($dapan['is_true']){
              $dapan_dung .= strval($da->id).',';//'1', '1,3'
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
        $cauhoi = Question::with(['listdapan', 'mon'])->where('id', '=', $id)->get();
        return response()->json(['cauhoi'=>$cauhoi]);

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
    public function delete( $id )
    {
      $da = DapAn::where("macauhoi","=",$id);
      $da->delete();
      $question = Question::where("id","=",$id);
      $question->delete();
      return Response(['status' => 200]);
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
        $dapan_dung = '';
        foreach($request->listdapan as $dapan){
            // $da = new DapAn;
            // $da->macauhoi =$id_cauhoi;
            // $da->tendapan = $dapan['ten'];
            // $da->noidungdapan = $dapan['noi_dung'];
            // $da->save();
            if ($dapan['is_true']){
              $dapan_dung .= strval($dapan['id']).',';//'1', '1,3'
            }
            DB::table('dapan')->where('id', $dapan['id'])->update(['noidungdapan' => $dapan['noi_dung']]);
        }
        //update bang cau hoi field dapan=$dapan_dung
        // $question = Question::find($id);
        DB::table('cauhoi')->where('id', $id)->update(['noidungcauhoi' => $request->noidungcauhoi, 'dapan' => $dapan_dung]);
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
    }
}
