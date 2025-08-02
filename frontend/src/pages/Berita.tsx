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
          <p className="text-gray-600 text-sm font-semibold">Memuat berita...</p>
        </div>
      </div>
      ) : (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-3">
                Semua <span className="text-gradient">Berita & Kegiatan</span>
              </h1>
              <div className="w-16 h-1 bg-islamic-gradient rounded mx-auto mb-4"></div>
              <p className="text-sm md:text-base text-gray-600 max-w-xl mx-auto leading-relaxed">
                Dapatkan informasi terkini seputar kegiatan, prestasi, serta aktivitas santri dan civitas Pondok Pesantren Miftahul Amanah.
              </p>
            </div>


            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-8">
              {news.map((article, index) => (
                <article
                  key={index}
                  className="bg-white rounded-lg shadow-sm overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                >
                  <div className="relative h-36 bg-gray-100 flex items-center justify-center">
                    <img
                      src={`/storage/${article.thumbnail}`}
                      alt={article.judul}
                      className="max-h-full max-w-full object-contain"
                    />
                    <div className="absolute top-2 left-2">
                      <span className="bg-islamic-green text-white px-2 py-1 rounded-full text-xs font-medium">
                        {article.kategori}
                      </span>
                    </div>
                  </div>

                  <div className="p-4">
                    <div className="flex items-center text-xs text-gray-500 mb-2 space-x-3">
                      <div className="flex items-center">
                        <Calendar className="h-3 w-3 mr-1" />
                        {formatTanggalIndo(article.tanggal)}
                      </div>
                      <div className="flex items-center">
                        <User className="h-3 w-3 mr-1" />
                        {article.penulis}
                      </div>
                    </div>

                    <h3 className="text-base font-bold text-gray-800 mb-2 leading-tight">
                      {article.judul}
                    </h3>

                    <p className="text-gray-600 text-xs leading-relaxed mb-3">
                      {truncate(article.konten.replace(/<[^>]+>/g, ""), 100)}
                    </p>

                    <Link to={`/berita/${article.id}`}>
                      <Button
                        variant="ghost"
                        className="p-0 text-islamic-green hover:text-islamic-green/80 text-sm"
                      >
                        Baca Selengkapnya
                        <ArrowRight className="ml-2 h-3 w-3" />
                      </Button>
                    </Link>
                  </div>
                </article>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center gap-3">
              <Button
                variant="outline"
                disabled={page <= 1}
                onClick={() => setPage((p) => Math.max(p - 1, 1))}
                className="text-sm px-4 py-2"
              >
                ← Sebelumnya
              </Button>
              <Button
                variant="outline"
                disabled={page >= lastPage}
                onClick={() => setPage((p) => p + 1)}
                className="text-sm px-4 py-2"
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