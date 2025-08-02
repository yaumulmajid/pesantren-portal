import { useEffect, useState } from "react";
import { BookOpen, Users, Award, Clock, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// Helper untuk menentukan icon berdasarkan title
const getProgramIcon = (title: string) => {
  if (title.toLowerCase().includes("tahfidz")) return BookOpen;
  if (title.toLowerCase().includes("kitab")) return Award;
  if (title.toLowerCase().includes("paud") || title.toLowerCase().includes("ra")) return Users;
  return GraduationCap; // default icon jika tidak cocok
};

const Programs = () => {
  const [programs, setPrograms] = useState([]);

  const fetchPrograms = async () => {
    try {
      const res = await fetch("/api/v2/programs");
      const json = await res.json();
      if (json.status === "success") {
        setPrograms(json.data);
      }
    } catch (error) {
      console.error("Failed to fetch programs:", error);
    }
  };

  useEffect(() => {
    fetchPrograms();
  }, []);

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
            Program <span className="text-gradient">Unggulan</span>
          </h2>
          <div className="w-16 h-1 bg-green-500 rounded mx-auto mb-4"></div>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Program pilihan untuk membentuk generasi Qurani yang cerdas dan berakhlak mulia.
          </p>
        </div>

        {/* Program Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {programs.map((program: any, index: number) => {
            const Icon = getProgramIcon(program.title);

            return (
              <motion.div
                key={index}
                className="bg-white border border-gray-200 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6, ease: "easeOut" }}
              >
                <div className="bg-islamic-gradient p-3 rounded-lg inline-block mb-4">
                  <Icon className="h-6 w-6 text-white" />
                </div>

                <h3 className="text-lg font-semibold text-gray-800 mb-2">{program.title}</h3>
                <p className="text-gray-600 mb-3 text-sm">{program.description}</p>

                <ul className="mb-3 space-y-1 text-sm text-gray-700">
                  {program.features.map((feature: string, i: number) => (
                    <li key={i} className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2 flex-shrink-0"></span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="flex justify-between text-xs text-gray-500">
                  <div className="flex items-center">
                    <Clock className="w-3 h-3 mr-1" />
                    {program.duration}
                  </div>
                  <div className="flex items-center">
                    <Users className="w-3 h-3 mr-1" />
                    {program.students}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link to="/programs">
            <Button className="bg-islamic-gradient hover:bg-green-600 text-white px-5 py-2 rounded-full text-sm">
              Lihat Semua Program
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Programs;