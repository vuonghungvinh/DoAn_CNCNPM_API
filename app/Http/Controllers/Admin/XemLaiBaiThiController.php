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
use App\DeThiCauHoi;
use App\Question;
use App\LichThi;

class XemLaiBaiThiController extends Controller
{
    public function list()
    {
        $listlichthi = LichThi::all();
        $listmon = Mon::all();
        $listlop = Lop::all();
        $kqt = KetQuaThi::with(['dethi', 'sinhvien', 'dethi_lichthi'])->get();
        return response()->json(['listmon' => $listmon, 'listlichthi' =>$listlichthi, 'listketquathi' => $kqt, 'listlop' => $listlop]);
    }

    public function detail(Request $requests)
    {
        $kqt = KetQuaThi::with(['dethi', 'sinhvien'])->find($requests->id);
        $dethicauhoi = DeThiCauHoi::where('madethi', $kqt->madethi)->get();
        $dc_arr = [];
        foreach ($dethicauhoi as $dc)
        {
            $dc_arr[] = $dc->macauhoi;
        }
        $cauhoi_arr = Question::with(['listdapan'])->whereIn('id', $dc_arr)->get();
        return response()->json(['listketquathi' => $kqt, 'dethicauhoi' => $dc_arr, 'cauhoi_arr' => $cauhoi_arr]);
    }
}
