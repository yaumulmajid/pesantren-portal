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
        <div className="flex items-center justify-center h-screen bg-white">
          <div className="flex flex-col items-center space-y-4">
            <div className="w-16 h-16 rounded-full border-4 border-t-transparent border-r-yellow-500 border-b-green-600 border-l-yellow-500 animate-spin"></div>
            <p className="text-gray-600 font-semibold">Memuat berita...</p>
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

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="mb-6 rounded-lg overflow-hidden">
            <img
              src={`/storage/${berita.thumbnail}`}
              alt={berita.judul}
              className="w-full object-cover max-h-[400px] mx-auto rounded-lg shadow-md"
            />
          </div>

          <div className="flex flex-wrap items-center text-sm text-gray-500 mb-4 space-x-4">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-1" />
              {formatTanggalIndo(berita.tanggal)}
            </div>
            <div className="flex items-center">
              <User className="h-4 w-4 mr-1" />
              {berita.penulis}
            </div>
            <div>
              <span className="bg-islamic-green text-white px-2 py-0.5 rounded-full text-xs">
                {berita.kategori}
              </span>
            </div>
          </div>

          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            {berita.judul}
          </h1>

          <div
            className="prose max-w-none text-gray-700"
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(berita.konten || ""),
            }}
          ></div>

          {/* Link kembali di bawah konten */}
          <div className="mt-12 text-center">
            <Link
              to="/berita"
              className="inline-flex items-center text-sm text-islamic-green hover:underline"
            >
              <ArrowLeft className="w-4 h-4 mr-1" /> Kembali ke Berita
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
