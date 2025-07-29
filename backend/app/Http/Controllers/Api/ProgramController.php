<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Program;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;

class ProgramController extends Controller
{
    public function show(): JsonResponse
    {
        $program = Program::all();

        return response()->json([
            'status' => 'success',
            'data' => $program,
        ]);
    }

    public function index(): JsonResponse
    {
        $programs = Program::all()->map(function ($program) {
            return [
                'title' => $program->judul,
                'description' => $program->deskripsi,
                'features' => collect($program->keunggulan)->pluck('value'),
                'duration' => $program->kategori_usia,
                'students' => $program->jumlah_santri . ' Santri',
            ];
        });

        return response()->json([
            'status' => 'success',
            'data' => $programs,
        ]);
    }
}
