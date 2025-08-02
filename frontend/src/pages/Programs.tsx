"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Users, Clock, Star, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.15 },
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
      <section className="pt-20 pb-12 bg-islamic-gradient from-islamic-green to-green-200 text-white text-center">
        <div className="container mx-auto px-4 max-w-2xl md:max-w-3xl">
          <motion.h1
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            custom={0}
            className="text-2xl md:text-3xl font-semibold mb-3 tracking-tight"
          >
            Program Pendidikan Unggulan
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            custom={1}
            className="text-sm md:text-base text-white/80 leading-relaxed"
          >
            Menyediakan pendidikan Islam komprehensif dari usia dini hingga dewasa, berbasis Al-Qur'an dan kitab turats.
          </motion.p>
        </div>
      </section>

      {/* Loading State */}
      {!programs && (
      <div className="flex items-center justify-center h-screen bg-white">
        <div className="flex flex-col items-center space-y-4">
          <div className="w-16 h-16 rounded-full border-4 border-t-transparent border-r-yellow-500 border-b-green-600 border-l-yellow-500 animate-spin"></div>
          <p className="text-gray-600 text-sm font-semibold">Memuat program...</p>
        </div>
      </div>
      )}

      {/* Program List */}
      {programs &&
        programs.map((program, index) => (
          <section
            key={program.id}
            className={`py-16 ${index % 2 === 0 ? "bg-white" : "bg-gray-100"}`}
          >
            <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
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
                  className="rounded-lg shadow-lg w-full h-[350px] md:h-[450px] object-cover border"
                />
              </motion.div>

                {/* Konten */}
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  custom={1}
                  className={`order-2 ${index % 2 !== 0 ? "lg:order-1" : "lg:order-2"} space-y-4`}
                >
                <h2 className="text-2xl font-semibold">{program.judul}</h2>
                <p className="text-gray-600 text-sm">{program.deskripsi}</p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <InfoBox icon={<Clock />} label={program.kategori_usia} />
                  <InfoBox icon={<Users />} label={`${program.jumlah_santri} Santri`} />
                  <InfoBox icon={<Star />} label={program.kategori} />
                </div>

                <div>
                  <h4 className="text-base font-semibold mb-2">Keunggulan:</h4>
                  <ul className="list-none space-y-1.5 text-gray-700">
                    {program.keunggulan.map((item, i) => (
                      <li key={i} className="flex items-start text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                        {item.value}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-base font-semibold mb-2">Jadwal:</h4>
                  <div className="bg-white border border-gray-200 p-3 rounded space-y-1 text-xs">
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
  <div className="text-center bg-green-50 p-3 rounded shadow-sm">
    <div className="text-green-600 mb-1">{icon}</div>
    <div className="text-xs font-medium">{label}</div>
  </div>
);

export default Programs;