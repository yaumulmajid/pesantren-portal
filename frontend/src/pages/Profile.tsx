import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Users, Target, Eye, Award, BookOpen, Heart } from "lucide-react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Profile = () => {
  const facilities = [
    "Masjid dengan kapasitas 1000 jamaah",
    "Asrama putra dan putri yang nyaman",
    "Perpustakaan dengan koleksi 10,000+ buku",
    "Laboratorium komputer dan bahasa",
    "Lapangan olahraga multifungsi",
    "Klinik kesehatan 24 jam"
  ];

  const leadership = [
    {
      name: "KH. Makmun Sidiq, S.Pd.I",
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
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Profil Pondok Pesantren Miftahul Amanah
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Mengenal lebih dekat lembaga pendidikan Islam yang telah berdedikasi
              selama lebih dari 20 tahun dalam mencetak generasi muslim berkualitas.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Sejarah */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Sejarah <span className="text-gradient">Berdirinya</span>
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Pondok Pesantren Miftahul Amanah didirikan pada tahun 1998 oleh KH. Makmun Sidiq, S.Pd.I,
                  dengan visi untuk menciptakan lembaga pendidikan Islam yang dapat menghasilkan
                  generasi muslim yang tidak hanya kuat dalam ilmu agama, tetapi juga mampu bersaing
                  di era modern.
                </p>
                <p>
                  Berawal dari sebuah musholla kecil dengan 15 santri pertama, kini telah berkembang
                  menjadi kompleks pesantren modern dengan lebih dari 150 santri dari berbagai daerah.
                </p>
                <p>
                  Miftahul Amanah telah meluluskan lebih dari 100 alumni yang tersebar di berbagai profesi.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="images/hero.png"
                alt="Sejarah"
                className="rounded-xl shadow-lg w-full h-80 object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-islamic-gold p-6 rounded-lg shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-800">1998</div>
                  <div className="text-sm text-gray-600">Tahun Berdiri</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Visi Misi */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Visi & <span className="text-gradient">Misi</span>
            </h2>
            <div className="w-20 h-1 bg-islamic-gradient rounded mx-auto mb-6"></div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <div className="flex items-center mb-6">
                <div className="bg-islamic-gradient p-3 rounded-lg mr-4">
                  <Eye className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Visi</h3>
              </div>
              <p className="text-gray-600 text-lg">
                "Menjadi lembaga pendidikan Islam terdepan yang menghasilkan generasi muslim
                berakhlak mulia, berpengetahuan luas, dan mampu berkontribusi positif."
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <div className="flex items-center mb-6">
                <div className="bg-islamic-gradient p-3 rounded-lg mr-4">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Misi</h3>
              </div>
              <ul className="space-y-3 text-gray-600">
                {[
                  "Menyelenggarakan pendidikan Islam yang holistik",
                  "Mengintegrasikan kurikulum agama & umum",
                  "Membentuk santri berakhlak dan pemimpin",
                  "Lingkungan belajar yang kondusif"
                ].map((misi, i) => (
                  <li key={i} className="flex items-start">
                    <div className="w-2 h-2 bg-islamic-green rounded-full mt-2 mr-3"></div>
                    {misi}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Fasilitas */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Fasilitas <span className="text-gradient">Lengkap</span>
            </h2>
            <div className="w-20 h-1 bg-islamic-gradient rounded mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Sarana modern dan nyaman untuk mendukung kegiatan santri setiap hari.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((facility, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 p-6 rounded-lg text-center shadow-md"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="bg-islamic-gradient p-3 rounded-full inline-block mb-4">
                  <BookOpen className="h-6 w-6 text-white" />
                </div>
                <p className="text-gray-700 font-medium">{facility}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Kepemimpinan */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Pimpinan <span className="text-gradient">Pesantren</span>
            </h2>
            <div className="w-20 h-1 bg-islamic-gradient rounded mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Para pemimpin berpengalaman yang berdedikasi untuk kemajuan pendidikan Islam.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leadership.map((leader, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-white rounded-xl p-8 shadow-lg text-center"
              >
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-24 h-24 rounded-full mx-auto mb-6 object-cover"
                />
                <h3 className="text-xl font-bold text-gray-800 mb-2">{leader.name}</h3>
                <p className="text-islamic-green font-semibold mb-4">{leader.position}</p>
                <p className="text-gray-600 text-sm">{leader.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-islamic-gradient text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Bergabunglah dengan Keluarga Miftahul Amanah
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Rasakan sendiri kualitas pendidikan dan lingkungan yang mendukung perkembangan spiritual dan akademik.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-islamic-gold hover:bg-yellow-600 text-gray-900 font-semibold px-8 py-3 rounded-full transition-colors">
                Daftar Sekarang
              </button>
              <button className="border border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-full transition-colors">
                Kunjungi Pesantren
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Profile;
