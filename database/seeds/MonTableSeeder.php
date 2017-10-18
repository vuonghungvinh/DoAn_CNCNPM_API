<?php

use Illuminate\Database\Seeder;

class MonTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
      DB::table('mon')->insert([
        'tenmon' => 'Java',
    ]);
      DB::table('mon')->insert([
        'tenmon' => 'Lap Trinh Mang',
    ]);
      DB::table('mon')->insert([
        'tenmon' => 'Cong Nghe Web',
    ]);
    }
}
