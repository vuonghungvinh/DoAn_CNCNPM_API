<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateKetquathiTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('ketquathi', function (Blueprint $table) {
            $table->increments('id');
            $table->string('mssv', 10);
            $table->float('diem', 2, 2);
            $table->string('madethi', 10);
            $table->string('thoiganlam', 10);
            $table->date('thoigianbatdau');
            $table->string('dapan', 255);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('KetQuaThi');
    }
}
