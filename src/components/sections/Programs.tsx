
import { BookOpen, Users, Award, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Programs = () => {
  const programs = [
    {
      title: "Tahfidz Al-Quran",
      description: "Program menghafal Al-Quran dengan metode yang efektif dan menyenangkan",
      icon: BookOpen,
      features: ["Bimbingan Ustadz berpengalaman", "Metode tahfidz modern", "Target 30 Juz"],
      duration: "6 Tahun",
      students: "150 Santri"
    },
    {
      title: "Pendidikan Formal",
      description: "Pendidikan setara SMP dan SMA dengan kurikulum nasional terintegrasi",
      icon: Award,
      features: ["Kurikulum Nasional", "Pembelajaran Bilingual", "Lab Komputer"],
      duration: "6 Tahun",
      students: "300 Santri"
    },
    {
      title: "Keterampilan Life Skill",
      description: "Pelatihan keterampilan praktis untuk bekal hidup di masyarakat",
      icon: Users,
      features: ["Pertanian Organik", "Teknologi Informasi", "Kewirausahaan"],
      duration: "Ongoing",
      students: "200 Santri"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Program <span className="text-gradient">Unggulan</span>
          </h2>
          <div className="w-20 h-1 bg-islamic-gradient rounded mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Berbagai program pendidikan yang dirancang untuk membentuk santri yang berakhlak mulia, 
            berpengetahuan luas, dan memiliki keterampilan praktis.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {programs.map((program, index) => (
            <div key={index} className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-8 shadow-lg hover-lift border border-gray-100">
              {/* Icon */}
              <div className="bg-islamic-gradient p-4 rounded-lg inline-block mb-6">
                <program.icon className="h-8 w-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-800 mb-3">{program.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{program.description}</p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {program.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-islamic-green rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Stats */}
              <div className="flex justify-between items-center text-sm text-gray-500 mb-6">
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  {program.duration}
                </div>
                <div className="flex items-center">
                  <Users className="h-4 w-4 mr-1" />
                  {program.students}
                </div>
              </div>

              {/* CTA */}
              <Button variant="outline" className="w-full hover:bg-islamic-green hover:text-white transition-colors">
                Pelajari Lebih Lanjut
              </Button>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Button 
            asChild
            size="lg"
            className="bg-islamic-gradient hover:opacity-90 text-white px-8 py-4 rounded-full"
          >
            <Link to="/programs">
              Lihat Semua Program
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Programs;
