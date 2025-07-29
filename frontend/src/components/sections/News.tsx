"use client";

import { useEffect, useState } from "react";
import { Calendar, User, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

// 🔧 Fungsi bantu: format tanggal ke Indonesia
const formatTanggalIndo = (tanggal: string) => {
  const date = new Date(tanggal);
  return date.toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
};

// 🔧 Fungsi bantu: potong teks
const truncate = (text: string, maxLength: number) => {
  return text.length > maxLength ? text.substring(0, maxLength) + "..." : text;
};

const News = () => {
  const [news, setNews] = useState<any[]>([]);

  useEffect(() => {
    fetch("/api/berita")
      .then((res) => res.json())
      .then((data) => {
        if (data.success && Array.isArray(data.data?.data)) {
          setNews(data.data.data);
        } else {
          setNews([]);
        }
      })
      .catch(() => {
        setNews([]);
      });
  }, []);

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
            yang dicapai oleh keluarga besar Miftahul Amanah.
          </p>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {news.length === 0 ? (
            <div className="col-span-full text-center text-gray-500">
              Tidak ada berita untuk ditampilkan.
            </div>
          ) : (
            news.map((article, index) => (
              <article key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover-lift">
                {/* Image */}
                <div className="relative h-48 bg-gray-100 flex items-center justify-center">
                  <img
                    src={`/storage/${article.thumbnail}`}
                    alt={article.judul}
                    className="max-h-full max-w-full object-contain"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-islamic-green text-white px-3 py-1 rounded-full text-xs font-medium">
                      {article.kategori}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Meta Info */}
                  <div className="flex items-center text-sm text-gray-500 mb-3 space-x-4">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {formatTanggalIndo(article.tanggal)}
                    </div>
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      {article.penulis}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-800 mb-3 leading-tight">
                    {article.judul}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {truncate(article.konten.replace(/<[^>]+>/g, ""), 150)}
                  </p>

                  {/* Read More */}
                  <Link to={`/berita/${article.id}`}>
                    <Button variant="ghost" className="p-0 text-islamic-green hover:text-islamic-green/80">
                      Baca Selengkapnya 
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </article>
            ))
          )}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link to="/berita">
            <Button 
              variant="outline"
              size="lg"
              className="border-islamic-green text-islamic-green hover:bg-islamic-green hover:text-white px-8 py-4 rounded-full"
            >
              Lihat Semua Berita
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default News;