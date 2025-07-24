
import { ArrowRight, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="py-20 bg-islamic-gradient relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 islamic-pattern opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center text-white">
          {/* Main CTA */}
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Wujudkan Impian Pendidikan Islam Terbaik untuk Buah Hati Anda
            </h2>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              Bergabunglah dengan ribuan keluarga yang telah mempercayakan pendidikan 
              putra-putri mereka di Pondok Pesantren Al-Hidayah. Daftarkan sekarang 
              dan dapatkan kesempatan pendidikan terbaik.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                asChild
                size="lg"
                className="bg-islamic-gold hover:bg-yellow-600 text-gray-900 font-semibold px-8 py-4 rounded-full hover:scale-105 transition-all duration-300"
              >
                <Link to="/registration">
                  Daftar Santri Baru <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              
              <Button 
                asChild
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-full transition-all duration-300"
              >
                <Link to="/donation">
                  Donasi & Infaq
                </Link>
              </Button>
            </div>
          </div>

          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Phone */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover-lift">
              <div className="flex items-center justify-center mb-4">
                <div className="bg-islamic-gold p-3 rounded-full">
                  <Phone className="h-6 w-6 text-gray-800" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Hubungi Kami</h3>
              <p className="text-gray-200 mb-4">
                Konsultasi gratis dengan tim penerimaan santri baru
              </p>
              <div className="text-lg font-semibold text-islamic-gold">
                +62 123 456 789
              </div>
              <p className="text-sm text-gray-300 mt-1">
                Senin - Jumat: 08.00 - 16.00 WIB
              </p>
            </div>

            {/* Email */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover-lift">
              <div className="flex items-center justify-center mb-4">
                <div className="bg-islamic-gold p-3 rounded-full">
                  <Mail className="h-6 w-6 text-gray-800" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Email Kami</h3>
              <p className="text-gray-200 mb-4">
                Kirim pertanyaan dan dapatkan informasi lengkap
              </p>
              <div className="text-lg font-semibold text-islamic-gold">
                info@miftahulamanah.ac.id
              </div>
              <p className="text-sm text-gray-300 mt-1">
                Respon dalam 24 jam
              </p>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
              <span className="text-sm text-gray-200 mr-2">📍 Kunjungi langsung:</span>
              <span className="text-sm font-medium text-islamic-gold">
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
