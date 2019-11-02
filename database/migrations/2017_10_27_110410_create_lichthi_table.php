<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateLichthiTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('lichthi', function (Blueprint $table) {
            //
            $table->increments('id');
            $table->integer('mamon');
            $table->string('malophp',10);
            $table->string('phong',20);
            $table->dateTime('thoigianbatdauthi');
            $table->integer('thoigianthi');
            $table->integer('tongcauhoi');
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
        Schema::dropIfExists('lichthi');
    }
}
