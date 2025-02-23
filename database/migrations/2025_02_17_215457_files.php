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
            $table->string("name");
            $table->integer("size");
            $table->date("created_at")->default(now());
            $table->date("updated_at")->default(now());
            $table->string("file_type");
            $table->string("random_name");
            $table->foreignId("user_id")->constrained();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::drop("files");
    }
};
