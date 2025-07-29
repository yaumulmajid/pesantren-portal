"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Users, Clock, Star, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.2 },
  }),
};

interface Program {
  id: number;
  judul: string;
  deskripsi: string;
  kategori_usia: string;
  jumlah_santri: string;
  kategori: string | null;
  gambar: string;
  keunggulan: { value: string }[];
  jadwal: { value: string }[];
}

const Programs = () => {
  const [programs, setPrograms] = useState<Program[] | null>(null);

  useEffect(() => {
    fetch("/api/programs")
      .then((res) => res.json())
      .then((json) => {
        if (json.status === "success") {
          setPrograms(json.data);
        }
      });
  }, []);

  return (
    <div className="min-h-screen font-sans bg-white text-gray-800">
      <Header />

      {/* Hero */}
      <section className="pt-24 pb-16 bg-islamic-gradient from-islamic-green to-green-200 text-white text-center">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.h1
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            custom={0}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Program Pendidikan Unggulan
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            custom={1}
            className="text-lg text-white/80"
          >
            Menyediakan pendidikan Islam komprehensif dari usia dini hingga dewasa, berbasis Al-Qur’an dan kitab turats.
          </motion.p>
        </div>
      </section>

      {/* Loading State */}
      {!programs && (
        <div className="flex items-center justify-center h-screen bg-white">
          <div className="flex flex-col items-center space-y-4">
            <div className="w-16 h-16 rounded-full border-4 border-t-transparent border-r-yellow-500 border-b-green-600 border-l-yellow-500 animate-spin"></div>
            <p className="text-gray-600 font-semibold">Memuat data program...</p>
          </div>
        </div>
      )}

      {/* Program List */}
      {programs &&
        programs.map((program, index) => (
          <section
            key={program.id}
            className={`py-20 ${index % 2 === 0 ? "bg-white" : "bg-gray-100"}`}
          >
            <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Gambar */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                custom={0}
                className={`order-1 ${index % 2 !== 0 ? "lg:order-2" : "lg:order-1"}`}
              >
                <img
                  src={`/storage/${program.gambar}`}
                  alt={program.judul}
                  className="rounded-xl shadow-xl w-full max-w-[500px] mx-auto object-cover border"
                />
              </motion.div>

              {/* Konten */}
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  custom={1}
                  className={`order-2 ${index % 2 !== 0 ? "lg:order-1" : "lg:order-2"} space-y-6`}
                >
                <h2 className="text-3xl font-semibold">{program.judul}</h2>
                <p className="text-gray-600">{program.deskripsi}</p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <InfoBox icon={<Clock />} label={program.kategori_usia} />
                  <InfoBox icon={<Users />} label={`${program.jumlah_santri} Santri`} />
                  <InfoBox icon={<Star />} label={program.kategori} />
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-2">Keunggulan:</h4>
                  <ul className="list-none space-y-2 text-gray-700">
                    {program.keunggulan.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        {item.value}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-2">Jadwal:</h4>
                  <div className="bg-white border border-gray-200 p-4 rounded space-y-1 text-sm">
                    {program.jadwal.map((item, i) => (
                      <div key={i}>📌 {item.value}</div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
        ))}

      <Footer />
    </div>
  );
};

const InfoBox = ({ icon, label }: { icon: JSX.Element; label: string }) => (
  <div className="text-center bg-green-50 p-4 rounded shadow-sm">
    <div className="text-green-600 mb-1">{icon}</div>
    <div className="text-sm font-medium">{label}</div>
  </div>
);

export default Programs;
