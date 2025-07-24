import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Users, Clock, Star, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.2 },
  }),
};

const Programs = () => {
  const programs = [
    {
      title: "Program Tahfidz Al-Quran",
      description: "Program unggulan menghafal 30 Juz dengan metode intensif dan menyenangkan sejak usia dini.",
      image: "images/hero.png",
      duration: "6 Tahun",
      students: "150 Santri",
      level: "Dasar - Mahir",
      features: [
        "Ustadz Hafidz bersanad",
        "Metode setor & muraja'ah rutin",
        "Target hafalan 30 Juz",
        "Motivasi dan pelatihan akhlak Qurani"
      ],
      schedule: [
        "Pagi: Setoran hafalan & tahsin",
        "Sore: Muraja’ah & tilawah",
        "Malam: Kajian tafsir tematik"
      ]
    },
    {
      title: "Program Kitab Kuning Klasik",
      description: "Pengajian kitab-kitab turats klasik dengan pendekatan manhaji dan pemahaman mendalam.",
      image: "images/hero.png",
      duration: "6 Tahun",
      students: "100 Santri",
      level: "Menengah - Lanjutan",
      features: [
        "Penguasaan nahwu & sharaf",
        "Pengajian kutub turats (Tafsir, Fiqh, Ushul, dll)",
        "Diskusi dan bahtsul masail",
        "Pengajaran bahasa Arab klasik"
      ],
      schedule: [
        "Pagi: Nahwu & Ushul Fiqh",
        "Sore: Kitab Fiqh & Tafsir",
        "Malam: Diskusi Bahtsul Masail"
      ]
    },
    {
      title: "Program PAUD/RA",
      description: "Pendidikan usia dini berbasis nilai Islam dengan pendekatan bermain dan kasih sayang.",
      image: "images/hero.png",
      duration: "2 Tahun",
      students: "70 Anak",
      level: "Usia 4–6 Tahun",
      features: [
        "Pembiasaan ibadah sejak dini",
        "Metode Montessori Islami",
        "Belajar sambil bermain",
        "Penguatan karakter dan adab"
      ],
      schedule: [
        "Pagi: Hafalan doa & iqra",
        "Siang: Aktivitas motorik & seni",
        "Jumat: Parenting bersama orang tua"
      ]
    }
  ];

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

      {/* Program List */}
      {programs.map((program, index) => (
        <section
          key={index}
          className={`py-20 ${index % 2 === 0 ? "bg-white" : "bg-gray-100"}`}
        >
          <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              custom={0}
              className={`${index % 2 !== 0 ? "order-last lg:order-first" : ""}`}
            >
              <img
                src={program.image}
                alt={program.title}
                className="rounded-xl shadow-xl w-full h-80 object-cover border"
              />
            </motion.div>

            {/* Content */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              custom={1}
              className="space-y-6"
            >
              <h2 className="text-3xl font-semibold">{program.title}</h2>
              <p className="text-gray-600">{program.description}</p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <InfoBox icon={<Clock />} label={program.duration} />
                <InfoBox icon={<Users />} label={program.students} />
                <InfoBox icon={<Star />} label={program.level} />
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-2">Keunggulan:</h4>
                <ul className="list-none space-y-2 text-gray-700">
                  {program.features.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-2">Jadwal:</h4>
                <div className="bg-white border border-gray-200 p-4 rounded space-y-1 text-sm">
                  {program.schedule.map((item, i) => (
                    <div key={i}>📌 {item}</div>
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

// Komponen Kecil untuk Icon Info
const InfoBox = ({ icon, label }: { icon: JSX.Element; label: string }) => (
  <div className="text-center bg-green-50 p-4 rounded shadow-sm">
    <div className="text-green-600 mb-1">{icon}</div>
    <div className="text-sm font-medium">{label}</div>
  </div>
);

export default Programs;
