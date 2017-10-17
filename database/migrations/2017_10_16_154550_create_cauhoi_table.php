<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCauhoiTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('cauhoi', function (Blueprint $table) {
            $table->increments('id');
            $table->string('macauhoi', 69)->unique();
            $table->string('mamon');
            $table->text('noidung');
            $table->text('caua');
            $table->text('caub');
            $table->text('cauc');
            $table->text('caud');
            $table->string('dapan');
            $table->integer('mucdo');
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
        Schema::dropIfExists('cauhoi');
    }
}
