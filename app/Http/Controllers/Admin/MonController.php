<?php

namespace App\Http\Controllers\Admin;

use App\Mon;
use App\LopHocPhan;
use App\Question;
use DB;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class MonController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $mon = Mon::all();
        return response()->json(['mon' => $mon]);
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

    public function delete($id)
    {
      $question = Question::where("mamon","=",$id);
      $question->delete();
      $lophp = LopHocPhan::where("mamon","=",$id);
      $lophp->delete();
      $mon = Mon::where("id","=",$id);
      $mon->delete();
      return Response(['status' => 200]);
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
        $mon = new Mon;
        $mon->tenmon = $request->tenmon;
        $mon->save();
        return Response(['status' => 200]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Mon  $mon
     * @return \Illuminate\Http\Response
     */
    public function show(Mon $mon)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Mon  $mon
     * @return \Illuminate\Http\Response
     */
    public function edit(Mon $mon)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Mon  $mon
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Mon $mon)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Mon  $mon
     * @return \Illuminate\Http\Response
     */
    public function destroy(Mon $mon)
    {
        //
    }
}
