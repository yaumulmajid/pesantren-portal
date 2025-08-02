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
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
            Berita & <span className="text-gradient">Kegiatan Terbaru</span>
          </h2>
          <div className="w-16 h-1 bg-islamic-gradient rounded mx-auto mb-4"></div>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Ikuti perkembangan terbaru dari berbagai kegiatan dan prestasi 
            yang dicapai oleh keluarga besar Miftahul Amanah.
          </p>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {news.length === 0 ? (
            <div className="col-span-full text-center text-gray-500">
              Tidak ada berita untuk ditampilkan.
            </div>
          ) : (
            news.map((article, index) => (
              <article key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover-lift">
                {/* Image */}
                <div className="relative h-40 bg-gray-100 flex items-center justify-center">
                  <img
                    src={`/storage/${article.thumbnail}`}
                    alt={article.judul}
                    className="max-h-full max-w-full object-contain"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-islamic-green text-white px-2 py-1 rounded-full text-xs font-medium">
                      {article.kategori}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  {/* Meta Info */}
                  <div className="flex items-center text-xs text-gray-500 mb-3 space-x-3">
                    <div className="flex items-center">
                      <Calendar className="h-3 w-3 mr-1" />
                      {formatTanggalIndo(article.tanggal)}
                    </div>
                    <div className="flex items-center">
                      <User className="h-3 w-3 mr-1" />
                      {article.penulis}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-gray-800 mb-2 leading-tight">
                    {article.judul}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-gray-600 leading-relaxed mb-3 text-sm">
                    {truncate(article.konten.replace(/<[^>]+>/g, ""), 120)}
                  </p>

                  {/* Read More */}
                  <Link to={`/berita/${article.id}`}>
                    <Button variant="ghost" className="p-0 text-islamic-green hover:text-islamic-green/80 text-sm">
                      Baca Selengkapnya 
                      <ArrowRight className="ml-2 h-3 w-3" />
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
              size="default"
              className="border-islamic-green text-islamic-green hover:bg-islamic-green hover:text-white px-6 py-2 rounded-full text-sm"
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