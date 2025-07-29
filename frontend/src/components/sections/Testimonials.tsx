import { useEffect, useState } from "react";
import { Star, Quote } from "lucide-react";


const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [pagination, setPagination] = useState({ current_page: 1, last_page: 1,   next_page_url: null, prev_page_url: null });

  const fetchTestimonials = async (page = 1) => {
    try {
      const res = await fetch(`/api/testimonials?page=${page}`);
      const json = await res.json();
      if (json.status === "success") {
        setTestimonials(json.data.data);
        setPagination({
          current_page: json.data.current_page,
          last_page: json.data.last_page,
          next_page_url: json.data.next_page_url,
          prev_page_url: json.data.prev_page_url,
        });
      }
    } catch (error) {
      console.error("Failed to fetch testimonials:", error);
    }
  };

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const goToPage = (page) => {
    if (page < 1 || page > pagination.last_page) return;
    fetchTestimonials(page);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Testimoni <span className="text-gradient">Alumni & Wali Santri</span>
          </h2>
          <div className="w-20 h-1 bg-islamic-gradient rounded mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Dengarkan pengalaman mereka yang telah merasakan langsung kualitas
            pendidikan di Pondok Pesantren Miftahul Amanah.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={testimonial.id || index} className="bg-white rounded-xl p-8 shadow-lg hover-lift relative">
              <div className="absolute top-4 right-4 text-islamic-green opacity-20">
                <Quote className="h-8 w-8" />
              </div>
              <div className="flex space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-islamic-gold fill-current" />
                ))}
              </div>
              <p className="text-gray-600 leading-relaxed mb-6 italic">
                {testimonial.testimoni.replace(/\"/g, '"')}
              </p>
              <div className="flex items-center space-x-4">
                <img
                  src={`storage/${testimonial.foto}`}
                  alt={testimonial.nama}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-gray-800">{testimonial.nama}</h4>
                  <p className="text-sm text-gray-500">
                    {testimonial.angkatan || '-'}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-10 space-x-2 flex-wrap">
          <button
            onClick={() => goToPage(pagination.current_page - 1)}
            disabled={pagination.current_page === 1}
            className="px-4 py-2 rounded-full border text-sm text-gray-700 hover:bg-gray-100 disabled:opacity-50"
          >
            Sebelumnya
          </button>

          {[...Array(pagination.last_page)].map((_, i) => (
            <button
              key={i + 1}
              onClick={() => goToPage(i + 1)}
              className={`px-4 py-2 rounded-full text-sm border ${
                pagination.current_page === i + 1
                  ? 'bg-islamic-gradient text-white'
                  : 'hover:bg-gray-100 text-gray-700'
              }`}
            >
              {i + 1}
            </button>
          ))}

          <button
            onClick={() => goToPage(pagination.current_page + 1)}
            disabled={pagination.current_page === pagination.last_page}
            className="px-4 py-2 rounded-full border text-sm text-gray-700 hover:bg-gray-100 disabled:opacity-50"
          >
            Selanjutnya
          </button>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <div className="bg-islamic-gradient rounded-xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Bergabunglah dengan Keluarga Besar Miftahul Amanah
            </h3>
            <p className="text-gray-200 mb-6">
              Rasakan sendiri pengalaman pendidikan yang berkualitas dan lingkungan
              yang mendukung perkembangan spiritual dan akademik putra-putri Anda.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-islamic-gold hover:bg-yellow-600 text-gray-900 font-semibold px-6 py-3 rounded-full transition-colors">
                Daftar Sekarang
              </button>
              <button className="border border-white text-white hover:bg-white hover:text-gray-900 px-6 py-3 rounded-full transition-colors">
                Kunjungi Pesantren
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
