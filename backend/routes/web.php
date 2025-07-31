<?php

use App\Http\Controllers\Api\BeritaController;
use App\Http\Controllers\Api\ContactInfoController;
use App\Http\Controllers\Api\GalleryController;
use App\Http\Controllers\Api\ProfileController;
use App\Http\Controllers\Api\ProgramController;
use App\Http\Controllers\Api\TestimonialController;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Route;



Route::prefix('api')->group(function () {
    Route::get('/profile', [ProfileController::class, 'show']);
    Route::get('/galleries', [GalleryController::class, 'index']);
    Route::get('/galleries/{id}', [GalleryController::class, 'show']);
    Route::get('/programs', [ProgramController::class, 'show']);
    Route::get('/v2/programs', [ProgramController::class, 'index']);
    Route::get('/testimonials', [TestimonialController::class, 'show']);
    Route::get('/berita', [BeritaController::class, 'index']);
    Route::get('/berita/{id}', [BeritaController::class, 'show']);
    Route::get('/contact', [ContactInfoController::class, 'show']);
});

Route::get('/{any}', function () {
    return File::get(public_path('ui/index.html'));
})->where('any', '^(?!api).*$');
