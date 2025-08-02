import { ArrowRight, BookOpen, Users, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const features = [
  { icon: BookOpen, title: "Kurikulum Terpadu", desc: "Pendidikan agama & umum" },
  { icon: Users, title: "Komunitas Santri", desc: "Lingkungan islami yang mendukung" },
  { icon: Award, title: "Prestasi Terbaik", desc: "Lulusan berprestasi nasional" }
];

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 pb-6">
      {/* Background */}
      <div className="absolute inset-0 bg-islamic-gradient">
        <div className="absolute inset-0 islamic-pattern opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
      </div>

      {/* Background Image Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: `url('ui/images/hero.png')`,
        }}
      ></div>

      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto space-y-4 md:space-y-6 animate-fade-in">
          {/* Arabic Calligraphy */}
          <motion.div 
            className="font-arabic text-base sm:text-lg md:text-xl lg:text-2xl text-islamic-gold opacity-90"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
          </motion.div>

          {/* Main Heading */}
          <motion.h1 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <span className="block">Pondok Pesantren</span>
            <span className="block text-islamic-gold mt-1">Miftahul Amanah</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed px-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
          >
            Membentuk Generasi Muslim Berakhlak Mulia dengan Pendidikan 
            <span className="text-islamic-gold font-semibold"> Islam Modern</span>
          </motion.p>

          {/* Features Grid with animation */}
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 mt-6 md:mt-8 mb-6 md:mb-8 px-2"
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.2
                }
              }
            }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-3 md:p-4 border border-white/20"
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <feature.icon className="h-5 w-5 md:h-6 md:w-6 text-islamic-gold mx-auto mb-2" />
                <h3 className="font-semibold text-sm md:text-base mb-1">{feature.title}</h3>
                <p className="text-gray-200 text-xs md:text-sm leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col gap-2 md:gap-3 justify-center items-center px-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <Button 
              asChild
              size="default"
              className="bg-islamic-gold hover:bg-yellow-600 text-gray-900 font-semibold px-5 md:px-6 py-2 md:py-3 rounded-full hover:scale-105 transition-all duration-300 w-full sm:w-auto text-sm md:text-base shadow-lg"
            >
              <Link to="/registration" className="flex items-center justify-center">
                Daftar Sekarang <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            
            <Button 
              asChild
              variant="outline"
              size="default"
              className="bg-white/10 text-white hover:bg-white hover:text-gray-900 border-white/30 hover:border-white rounded-full transition-all duration-300 w-full sm:w-auto text-sm md:text-base backdrop-blur-sm"
            >
              <Link to="/profile" className="flex items-center justify-center">
                Pelajari Lebih Lanjut
              </Link>
            </Button>
          </motion.div>

          {/* Mobile Scroll Indicator */}
          <motion.div 
            className="block md:hidden mt-6 pt-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
          >
            <div className="w-5 h-8 border-2 border-white/50 rounded-full mx-auto relative">
              <div className="w-1 h-2 bg-white/70 rounded-full absolute top-1.5 left-1/2 transform -translate-x-1/2 animate-bounce"></div>
            </div>
            <p className="text-xs text-gray-300 mt-2">Scroll untuk melihat lebih banyak</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;