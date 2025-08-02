import React from 'react';
import { Home, ArrowLeft } from 'lucide-react';

const ComingSoon = () => {
  return (
    <div className="min-h-screen bg-islamic-gradient from-islamic-green flex items-center justify-center px-4 py-8">
      <div className="text-center max-w-md sm:max-w-lg md:max-w-2xl mx-auto w-full">
        {/* Arabic Text */}
        <p className="text-amber-300 text-lg sm:text-xl md:text-2xl mb-4 sm:mb-6" dir="rtl">
          بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
        </p>

        {/* Title */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2">
          Pondok Pesantren
        </h1>
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-amber-300 mb-4 sm:mb-6">
          Miftahul Amanah
        </h2>

        {/* Subtitle */}
        <p className="text-sm sm:text-base md:text-lg text-emerald-100 mb-6 sm:mb-8 px-2">
          Membentuk Generasi Muslim Berakhlak Mulia dengan Pendidikan Islam Modern
        </p>

        {/* Coming Soon Card */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 mb-6 sm:mb-8 mx-2 sm:mx-0">
          <div className="text-4xl sm:text-5xl md:text-6xl mb-3 sm:mb-4">🚧</div>
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">Segera Hadir</h3>
          <p className="text-emerald-200 mb-4 sm:mb-6 text-sm sm:text-base">
            Website sedang dalam tahap pengembangan dan akan segera diluncurkan
          </p>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <a
              href="/"
              className="inline-flex items-center justify-center gap-2 bg-amber-400 hover:bg-amber-500 text-white font-bold py-3 px-6 rounded-lg transition-colors text-sm sm:text-base"
            >
              <Home size={20} />
              Kembali ke Beranda
            </a>
            <button 
              onClick={() => window.history.back()}
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold py-3 px-6 rounded-lg transition-colors text-sm sm:text-base"
            >
              <ArrowLeft size={20} />
              Kembali
            </button>
          </div>
        </div>

        {/* Footer */}
        <p className="text-emerald-200 text-xs sm:text-sm px-2">
          © 2025 Pondok Pesantren Miftahul Amanah
        </p>
      </div>
    </div>
  );
};

export default ComingSoon;