import { Users, BookOpen, Award, GraduationCap } from "lucide-react";
import { useEffect, useState, useRef } from "react";

const Stats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({
    students: 0,
    programs: 0,
    graduates: 0,
    achievements: 0
  });
  
  const sectionRef = useRef<HTMLDivElement>(null);

  const stats = [
    {
      icon: Users,
      number: 650,
      label: "Santri Aktif",
      description: "Santri dari berbagai daerah"
    },
    {
      icon: BookOpen,
      number: 15,
      label: "Program Unggulan",
      description: "Program pendidikan terpadu"
    },
    {
      icon: GraduationCap,
      number: 2500,
      label: "Alumni",
      description: "Tersebar di seluruh Indonesia"
    },
    {
      icon: Award,
      number: 85,
      label: "Prestasi",
      description: "Penghargaan tingkat nasional"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (isVisible) {
      const animateCounters = () => {
        const duration = 2000;
        const steps = 60;
        const interval = duration / steps;

        let step = 0;
        const timer = setInterval(() => {
          step++;
          const progress = step / steps;
          
          setCounts({
            students: Math.floor(50 * progress),
            programs: Math.floor(3 * progress),
            graduates: Math.floor(100 * progress),
            achievements: Math.floor(10 * progress)
          });

          if (step >= steps) {
            clearInterval(timer);
            setCounts({
              students: 50,
              programs: 3,
              graduates: 100,
              achievements: 10
            });
          }
        }, interval);
      };

      animateCounters();
    }
  }, [isVisible]);

  return (
    <section ref={sectionRef} className="py-12 bg-islamic-gradient">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Prestasi & Pencapaian
          </h2>
          <div className="w-16 h-1 bg-islamic-gold rounded mx-auto mb-4"></div>
          <p className="text-base text-gray-200 max-w-2xl mx-auto">
            Berkat dukungan dan doa dari berbagai pihak, Miftahul Amanah terus berkembang 
            dan menghasilkan prestasi membanggakan.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const countKey = Object.keys(counts)[index] as keyof typeof counts;
            return (
              <div key={index} className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6 hover-lift">
                <div className="bg-islamic-gold p-3 rounded-full inline-block mb-4">
                  <stat.icon className="h-6 w-6 text-gray-800" />
                </div>
                
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {counts[countKey].toLocaleString()}
                  {index === 2 && "+"}
                </div>
                
                <h3 className="text-lg font-semibold text-islamic-gold mb-1">
                  {stat.label}
                </h3>
                
                <p className="text-gray-200 text-xs">
                  {stat.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-10 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 max-w-4xl mx-auto">
            <h3 className="text-xl font-bold text-white mb-3">
              Komitmen Kami Terhadap Kualitas
            </h3>
            <p className="text-gray-200 leading-relaxed text-sm">
              Setiap angka di atas mewakili dedikasi kami dalam memberikan pendidikan terbaik. 
              Dengan dukungan tenaga pengajar berkualitas, fasilitas modern, dan kurikulum yang 
              terintegrasi, kami terus berupaya mencetak generasi muslim yang unggul dan berakhlak mulia.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;