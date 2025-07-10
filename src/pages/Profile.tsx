
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Users, Target, Eye, Award, BookOpen, Heart } from "lucide-react";

const Profile = () => {
  const facilities = [
    "Masjid dengan kapasitas 1000 jamaah",
    "Asrama putra dan putri yang nyaman", 
    "Perpustakaan dengan koleksi 10,000+ buku",
    "Laboratorium komputer dan bahasa",
    "Lapangan olahraga multifungsi",
    "Koperasi dan kantin sehat",
    "Klinik kesehatan 24 jam",
    "Area pertanian dan peternakan"
  ];

  const leadership = [
    {
      name: "KH. Dr. Abdullah Rahman",
      position: "Pengasuh/Pimpinan Pondok",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      description: "Lulusan Al-Azhar Cairo dengan pengalaman 30+ tahun dalam dunia pendidikan Islam"
    },
    {
      name: "Ustadz Dr. Muhammad Hakim",
      position: "Direktur Pendidikan",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face", 
      description: "Doktor Pendidikan Islam dari UIN Jakarta, spesialis kurikulum terpadu"
    },
    {
      name: "Ustadzah Dra. Siti Khadijah",
      position: "Kepala Bagian Putri",
      image: "https://images.unsplash.com/photo-1494790108755-2616b332c3d8?w=300&h=300&fit=crop&crop=face",
      description: "Magister Pendidikan dengan fokus pada pengembangan karakter santri putri"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-islamic-gradient text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Profil Pondok Pesantren Al-Hidayah
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Mengenal lebih dekat lembaga pendidikan Islam yang telah berdedikasi 
              selama lebih dari 25 tahun dalam mencetak generasi muslim berkualitas.
            </p>
          </div>
        </div>
      </section>

      {/* Sejarah */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Sejarah <span className="text-gradient">Berdirinya</span>
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Pondok Pesantren Al-Hidayah didirikan pada tahun 1998 oleh KH. Dr. Abdullah Rahman 
                  dengan visi untuk menciptakan lembaga pendidikan Islam yang dapat menghasilkan 
                  generasi muslim yang tidak hanya kuat dalam ilmu agama, tetapi juga mampu bersaing 
                  di era modern.
                </p>
                <p>
                  Berawal dari sebuah musholla kecil dengan 15 santri pertama, Al-Hidayah kini telah 
                  berkembang menjadi kompleks pesantren modern dengan lebih dari 650 santri dari 
                  berbagai daerah di Indonesia.
                </p>
                <p>
                  Sepanjang perjalanannya, Al-Hidayah telah meluluskan lebih dari 2.500 alumni 
                  yang tersebar di berbagai profesi dan berkontribusi positif bagi bangsa dan agama.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1466442929976-97f336a657be?w=600&h=400&fit=crop"
                alt="Sejarah Al-Hidayah"
                className="rounded-xl shadow-lg w-full h-80 object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-islamic-gold p-6 rounded-lg shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-800">1998</div>
                  <div className="text-sm text-gray-600">Tahun Berdiri</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visi Misi */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Visi & <span className="text-gradient">Misi</span>
            </h2>
            <div className="w-20 h-1 bg-islamic-gradient rounded mx-auto mb-6"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Visi */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-6">
                <div className="bg-islamic-gradient p-3 rounded-lg mr-4">
                  <Eye className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Visi</h3>
              </div>
              <p className="text-gray-600 leading-relaxed text-lg">
                "Menjadi lembaga pendidikan Islam terdepan yang menghasilkan generasi muslim 
                berakhlak mulia, berpengetahuan luas, dan mampu berkontribusi positif bagi 
                kemajuan bangsa dan agama."
              </p>
            </div>

            {/* Misi */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-6">
                <div className="bg-islamic-gradient p-3 rounded-lg mr-4">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Misi</h3>
              </div>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-islamic-green rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  Menyelenggarakan pendidikan Islam yang holistik dan berkarakter
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-islamic-green rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  Mengintegrasikan pendidikan agama dan umum dengan teknologi modern
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-islamic-green rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  Membentuk santri yang berakhlak mulia dan berjiwa kepemimpinan
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-islamic-green rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  Menciptakan lingkungan belajar yang kondusif dan inspiratif
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Fasilitas */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Fasilitas <span className="text-gradient">Lengkap</span>
            </h2>
            <div className="w-20 h-1 bg-islamic-gradient rounded mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Fasilitas modern dan lengkap untuk mendukung kegiatan belajar mengajar 
              dan kehidupan sehari-hari santri.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {facilities.map((facility, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg hover-lift text-center">
                <div className="bg-islamic-gradient p-3 rounded-full inline-block mb-4">
                  <BookOpen className="h-6 w-6 text-white" />
                </div>
                <p className="text-gray-700 font-medium">{facility}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kepemimpinan */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Pimpinan <span className="text-gradient">Pesantren</span>
            </h2>
            <div className="w-20 h-1 bg-islamic-gradient rounded mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Para pemimpin berpengalaman yang berdedikasi untuk kemajuan pendidikan Islam.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leadership.map((leader, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover-lift text-center">
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-24 h-24 rounded-full mx-auto mb-6 object-cover"
                />
                <h3 className="text-xl font-bold text-gray-800 mb-2">{leader.name}</h3>
                <p className="text-islamic-green font-semibold mb-4">{leader.position}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{leader.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-islamic-gradient text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Bergabunglah dengan Keluarga Al-Hidayah
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Rasakan sendiri kualitas pendidikan dan lingkungan yang mendukung 
            perkembangan spiritual dan akademik putra-putri Anda.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-islamic-gold hover:bg-yellow-600 text-gray-900 font-semibold px-8 py-3 rounded-full transition-colors">
              Daftar Sekarang
            </button>  
            <button className="border border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-full transition-colors">
              Kunjungi Pesantren
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Profile;
