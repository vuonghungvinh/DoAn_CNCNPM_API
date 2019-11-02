<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateLophocphanTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('lophocphan', function (Blueprint $table) {
            $table->increments('id');
            $table->string('mssv', 10)->default('null');
            $table->string('malophp',10)->unique();
            $table->integer('mamon');
            $table->integer('dkthi')->default(0);
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
        Schema::dropIfExists('lophocphan');
    }
}
