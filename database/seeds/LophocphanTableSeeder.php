<?php

use Illuminate\Database\Seeder;

class LophocphanTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
         DB::table('lophocphan')->insert([
            'mssv' => '102130054',
            'mamon' => '01',
            
        ]);
    }
}
