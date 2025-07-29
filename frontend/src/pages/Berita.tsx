import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Calendar, User, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const formatTanggalIndo = (tanggal: string) => {
  const date = new Date(tanggal);
  return date.toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
};

const truncate = (text: string, maxLength: number) => {
  return text.length > maxLength ? text.substring(0, maxLength) + "..." : text;
};

export default function BeritaIndex() {
  const [news, setNews] = useState<any[]>([]);
  const [page, setPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`/api/berita?page=${page}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setNews(data.data.data);
          setLastPage(data.data.last_page);
        }
      })
      .finally(() => setLoading(false));
  }, [page]);

  return (
    <>
      <Header />

      {loading ? (
        <div className="flex items-center justify-center h-screen bg-white">
          <div className="flex flex-col items-center space-y-4">
            <div className="w-16 h-16 rounded-full border-4 border-t-transparent border-r-yellow-500 border-b-green-600 border-l-yellow-500 animate-spin"></div>
            <p className="text-gray-600 font-semibold">Memuat berita...</p>
          </div>
        </div>
      ) : (
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Semua <span className="text-gradient">Berita & Kegiatan</span>
              </h1>
              <div className="w-20 h-1 bg-islamic-gradient rounded mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Informasi lengkap tentang kegiatan dan prestasi terbaru pondok pesantren.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
              {news.map((article, index) => (
                <article
                  key={index}
                  className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                >
                  <div className="relative h-44 bg-gray-100 flex items-center justify-center">
                    <img
                      src={`/storage/${article.thumbnail}`}
                      alt={article.judul}
                      className="max-h-full max-w-full object-contain"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="bg-islamic-green text-white px-3 py-1 rounded-full text-xs font-medium">
                        {article.kategori}
                      </span>
                    </div>
                  </div>

                  <div className="p-5">
                    <div className="flex items-center text-sm text-gray-500 mb-2 space-x-4">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {formatTanggalIndo(article.tanggal)}
                      </div>
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-1" />
                        {article.penulis}
                      </div>
                    </div>

                    <h3 className="text-lg font-bold text-gray-800 mb-2 leading-tight">
                      {article.judul}
                    </h3>

                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {truncate(article.konten.replace(/<[^>]+>/g, ""), 120)}
                    </p>

                    <Link to={`/berita/${article.id}`}>
                      <Button
                        variant="ghost"
                        className="p-0 text-islamic-green hover:text-islamic-green/80"
                      >
                        Baca Selengkapnya
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </article>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center gap-4">
              <Button
                variant="outline"
                disabled={page <= 1}
                onClick={() => setPage((p) => Math.max(p - 1, 1))}
              >
                ← Sebelumnya
              </Button>
              <Button
                variant="outline"
                disabled={page >= lastPage}
                onClick={() => setPage((p) => p + 1)}
              >
                Selanjutnya →
              </Button>
            </div>
          </div>
        </section>
      )}

      <Footer />
    </>
  );
}
