
import { ArrowRight, BookOpen, Users, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with Islamic Pattern */}
      <div className="absolute inset-0 bg-islamic-gradient">
        <div className="absolute inset-0 islamic-pattern opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
      </div>

      {/* Background Image Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1466442929976-97f336a657be?ixlib=rb-4.0.3&auto=format&fit=crop&w=2834&q=80')`
        }}
      ></div>

      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          {/* Arabic Calligraphy */}
          <div className="font-arabic text-2xl md:text-3xl text-islamic-gold opacity-90">
            بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Pondok Pesantren
            <span className="block text-islamic-gold">Al-Hidayah</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Membentuk Generasi Muslim Berakhlak Mulia dengan Pendidikan 
            <span className="text-islamic-gold font-semibold"> Islam Modern</span>
          </p>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 mb-12">
            {[
              { icon: BookOpen, title: "Kurikulum Terpadu", desc: "Pendidikan agama & umum" },
              { icon: Users, title: "Komunitas Santri", desc: "Lingkungan islami yang mendukung" },
              { icon: Award, title: "Prestasi Terbaik", desc: "Lulusan berprestasi nasional" }
            ].map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover-lift">
                <feature.icon className="h-8 w-8 text-islamic-gold mx-auto mb-3" />
                <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-gray-200 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              asChild
              size="lg"
              className="bg-islamic-gold hover:bg-yellow-600 text-gray-900 font-semibold px-8 py-4 rounded-full hover:scale-105 transition-all duration-300"
            >
              <Link to="/registration">
                Daftar Sekarang <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            
            <Button 
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-full transition-all duration-300"
            >
              <Link to="/profile">
                Pelajari Lebih Lanjut
              </Link>
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
