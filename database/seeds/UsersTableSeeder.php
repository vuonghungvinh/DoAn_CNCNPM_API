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
            'malop' => "1",
            'trangthai' =>'1',
            'diachi' => 'Huế',
            'password' => bcrypt('123456'),
        ]);

        DB::table('users')->insert([
            'name' => 'Nguyễn Đức An',
            'mssv' => '102130056',
            'ngaysinh' => '1995-08-06',
            'gioitinh' => true,
            'malop' => "2",
            'trangthai' =>'1',
            'diachi' => 'Nghệ AN',
            'password' => bcrypt('123456'),
        ]);
    }
}
