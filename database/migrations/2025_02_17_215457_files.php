<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create("files", function(Blueprint $table) {
            $table->id();
            $table->string("name")->unique();
            $table->integer("size");
            $table->date("creation_date")->default(now());
            $table->foreignId("user_id")->constrained();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        //
    }
};
