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
            'mamon' => '01',
            'tenmon' => 'Tin dai cuong',
            
        ]);
    }
}
