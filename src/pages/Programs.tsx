
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BookOpen, Users, Award, Clock, Star, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Programs = () => {
  const programs = [
    {
      title: "Program Tahfidz Al-Quran",
      description: "Program unggulan untuk menghafal Al-Quran dengan metode yang terbukti efektif",
      image: "https://images.unsplash.com/photo-1466442929976-97f336a657be?w=600&h=400&fit=crop",
      duration: "6 Tahun",
      students: "150 Santri",
      level: "Dasar - Mahir",
      features: [
        "Bimbingan Ustadz Hafidz berpengalaman",
        "Metode tahfidz modern dan menyenangkan",
        "Target hafalan 30 Juz",
        "Evaluasi berkala setiap bulan",
        "Program muraja'ah intensif"
      ],
      schedule: [
        "Ba'da Subuh - Ba'da Isya: Setoran hafalan",
        "Pagi: 08.00-10.00 - Tahsin dan Tajwid",
        "Sore: 15.00-17.00 - Muraja'ah",
        "Malam: 20.00-21.00 - Tilawah bersama"
      ]
    },
    {
      title: "Pendidikan Formal Terpadu",
      description: "Pendidikan setara SMP dan SMA dengan kurikulum nasional terintegrasi nilai Islam",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=400&fit=crop",
      duration: "6 Tahun",
      students: "300 Santri", 
      level: "SMP - SMA",
      features: [
        "Kurikulum Nasional + Kurikulum Pesantren",
        "Pembelajaran Bilingual (Arab-Inggris)",
        "Lab Komputer dan Internet",
        "Perpustakaan digital",
        "Ekstrakurikuler beragam"
      ],
      schedule: [
        "Pagi: 07.00-12.00 - Mata pelajaran umum",
        "Siang: 13.00-15.00 - Mata pelajaran agama",
        "Sore: 15.30-17.00 - Ekstrakurikuler",
        "Malam: 19.30-21.00 - Bimbel dan tugas"
      ]
    },
    {
      title: "Program Life Skills",
      description: "Pelatihan keterampilan praktis untuk bekal hidup di masyarakat",
      image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=600&h=400&fit=crop",
      duration: "Ongoing",
      students: "200 Santri",
      level: "Semua Tingkat",
      features: [
        "Pertanian dan Peternakan Organik",
        "Teknologi Informasi dan Komputer",
        "Kewirausahaan dan Bisnis",
        "Menjahit dan Kerajinan Tangan",
        "Otomotif dan Elektronik"
      ],
      schedule: [
        "Senin-Rabu: Pertanian & Peternakan",
        "Kamis-Jumat: IT & Programming",
        "Sabtu: Kewirausahaan",
        "Minggu: Workshop khusus"
      ]
    }
  ];

  const extracurricular = [
    { name: "Hadroh & Rebana", icon: "🎵", participants: "80 santri" },
    { name: "Kaligrafi Arab", icon: "🖋️", participants: "45 santri" },
    { name: "Pencak Silat", icon: "🥋", participants: "120 santri" },
    { name: "Pidato & Debat", icon: "🎤", participants: "60 santri" },
    { name: "Robotika", icon: "🤖", participants: "35 santri" },
    { name: "Jurnalistik", icon: "📰", participants: "25 santri" }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-islamic-gradient text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Program Pendidikan Unggulan
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Berbagai program pendidikan berkualitas yang dirancang untuk membentuk 
              santri yang berakhlak mulia, berpengetahuan luas, dan memiliki keterampilan praktis.
            </p>
          </div>
        </div>
      </section>

      {/* Program Details */}
      {programs.map((program, index) => (
        <section key={index} className={`py-20 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
          <div className="container mx-auto px-4">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
              index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
            }`}>
              {/* Image */}
              <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                <div className="relative">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="rounded-xl shadow-lg w-full h-80 object-cover"
                  />
                  <div className="absolute -bottom-6 -right-6 bg-islamic-gold p-6 rounded-lg shadow-lg">
                    <div className="text-center">
                      <div className="text-xl font-bold text-gray-800">{program.students}</div>
                      <div className="text-sm text-gray-600">Peserta Aktif</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                <div className="space-y-6">
                  <div>
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">{program.title}</h2>
                    <p className="text-lg text-gray-600 leading-relaxed">{program.description}</p>
                  </div>

                  {/* Program Info */}
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center p-4 bg-islamic-gradient/10 rounded-lg">
                      <Clock className="h-6 w-6 text-islamic-green mx-auto mb-2" />
                      <div className="text-sm font-semibold text-gray-800">{program.duration}</div>
                    </div>
                    <div className="text-center p-4 bg-islamic-gradient/10 rounded-lg">
                      <Users className="h-6 w-6 text-islamic-green mx-auto mb-2" />
                      <div className="text-sm font-semibold text-gray-800">{program.students}</div>
                    </div>
                    <div className="text-center p-4 bg-islamic-gradient/10 rounded-lg">
                      <Star className="h-6 w-6 text-islamic-green mx-auto mb-2" />
                      <div className="text-sm font-semibold text-gray-800">{program.level}</div>
                    </div>
                  </div>

                  {/* Features */}
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3">Keunggulan Program:</h4>
                    <ul className="space-y-2">
                      {program.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-600">
                          <CheckCircle className="h-4 w-4 text-islamic-green mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Schedule */}
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3">Jadwal Kegiatan:</h4>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      {program.schedule.map((schedule, idx) => (
                        <div key={idx} className="text-sm text-gray-600 mb-1">
                          {schedule}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Ekstrakurikuler */}
      <section className="py-20 bg-islamic-gradient text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ekstrakurikuler & Pengembangan Bakat
            </h2>
            <div className="w-20 h-1 bg-islamic-gold rounded mx-auto mb-6"></div>
            <p className="text-lg text-gray-200 max-w-2xl mx-auto">
              Berbagai kegiatan ekstrakurikuler untuk mengembangkan bakat dan minat santri 
              di luar kegiatan akademik formal.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {extracurricular.map((activity, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover-lift text-center">
                <div className="text-4xl mb-4">{activity.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{activity.name}</h3>
                <p className="text-gray-200">{activity.participants}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Beasiswa */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Program <span className="text-gradient">Beasiswa</span>
            </h2>
            <div className="w-20 h-1 bg-islamic-gradient rounded mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Kami menyediakan berbagai program beasiswa untuk membantu santri berprestasi 
              dari keluarga kurang mampu.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Beasiswa Prestasi Akademik",
                coverage: "100% SPP",
                criteria: "Nilai rapor min. 85, tes masuk terbaik",
                quota: "10 santri/tahun"
              },
              {
                title: "Beasiswa Tahfidz",
                coverage: "75% SPP",
                criteria: "Hafalan min. 5 Juz, tes tilawah",
                quota: "15 santri/tahun"
              },
              {
                title: "Beasiswa Ekonomi",
                coverage: "50% SPP",
                criteria: "Surat keterangan tidak mampu, wawancara",
                quota: "25 santri/tahun"
              }
            ].map((scholarship, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg hover-lift">
                <div className="bg-islamic-gradient p-3 rounded-lg inline-block mb-4">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{scholarship.title}</h3>
                <div className="space-y-2 text-gray-600">
                  <p><span className="font-semibold">Cakupan:</span> {scholarship.coverage}</p>
                  <p><span className="font-semibold">Kriteria:</span> {scholarship.criteria}</p>
                  <p><span className="font-semibold">Kuota:</span> {scholarship.quota}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Siap Bergabung dengan Program Kami?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Daftarkan putra-putri Anda sekarang dan berikan mereka kesempatan untuk 
              mendapatkan pendidikan Islam terbaik dengan fasilitas lengkap dan program unggulan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-islamic-gradient hover:opacity-90 text-white px-8 py-4 rounded-full"
              >
                Daftar Sekarang
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="border-islamic-green text-islamic-green hover:bg-islamic-green hover:text-white px-8 py-4 rounded-full"
              >
                Konsultasi Gratis
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Programs;
