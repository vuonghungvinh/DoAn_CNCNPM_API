<?php

use Illuminate\Database\Seeder;

class DapAnTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        DB::table('dapan')->insert([
          'macauhoi' => '1',
          'tendapan' => 'Cau A',
          'noidungdapan' => 'Thu 2',
      ]);
    }
}
