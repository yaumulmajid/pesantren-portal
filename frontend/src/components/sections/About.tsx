
import { Heart, Target, Eye, Lightbulb } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Akhlak Mulia",
      description: "Membangun karakter santri dengan nilai-nilai Islam yang kuat dan akhlakul karimah"
    },
    {
      icon: Target,
      title: "Visi Jelas",
      description: "Menjadi lembaga pendidikan Islam terdepan yang menghasilkan generasi berkualitas"
    },
    {
      icon: Eye,
      title: "Misi Terarah", 
      description: "Menyelenggarakan pendidikan Islam yang holistik dan berkarakter"
    },
    {
      icon: Lightbulb,
      title: "Inovasi",
      description: "Mengintegrasikan metode pembelajaran tradisional dengan teknologi modern"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Tentang <span className="text-gradient">Miftahul Amanah</span>
              </h2>
              <div className="w-20 h-1 bg-islamic-gradient rounded"></div>
            </div>

            <p className="text-lg text-gray-600 leading-relaxed">
              Pondok Pesantren Miftahul Amanah didirikan dengan visi untuk mencetak generasi muslim 
              yang tidak hanya kuat dalam ilmu agama, tetapi juga mampu bersaing di era modern. 
              Kami mengembangkan kurikulum terpadu yang menggabungkan pendidikan agama dan umum.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover-lift">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-islamic-gradient rounded-lg">
                      <value.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">{value.title}</h4>
                      <p className="text-sm text-gray-600">{value.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="bg-islamic-gradient rounded-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <img
                src="/images/hero.png"
                alt="Masjid Mifathul Amanah"
                className="w-full h-64 md:h-80 object-cover rounded-lg"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-islamic-gold p-6 rounded-lg shadow-lg">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-800">20+</div>
                <div className="text-sm text-gray-600">Tahun Pengalaman</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
