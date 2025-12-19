<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Comic;
use Illuminate\Support\Str;

class ComicSeeder extends Seeder
{
    public function run(): void
    {
        Comic::create([
            'title' => 'One Piece',
            'slug' => 'one-piece',
            'author' => 'Eiichiro Oda',
            'status' => 'ongoing',
            'type' => 'manga',
            'synopsis' => 'Petualangan bajak laut mencari harta karun legendaris.',
            'cover_image' => 'comics/covers/one-piece.jpg',
        ]);

        Comic::create([
            'title' => 'Naruto',
            'slug' => 'naruto',
            'author' => 'Masashi Kishimoto',
            'status' => 'completed',
            'type' => 'manga',
            'synopsis' => 'Perjalanan ninja muda untuk menjadi Hokage.',
            'cover_image' => 'comics/covers/naruto.jpg',
        ]);
    }
}
