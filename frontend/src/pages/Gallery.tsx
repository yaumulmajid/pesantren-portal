import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Camera, Play, Users, BookOpen, Award, Building, X } from "lucide-react";
import { useEffect, useState } from "react";


const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [galleryItems, setGalleryItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedItem, setSelectedItem] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const categories = [
    { id: "all", name: "Semua", icon: Camera },
    { id: "Fasilitas", name: "Fasilitas", icon: Building },
    { id: "Kegiatan", name: "Kegiatan", icon: Users },
    { id: "Pembelajaran", name: "Pembelajaran", icon: BookOpen },
    { id: "Prestasi", name: "Prestasi", icon: Award },
  ];

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const res = await fetch("/api/galleries");
        const json = await res.json();
        setGalleryItems(json.data.data);
      } catch (error) {
        console.error("Gagal memuat galeri:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchGallery();
  }, []);

  const filteredItems =
    activeCategory === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  const openModal = (item) => {
    setSelectedItem(item);
    setShowModal(true);
  };

  const closeModal = () => {
    setSelectedItem(null);
    setShowModal(false);
  };

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-20 pb-10 bg-islamic-gradient text-white">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <h1 className="text-2xl md:text-3xl font-semibold mb-3 tracking-tight">
            Galeri Miftahul Amanah
          </h1>
          <p className="text-base text-gray-100 leading-relaxed">
            Lihat berbagai kegiatan, fasilitas, dan momen berharga di 
            Pondok Pesantren Miftahul Amanah melalui koleksi foto dan video kami.
          </p>
        </div>
      </section>


      {/* Filter Buttons */}
      <section className="py-6 bg-white shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center px-4 py-2 rounded-full font-medium transition-all duration-300 text-sm ${
                  activeCategory === category.id
                    ? "bg-islamic-gradient text-white shadow-lg scale-105"
                    : "bg-gray-100 text-gray-700 hover:bg-islamic-green hover:text-white"
                }`}
              >
                <category.icon className="h-3 w-3 mr-1.5" />
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          {loading ? (
          <div className="flex items-center justify-center h-screen bg-white">
            <div className="flex flex-col items-center space-y-4">
              <div className="w-16 h-16 rounded-full border-4 border-t-transparent border-r-yellow-500 border-b-green-600 border-l-yellow-500 animate-spin"></div>
              <p className="text-gray-600 text-sm font-semibold">Memuat gallery...</p>
            </div>
          </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {filteredItems.length === 0 ? (
                <div className="col-span-full text-center text-gray-500 text-sm">
                  Tidak ada galeri untuk kategori ini.
                </div>
              ) : (
                filteredItems.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => openModal(item)}
                    className="group relative bg-white rounded-lg shadow-md overflow-hidden hover-lift cursor-pointer"
                  >
                    <div className="relative h-64 bg-gray-200">
                      <img
                        src={`/storage/${item.thumbnail}`}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      {item.type === "Video" && (
                        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                          <div className="bg-white/90 backdrop-blur-sm p-3 rounded-full group-hover:scale-110 transition-transform duration-300">
                            <Play className="h-6 w-6 text-islamic-green" />
                          </div>
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-3 left-3 right-3">
                          <h3 className="text-white font-semibold text-base mb-1">{item.title}</h3>
                          <p className="text-gray-200 text-xs">{item.description}</p>
                        </div>
                      </div>
                      <div className="absolute top-3 left-3">
                        <span className="bg-islamic-green text-white px-2 py-1 rounded-full text-xs font-medium">
                          {item.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-3">
                      <h3 className="font-semibold text-gray-800 mb-1 text-sm">{item.title}</h3>
                      <p className="text-gray-600 text-xs line-clamp-2">{item.description}</p>
                    </div>
                  </div>
                ))
              )}
            </div>
          )}
        </div>
      </section>

{showModal && selectedItem && (
  <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center px-4">
    <div className="relative bg-white w-full max-w-3xl p-4 rounded-xl shadow-xl border border-green-100 animate-fadeIn">

      {/* Tombol X */}
      <button
        onClick={closeModal}
        className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 transition hover:scale-110"
      >
        <X className="w-5 h-5" />
      </button>

      {/* Gambar - full dan tidak terpotong */}
      <img
        src={`/storage/${selectedItem.thumbnail}`}
        alt={selectedItem.title}
        className="w-full h-[400px] object-contain rounded-lg mb-4 bg-gray-50"
      />

      <h3 className="text-2xl font-bold text-islamic-green mb-2">
        {selectedItem.title}
      </h3>
      <p className="text-gray-600 mb-3 text-sm">{selectedItem.description}</p>

      {selectedItem.type === "Video" && selectedItem.video_url && (
        <a
          href={selectedItem.video_url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-islamic-gradient text-white px-4 py-2 rounded-full hover:opacity-90 transition text-xs"
        >
          <Play className="w-4 h-4" />
          Kunjungi Video
        </a>
      )}
    </div>
  </div>
)}



      {/* CTA */}
      <section className="py-16 bg-islamic-gradient text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Ingin Melihat Lebih Dekat?</h2>
            <p className="text-lg text-gray-200 mb-6 leading-relaxed">
              Ikuti virtual tour pesantren kami atau kunjungi langsung untuk merasakan 
              atmosfer belajar yang nyaman dan kondusif di Miftahul Amanah.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button className="bg-islamic-gold hover:bg-yellow-600 text-gray-900 font-semibold px-6 py-2.5 rounded-full transition-colors text-sm">
                <Play className="inline-block mr-2 h-4 w-4" />
                Virtual Tour
              </button>
              <button className="border border-white text-white hover:bg-white hover:text-gray-900 px-6 py-2.5 rounded-full transition-colors text-sm">
                <Camera className="inline-block mr-2 h-4 w-4" />
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