<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Berita;
use Illuminate\Http\Request;

class BeritaController extends Controller
{
        // GET /api/berita
    public function index()
    {
        $berita = Berita::latest()->paginate(3); 

        return response()->json([
            'success' => true,
            'data' => $berita,
        ]);
    }

    // GET /api/berita/{id}
    public function show($id)
    {
        $berita = Berita::find($id);

        if (!$berita) {
            return response()->json([
                'success' => false,
                'message' => 'Berita tidak ditemukan',
            ], 404);
        }

        return response()->json([
            'success' => true,
            'data' => $berita,
        ]);
    }
}
