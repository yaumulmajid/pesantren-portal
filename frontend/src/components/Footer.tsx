import { Link } from "react-router-dom";
import { Building2, MapPin, Phone, Mail, Facebook, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Logo & Description */}
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <img
                src="/ui/images/logo.png"
                alt="Logo Miftahul Amanah"
                className="h-10 w-auto rounded-lg"
              />
              <div>
                <h3 className="text-lg font-bold">Miftahul Amanah</h3>
                <p className="text-xs text-gray-400">Pondok Pesantren</p>
              </div>
            </div>
            <p className="text-gray-400 text-xs leading-relaxed">
              Lembaga pendidikan Islam yang menggabungkan nilai-nilai tradisional 
              dengan pendekatan modern untuk membentuk generasi muslim yang berakhlak mulia.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="text-gray-400 hover:text-islamic-green transition-colors">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="text-gray-400 hover:text-islamic-green transition-colors">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" className="text-gray-400 hover:text-islamic-green transition-colors">
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base font-semibold mb-3">Menu Utama</h4>
            <ul className="space-y-1">
              {[
                { name: "Beranda", path: "/" },
                { name: "Profil Pesantren", path: "/profile" },
                { name: "Program Pendidikan", path: "/programs" },
                { name: "Galeri", path: "/gallery" },
                { name: "Berita", path: "/berita" }, 
              ].map((item) => (
                <li key={item.name}>
                  <Link 
                    to={item.path} 
                    className="text-gray-400 hover:text-islamic-green transition-all duration-300 hover:translate-x-1 text-xs inline-block"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-base font-semibold mb-3">Layanan</h4>
            <ul className="space-y-1">
              {[
                { name: "Donasi & Infaq", path: "/donation" },
                { name: "Pendaftaran Santri", path: "/registration" },
                { name: "Kontak Kami", path: "/contact" },
                { name: "Beasiswa", path: "/programs" },
              ].map((item) => (
                <li key={item.name}>
                  <Link 
                    to={item.path} 
                    className="text-gray-400 hover:text-islamic-green transition-all duration-300 hover:translate-x-1 text-xs inline-block"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-base font-semibold mb-3">Kontak</h4>
            <div className="space-y-2">
              <div className="flex items-start space-x-2">
                <MapPin className="h-3 w-3 text-islamic-green mt-0.5 flex-shrink-0" />
                <div className="text-gray-400 text-xs">
                  <p>Jl. Brigjen M. Isa No. 35 Cipadung,</p>
                  <p>Kec. Purwaharja, Kota Banjar,</p>
                  <p>Jawa Barat 46332</p>
                  <a 
                    href="https://maps.app.goo.gl/HiCTELwFGxB3Qx299" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-islamic-green hover:underline mt-1 inline-block"
                  >
                    Lihat di Google Maps
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-3 w-3 text-islamic-green" />
                <p className="text-gray-400 text-xs">+62 812-3456-7890</p>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-3 w-3 text-islamic-green" />
                <p className="text-gray-400 text-xs">info@miftahulamanah.ac.id</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-6 pt-6 text-center">
          <p className="text-gray-400 text-xs">
            © 2025 Pondok Pesantren Miftahul Amanah. Semua hak cipta dilindungi.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;