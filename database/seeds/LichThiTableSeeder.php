<?php

use Illuminate\Database\Seeder;

class LichThiTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        DB::table('lichthi')->insert([
          'mamon' => '1',
          'thoigianthi' => '40',
          'phong' => 'C102',
          'thoigianbatdauthi' => '2017-10-28 13:00:00',
      ]);
    }
}
