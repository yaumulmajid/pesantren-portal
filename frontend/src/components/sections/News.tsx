
import { Calendar, User, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const News = () => {
  const news = [
    {
      title: "Pelaksanaan Ujian Tahfidz Semester Ganjil 2024",
      excerpt: "Para santri Al-Hidayah mengikuti ujian tahfidz dengan antusias. Alhamdulillah, tingkat kelulusan mencapai 95% dengan hasil yang memuaskan.",
      date: "15 Januari 2024",
      author: "Ustadz Ahmad",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=250&fit=crop",
      category: "Akademik"
    },
    {
      title: "Kegiatan Bakti Sosial di Desa Sekitar Pesantren",
      excerpt: "Santri Al-Hidayah mengadakan kegiatan bakti sosial dengan membagikan sembako dan memberikan layanan kesehatan gratis untuk masyarakat.",
      date: "10 Januari 2024", 
      author: "Ustadzah Fatimah",
      image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=400&h=250&fit=crop",
      category: "Kegiatan"
    },
    {
      title: "Prestasi Santri dalam Lomba Pidato Bahasa Arab Tingkat Provinsi",
      excerpt: "Alhamdulillah, santri Al-Hidayah meraih juara 1 dalam lomba pidato bahasa Arab tingkat provinsi Jawa Timur.",
      date: "5 Januari 2024",
      author: "Ustadz Hakim",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=400&h=250&fit=crop",
      category: "Prestasi"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Berita & <span className="text-gradient">Kegiatan Terbaru</span>
          </h2>
          <div className="w-20 h-1 bg-islamic-gradient rounded mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ikuti perkembangan terbaru dari berbagai kegiatan dan prestasi 
            yang dicapai oleh keluarga besar Al-Hidayah.
          </p>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {news.map((article, index) => (
            <article key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover-lift">
              {/* Image */}
              <div className="relative h-48 bg-gray-200">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-islamic-green text-white px-3 py-1 rounded-full text-xs font-medium">
                    {article.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Meta Info */}
                <div className="flex items-center text-sm text-gray-500 mb-3 space-x-4">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {article.date}
                  </div>
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-1" />
                    {article.author}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-800 mb-3 leading-tight">
                  {article.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-600 leading-relaxed mb-4">
                  {article.excerpt}
                </p>

                {/* Read More */}
                <Button variant="ghost" className="p-0 text-islamic-green hover:text-islamic-green/80">
                  Baca Selengkapnya 
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button 
            variant="outline"
            size="lg"
            className="border-islamic-green text-islamic-green hover:bg-islamic-green hover:text-white px-8 py-4 rounded-full"
          >
            Lihat Semua Berita
          </Button>
        </div>
      </div>
    </section>
  );
};

export default News;
