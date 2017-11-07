<?php

use Illuminate\Database\Seeder;

class LopTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        DB::table('lop')->insert([
          'tenlop' => '13T1',
          'khoa' => '13',

      ]);
        DB::table('lop')->insert([
          'tenlop' => '13T2',
          'khoa' => '13',

      ]);
        DB::table('lop')->insert([
          'tenlop' => '13T3',
          'khoa' => '13',

      ]);
        DB::table('lop')->insert([
          'tenlop' => '13T4',
          'khoa' => '13',

      ]);
    }
}
