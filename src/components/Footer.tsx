
import { Link } from "react-router-dom";
import { Mosque, MapPin, Phone, Mail, Facebook, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-islamic-gradient rounded-lg">
                <Mosque className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Al-Hidayah</h3>
                <p className="text-sm text-gray-400">Pondok Pesantren</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Lembaga pendidikan Islam yang menggabungkan nilai-nilai tradisional 
              dengan pendekatan modern untuk membentuk generasi muslim yang berakhlak mulia.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-islamic-green transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-islamic-green transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-islamic-green transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Menu Utama</h4>
            <ul className="space-y-2">
              {[
                { name: "Beranda", path: "/" },
                { name: "Profil Pesantren", path: "/profile" },
                { name: "Program Pendidikan", path: "/programs" },
                { name: "Galeri", path: "/gallery" },
              ].map((item) => (
                <li key={item.name}>
                  <Link 
                    to={item.path} 
                    className="text-gray-400 hover:text-islamic-green transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Layanan</h4>
            <ul className="space-y-2">
              {[
                { name: "Donasi & Infaq", path: "/donation" },
                { name: "Pendaftaran Santri", path: "/registration" },
                { name: "Kontak Kami", path: "/contact" },
                { name: "Beasiswa", path: "/programs" },
              ].map((item) => (
                <li key={item.name}>
                  <Link 
                    to={item.path} 
                    className="text-gray-400 hover:text-islamic-green transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Kontak</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-islamic-green mt-1 flex-shrink-0" />
                <p className="text-gray-400 text-sm">
                  Jl. Pesantren No. 123<br />
                  Desa Hidayah, Kec. Barokah<br />
                  Kab. Berkah, Jawa Timur 12345
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-islamic-green" />
                <p className="text-gray-400 text-sm">+62 123 456 789</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-islamic-green" />
                <p className="text-gray-400 text-sm">info@alhidayah.ac.id</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 Pondok Pesantren Al-Hidayah. Semua hak cipta dilindungi.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
