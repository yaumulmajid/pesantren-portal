import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Calendar, User, ArrowLeft } from "lucide-react";
import DOMPurify from "dompurify";
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
export default function BeritaDetail() {
  const { id } = useParams();
  const [berita, setBerita] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`/api/berita/${id}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) setBerita(data.data);
      })
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return (
      <>
        <Header />
        <div className="flex items-center justify-center h-96 bg-white">
          <div className="flex flex-col items-center space-y-3">
            <div className="w-12 h-12 rounded-full border-3 border-t-transparent border-r-yellow-500 border-b-green-600 border-l-yellow-500 animate-spin"></div>
            <p className="text-gray-600 font-medium text-sm">Memuat berita...</p>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  if (!berita) return null;

  return (
    <>
      <Header />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="mb-4 rounded-lg overflow-hidden">
            <img
              src={`/storage/${berita.thumbnail}`}
              alt={berita.judul}
              className="w-full object-cover max-h-[320px] mx-auto rounded-lg shadow-sm"
            />
          </div>

          <div className="flex flex-wrap items-center text-xs text-gray-500 mb-3 space-x-3">
            <div className="flex items-center">
              <Calendar className="h-3 w-3 mr-1" />
              {formatTanggalIndo(berita.tanggal)}
            </div>
            <div className="flex items-center">
              <User className="h-3 w-3 mr-1" />
              {berita.penulis}
            </div>
            <div>
              <span className="bg-islamic-green text-white px-2 py-0.5 rounded-full text-xs">
                {berita.kategori}
              </span>
            </div>
          </div>

          <h1 className="text-2xl font-bold text-gray-800 mb-3">
            {berita.judul}
          </h1>

          <div
            className="prose max-w-none text-gray-700 text-sm"
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(berita.konten || ""),
            }}
          ></div>

          {/* Link kembali di bawah konten */}
          <div className="mt-8 text-center">
            <Link
              to="/berita"
              className="inline-flex items-center text-xs text-islamic-green hover:underline"
            >
              <ArrowLeft className="w-3 h-3 mr-1" /> Kembali ke Berita
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}