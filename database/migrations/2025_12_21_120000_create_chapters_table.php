<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('chapters', function (Blueprint $table) {
            $table->id();

            // 1. Foreign Key (Sudah Benar)
            $table->foreignId('comic_id')->constrained('comics')->onDelete('cascade');

            // 2. Metadata Dasar
            $table->string('title')->nullable(); // Kadang chapter cuma punya nomor, gak ada judulnya. Jadi nullable lebih aman.
            $table->string('slug')->nullable(); // Opsional, bagus untuk SEO.

            // 3. Nomor Chapter (PENTING: Pakai Decimal)
            // (8, 2) artinya bisa simpan angka sampai 999999.99 (Support Ch 10.5)
            $table->decimal('number', 8, 2);

            // 4. Status Publish (Cukup satu kolom sakti ini)
            // Kalau null = draft. Kalau ada isi = terbit/dijadwalkan.
            $table->timestamp('published_at')->nullable();

            $table->timestamps();

            // 5. Constraints (Sudah Benar & Sangat Bagus)
            // Mencegah ada dua "Chapter 1" di komik yang sama.
            $table->unique(['comic_id', 'number']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('chapters');
    }
};
