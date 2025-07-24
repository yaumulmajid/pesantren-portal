import { BookOpen, Users, Award, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const programs = [
  {
    title: "Tahfidz Al-Quran",
    description: "Program menghafal Al-Quran dari dasar hingga 30 juz dengan bimbingan intensif.",
    icon: BookOpen,
    features: ["Bimbingan harian", "Setoran hafalan", "Target 30 Juz"],
    duration: "6 Tahun",
    students: "150 Santri"
  },
  {
    title: "Kajian Kitab Kuning",
    description: "Mempelajari kitab-kitab klasik (turats) untuk pendalaman ilmu agama secara mendalam.",
    icon: Award,
    features: ["Bahasa Arab", "Fiqih, Nahwu, Sharaf", "Kitab klasik pilihan"],
    duration: "4 Tahun",
    students: "100 Santri"
  },
  {
    title: "PAUD / RA",
    description: "Pendidikan anak usia dini berbasis nilai-nilai Islam dan pembelajaran menyenangkan.",
    icon: Users,
    features: ["Tahsin & Doa Harian", "Motorik & Sosial", "Pembelajaran Aktif"],
    duration: "2 Tahun",
    students: "80 Santri"
  }
];

const Programs = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Program <span className="text-gradient">Unggulan</span>
          </h2>
          <div className="w-20 h-1 bg-green-500 rounded mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Program pilihan untuk membentuk generasi Qurani yang cerdas dan berakhlak mulia.
          </p>
        </div>

        {/* Program Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl p-8 shadow-md hover:shadow-xl transition-all"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6, ease: "easeOut" }}
            >
              <div className="bg-islamic-gradient p-4 rounded-lg inline-block mb-6">
                <program.icon className="h-8 w-8 text-white" />
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-2">{program.title}</h3>
              <p className="text-gray-600 mb-4">{program.description}</p>

              <ul className="mb-4 space-y-2 text-sm text-gray-700">
                {program.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="flex justify-between text-sm text-gray-500 mb-4">
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  {program.duration}
                </div>
                <div className="flex items-center">
                  <Users className="w-4 h-4 mr-1" />
                  {program.students}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link to="/programs">
            <Button className="bg-islamic-gradient hover:bg-green-600 text-white px-6 py-3 rounded-full">
              Lihat Semua Program
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Programs;
