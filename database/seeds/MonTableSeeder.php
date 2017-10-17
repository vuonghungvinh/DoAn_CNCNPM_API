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
        'mamon' => 'A11',
        'tenmon' => 'Java',
    ]);
      DB::table('mon')->insert([
        'mamon' => 'A12',
        'tenmon' => 'Lap Trinh Mang',
    ]);
      DB::table('mon')->insert([
        'mamon' => 'A13',
        'tenmon' => 'Cong Nghe Web',
    ]);
    }
}
