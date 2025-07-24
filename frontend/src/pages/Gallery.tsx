
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Camera, Play, Users, BookOpen, Award, Building } from "lucide-react";
import { useState } from "react";

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", name: "Semua", icon: Camera },
    { id: "facilities", name: "Fasilitas", icon: Building },
    { id: "activities", name: "Kegiatan", icon: Users },
    { id: "learning", name: "Pembelajaran", icon: BookOpen },
    { id: "achievements", name: "Prestasi", icon: Award }
  ];

  const galleryItems = [
    {
      id: 1,
      title: "Masjid Al-Hidayah",
      category: "facilities",
      type: "image",
      image: "https://images.unsplash.com/photo-1466442929976-97f336a657be?w=600&h=400&fit=crop",
      description: "Masjid utama pesantren dengan kapasitas 1000 jamaah"
    },
    {
      id: 2,
      title: "Kegiatan Tahfidz Pagi",
      category: "learning",
      type: "image",
      image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=600&h=400&fit=crop",
      description: "Santri sedang menghafal Al-Quran di waktu pagi"
    },
    {
      id: 3,
      title: "Lomba Kaligrafi",
      category: "achievements",
      type: "image",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=600&h=400&fit=crop",
      description: "Santri mengikuti lomba kaligrafi tingkat regional"
    },
    {
      id: 4,
      title: "Perpustakaan Modern",
      category: "facilities",
      type: "image",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=400&fit=crop",
      description: "Perpustakaan dengan koleksi 10,000+ buku"
    },
    {
      id: 5,
      title: "Kegiatan Bakti Sosial",
      category: "activities",
      type: "image",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&h=400&fit=crop",
      description: "Santri memberikan bantuan kepada masyarakat sekitar"
    },
    {
      id: 6,
      title: "Laboratorium Komputer",
      category: "facilities",
      type: "image",
      image: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=600&h=400&fit=crop",
      description: "Lab komputer dengan 40 unit PC terbaru"
    },
    {
      id: 7,
      title: "Pembelajaran Bahasa Arab",
      category: "learning",
      type: "image",
      image: "https://images.unsplash.com/photo-1492321936769-b49830bc1d1e?w=600&h=400&fit=crop",
      description: "Kelas bahasa Arab dengan metode interaktif"
    },
    {
      id: 8,
      title: "Upacara Wisuda",
      category: "achievements",
      type: "image",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&h=400&fit=crop",
      description: "Wisuda santri lulusan Al-Hidayah"
    },
    {
      id: 9,
      title: "Kegiatan Olahraga",
      category: "activities",
      type: "image",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
      description: "Olahraga pagi di lapangan pesantren"
    },
    {
      id: 10,
      title: "Video Profile Pesantren",
      category: "activities",
      type: "video",
      image: "https://images.unsplash.com/photo-1466442929976-97f336a657be?w=600&h=400&fit=crop",
      description: "Video profil lengkap Pondok Pesantren Al-Hidayah"
    },
    {
      id: 11,
      title: "Asrama Santri Putra",
      category: "facilities",
      type: "image",
      image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=600&h=400&fit=crop",
      description: "Asrama nyaman untuk santri putra"
    },
    {
      id: 12,
      title: "Kegiatan Hadroh",
      category: "activities",
      type: "video",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop",
      description: "Pertunjukan hadroh santri Al-Hidayah"
    }
  ];

  const filteredItems = activeCategory === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-islamic-gradient text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Galeri Al-Hidayah
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Lihat berbagai kegiatan, fasilitas, dan momen berharga di 
              Pondok Pesantren Al-Hidayah melalui koleksi foto dan video kami.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Filter */}
      <section className="py-8 bg-white shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-islamic-gradient text-white shadow-lg scale-105"
                    : "bg-gray-100 text-gray-700 hover:bg-islamic-green hover:text-white"
                }`}
              >
                <category.icon className="h-4 w-4 mr-2" />
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item) => (
              <div key={item.id} className="group relative bg-white rounded-xl shadow-lg overflow-hidden hover-lift">
                {/* Image */}
                <div className="relative h-64 bg-gray-200">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  {/* Video Play Button */}
                  {item.type === "video" && (
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                      <div className="bg-white/90 backdrop-blur-sm p-4 rounded-full group-hover:scale-110 transition-transform duration-300">
                        <Play className="h-8 w-8 text-islamic-green" />
                      </div>
                    </div>
                  )}

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-white font-semibold text-lg mb-2">{item.title}</h3>
                      <p className="text-gray-200 text-sm">{item.description}</p>
                    </div>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-islamic-green text-white px-3 py-1 rounded-full text-xs font-medium">
                      {categories.find(cat => cat.id === item.category)?.name}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4">
                  <h3 className="font-semibold text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm line-clamp-2">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <button className="bg-islamic-gradient hover:opacity-90 text-white px-8 py-3 rounded-full font-medium transition-opacity">
              Muat Lebih Banyak
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Dokumentasi <span className="text-gradient">Kegiatan</span>
            </h2>
            <div className="w-20 h-1 bg-islamic-gradient rounded mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Setiap momen berharga di Al-Hidayah kami dokumentasikan untuk berbagi 
              cerita inspiratif dan perkembangan santri.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: "500+", label: "Foto Kegiatan", desc: "Per tahun" },
              { number: "50+", label: "Video Dokumenter", desc: "Berbagai program" },
              { number: "25+", label: "Album Digital", desc: "Kategori tersortir" },
              { number: "1000+", label: "Momen Berharga", desc: "Terabadikan" }
            ].map((stat, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-lg hover-lift">
                <div className="text-3xl font-bold text-islamic-green mb-2">{stat.number}</div>
                <div className="font-semibold text-gray-800 mb-1">{stat.label}</div>
                <div className="text-sm text-gray-600">{stat.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Virtual Tour CTA */}
      <section className="py-20 bg-islamic-gradient text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ingin Melihat Lebih Dekat?
            </h2>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              Ikuti virtual tour pesantren kami atau kunjungi langsung untuk merasakan 
              atmosfer belajar yang nyaman dan kondusif di Al-Hidayah.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-islamic-gold hover:bg-yellow-600 text-gray-900 font-semibold px-8 py-3 rounded-full transition-colors">
                <Play className="inline-block mr-2 h-5 w-5" />
                Virtual Tour
              </button>
              <button className="border border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-full transition-colors">
                <Camera className="inline-block mr-2 h-5 w-5" />
                Kunjungi Pesantren
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Gallery;
