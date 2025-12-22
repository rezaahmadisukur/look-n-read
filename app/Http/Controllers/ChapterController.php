<?php

namespace App\Http\Controllers;

use App\Models\Chapter;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class ChapterController extends Controller
{

    public function index(Request $request): JsonResponse
    {
        // 1. Validasi: Kita butuh tahu chapter dari komik mana?
        // User harus kirim parameter ?comic_id=10 di URL
        // $request->validate([
        //     'comic_id' => 'required|exists:comics,id',
        //     'mode' => 'in:admin,guest' // Opsional: untuk membedakan mode baca/edit
        // ]);

        // 2. Mulai Query Dasar
        $query = Chapter::query()
            ->where('comic_id', $request->comic_id);

        // 3. Logika Pembeda (Admin vs Guest)
        // Kalau yang minta adalah 'guest' (pembaca)
        if ($request->mode === 'guest') {
            $query->where('published_at', '<=', now()) // Cuma yang sudah tayang
                ->orderBy('number', 'asc');           // Urut dari Ch 1, 2, 3...
        }
        // Kalau yang minta adalah 'admin'
        else {
            // Admin lihat semua (Draft, Scheduled, Published)
            // Urut dari Ch paling baru (misal Ch 100) ke bawah
            $query->orderBy('number', 'desc');
        }

        // 4. Eksekusi
        // Kita pakai get() biasa. Kalau chapternya ribuan (seperti One Piece),
        // ganti jadi paginate(20).
        $chapters = $query->get();

        return response()->json([
            'status' => 'success',
            'data' => $chapters
        ]);
    }

}
