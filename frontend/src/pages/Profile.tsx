"use client";

import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Target, Eye, BookOpen } from "lucide-react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Profile = () => {
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    fetch("/api/profile")
      .then((res) => res.json())
      .then((json) => {
        if (json.status === "success") {
          setProfileData(json.data);
        }
      });
  }, []);

  if (!profileData) {
    return (
      <div className="flex items-center justify-center h-screen bg-white">
        <div className="flex flex-col items-center space-y-4">
          <div className="w-16 h-16 rounded-full border-4 border-t-transparent border-r-yellow-500 border-b-green-600 border-l-yellow-500 animate-spin"></div>
          <p className="text-gray-600 text-sm font-semibold">Memuat profile...</p>
        </div>
      </div>
    );
  }

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
            className="text-center max-w-3xl md:max-w-4xl mx-auto"
          >
            <h1 className="text-2xl md:text-3xl font-semibold mb-4 tracking-tight">
              {profileData.judul}
            </h1>
            <p className="text-sm md:text-base text-gray-100 leading-relaxed">
              {profileData.deskripsi}
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
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Sejarah <span className="text-gradient">Berdirinya</span>
              </h2>
              <div className="space-y-4 text-gray-600 text-sm leading-relaxed whitespace-pre-line">
                {profileData.sejarah}
              </div>
            </div>
            <div className="relative">
              <img
                src={`/storage/${profileData.gambar_sejarah}`}
                alt="Sejarah"
                className="rounded-xl shadow-lg w-full h-80 object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-islamic-gold p-6 rounded-lg shadow-lg">
                <div className="text-center">
                  <div className="text-xl font-bold text-gray-800">
                    {profileData.tahun_berdiri}
                  </div>
                  <div className="text-xs text-gray-600">Tahun Berdiri</div>
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
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
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
                  <Eye className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">Visi</h3>
              </div>
              <p className="text-gray-600 text-sm">{profileData.visi}</p>
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
                  <Target className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">Misi</h3>
              </div>
              <ul className="space-y-3 text-gray-600 text-sm">
                {profileData.misi.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <div className="w-2 h-2 bg-islamic-green rounded-full mt-2 mr-3"></div>
                    {item.misi_item}
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
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              Fasilitas <span className="text-gradient">Lengkap</span>
            </h2>
            <div className="w-20 h-1 bg-islamic-gradient rounded mx-auto mb-6"></div>
            <p className="text-sm text-gray-600 max-w-2xl mx-auto">
              Sarana modern dan nyaman untuk mendukung kegiatan santri setiap hari.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {profileData.fasilitas.map((item, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 p-6 rounded-lg text-center shadow-md"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="bg-islamic-gradient p-3 rounded-full inline-block mb-4">
                  <BookOpen className="h-5 w-5 text-white" />
                </div>
                <p className="text-gray-700 text-sm font-medium">{item.nama}</p>
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
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              Pimpinan <span className="text-gradient">Pesantren</span>
            </h2>
            <div className="w-20 h-1 bg-islamic-gradient rounded mx-auto mb-6"></div>
            <p className="text-sm text-gray-600 max-w-2xl mx-auto">
              Para pemimpin berpengalaman yang berdedikasi untuk kemajuan pendidikan Islam.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {profileData.pimpinan.map((p, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-white rounded-xl p-8 shadow-lg text-center"
              >
                <img
                  src={`/storage/${p.foto}`}
                  alt={p.nama}
                  className="w-24 h-24 rounded-full mx-auto mb-6 object-cover"
                />
                <h3 className="text-lg font-bold text-gray-800 mb-2">{p.nama}</h3>
                <p className="text-islamic-green font-semibold mb-4 text-sm">{p.jabatan}</p>
                <p className="text-gray-600 text-xs">{p.deskripsi}</p>
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
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Bergabunglah dengan Keluarga Miftahul Amanah
            </h2>
            <p className="text-base text-gray-200 mb-8 max-w-2xl mx-auto">
              Rasakan sendiri kualitas pendidikan dan lingkungan yang mendukung perkembangan spiritual dan akademik.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-islamic-gold hover:bg-yellow-600 text-gray-900 font-semibold px-8 py-3 rounded-full transition-colors text-sm">
                Daftar Sekarang
              </button>
              <button className="border border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-full transition-colors text-sm">
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