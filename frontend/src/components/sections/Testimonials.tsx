
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Ahmad Fauzi",
      role: "Alumni 2020 - Mahasiswa UI",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      content: "Al-Hidayah tidak hanya memberikan pendidikan agama yang kuat, tetapi juga mempersiapkan kami untuk bersaing di dunia akademik. Alhamdulillah sekarang saya bisa kuliah di kampus impian.",
      rating: 5
    },
    {
      name: "Siti Nurhaliza",
      role: "Wali Santri",
      image: "https://images.unsplash.com/photo-1494790108755-2616b332c3d8?w=150&h=150&fit=crop&crop=face", 
      content: "Perubahan akhlak anak saya sangat terlihat sejak mondok di Al-Hidayah. Para ustadz sangat perhatian dan sabar dalam mendidik. Saya sangat merekomendasikan pesantren ini.",
      rating: 5
    },
    {
      name: "Muhammad Rizki",
      role: "Alumni 2019 - Entrepreneur",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      content: "Program life skill di Al-Hidayah sangat membantu saya dalam berwirausaha. Selain ilmu agama, saya juga dibekali dengan keterampilan praktis yang sangat berguna.",
      rating: 5
    }
  ];

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
            <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover-lift relative">
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 text-islamic-green opacity-20">
                <Quote className="h-8 w-8" />
              </div>

              {/* Rating */}
              <div className="flex space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-islamic-gold fill-current" />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-600 leading-relaxed mb-6 italic">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center space-x-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <div className="bg-islamic-gradient rounded-xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Bergabunglah dengan Keluarga Besar Al-Hidayah
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
