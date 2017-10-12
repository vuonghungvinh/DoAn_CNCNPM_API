<?php

use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            'name' => 'Vương Hưng Vĩnh',
            'mssv' => '102130054',
            'ngaysinh' => '1995-03-24',
            'gioitinh' => true,
            'lop' => "13T1",
            'diachi' => 'Huế',
            'password' => bcrypt('123456'),
        ]);
    }
}
