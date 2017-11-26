<?php

namespace App\Http\Controllers\Admin;
use \stdClass;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\DeThi;
use App\LopHocPhan;
use App\Lop;
use App\KetQuaThi;
use App\Mon;

class XemLaiBaiThiController extends Controller
{
    public function list()
    {
        $listmon = Mon::all();
        $listlop = Lop::all();
        $kqt = KetQuaThi::with(['dethi', 'sinhvien'])->get();
        return response()->json(['listmon' => $listmon, 'listketquathi' => $kqt, 'listlop' => $listlop]);
    }
}