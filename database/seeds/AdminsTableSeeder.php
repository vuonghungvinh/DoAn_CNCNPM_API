<?php

use Illuminate\Database\Seeder;

class AdminsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('admins')->insert([
            'name' => 'admin',
            'password' => bcrypt('123456'),
        ]);
        DB::table('admins')->insert([
            'name' => 'admin1',
            'password' => bcrypt('123456'),
        ]);
    }
}
