<?php

use Illuminate\Database\Seeder;

class CauHoiTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        DB::table('cauhoi')->insert([
          'mamon' => '1',
          'noidung' => 'Hom nay la thu may',
          'dapan' => 'Cau A',
          'mucdo' => '1',
      ]);
    }
}
