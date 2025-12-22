<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('chapter_images', function (Blueprint $table) {
            $table->id();
            // 1. PENGHUBUNG (Foreign Key)
            // Ini yang bilang: "Gambar ini milik Chapter ID sekian"
            $table->foreignId('chapter_id')->constrained('chapters')->onDelete('cascade');

            // 2. LOKASI FILE
            // Menyimpan path string, contoh: "comics/one-piece/ch1/01.jpg"
            $table->string('image_path');

            // 3. URUTAN BACA
            // Supaya halaman 1 gak ketuker sama halaman 10
            $table->unsignedInteger('page_number');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('chapter_images');
    }
};
