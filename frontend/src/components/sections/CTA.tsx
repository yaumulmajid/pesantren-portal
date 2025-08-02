import { ArrowRight, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="py-12 bg-islamic-gradient relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 islamic-pattern opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center text-white">
          {/* Main CTA */}
          <div className="max-w-4xl mx-auto mb-10">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">
              Wujudkan Impian Pendidikan Islam Terbaik untuk Buah Hati Anda
            </h2>
            <p className="text-lg text-gray-200 mb-6 leading-relaxed">
              Bergabunglah dengan ribuan keluarga yang telah mempercayakan pendidikan 
              putra-putri mereka di Pondok Pesantren Miftahul Amanah. Daftarkan sekarang 
              dan dapatkan kesempatan pendidikan terbaik.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
              <Button 
                asChild
                size="default"
                className="bg-islamic-gold hover:bg-yellow-600 text-gray-900 font-semibold px-6 py-3 rounded-full hover:scale-105 transition-all duration-300 text-sm"
              >
                <Link to="/registration">
                  Daftar Santri Baru <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              
              <Button 
                asChild
                variant="outline"
                size="default"
                className="border-white text-white hover:bg-white hover:text-gray-900 px-6 py-3 rounded-full transition-all duration-300 text-sm"
              >
                <Link to="/donation">
                  Donasi & Infaq
                </Link>
              </Button>
            </div>
          </div>

          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Phone */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 hover-lift">
              <div className="flex items-center justify-center mb-3">
                <div className="bg-islamic-gold p-2 rounded-full">
                  <Phone className="h-5 w-5 text-gray-800" />
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-2">Hubungi Kami</h3>
              <p className="text-gray-200 mb-3 text-sm">
                Konsultasi gratis dengan tim penerimaan santri baru
              </p>
              <div className="text-base font-semibold text-islamic-gold">
                +62 123 456 789
              </div>
              <p className="text-xs text-gray-300 mt-1">
                Senin - Jumat: 08.00 - 16.00 WIB
              </p>
            </div>

            {/* Email */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 hover-lift">
              <div className="flex items-center justify-center mb-3">
                <div className="bg-islamic-gold p-2 rounded-full">
                  <Mail className="h-5 w-5 text-gray-800" />
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-2">Email Kami</h3>
              <p className="text-gray-200 mb-3 text-sm">
                Kirim pertanyaan dan dapatkan informasi lengkap
              </p>
              <div className="text-base font-semibold text-islamic-gold">
                info@miftahulamanah.ac.id
              </div>
              <p className="text-xs text-gray-300 mt-1">
                Respon dalam 24 jam
              </p>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-10 text-center">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-5 py-2">
              <span className="text-xs text-gray-200 mr-2">📍 Kunjungi langsung:</span>
              <span className="text-xs font-medium text-islamic-gold">
                Jl. Brigjen M. Isa No. 35 Cipadung, Kec. Purwaharja, Kota Banjar, Jawa Barat
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;