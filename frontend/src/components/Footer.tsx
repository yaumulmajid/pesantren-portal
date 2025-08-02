
import { Link } from "react-router-dom";
import { Building2, MapPin, Phone, Mail, Facebook, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img
                src="/ui/images/logo.png"
                alt="Logo Miftahul Amanah"
                className="h-14 w-auto rounded-lg"
              />
              <div>
                <h3 className="text-xl font-bold">Miftahul Amanah</h3>
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
                { name: "Berita", path: "/berita" }, 
              ].map((item) => (
                <li key={item.name}>
                  <Link 
                    to={item.path} 
                    className="text-gray-400 hover:text-islamic-green transition-all duration-300 hover:translate-x-1 text-sm inline-block"
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
                    className="text-gray-400 hover:text-islamic-green transition-all duration-300 hover:translate-x-1 text-sm inline-block"
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
                <div className="text-gray-400 text-sm">
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
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-islamic-green" />
                <p className="text-gray-400 text-sm">+62 812-3456-7890</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-islamic-green" />
                <p className="text-gray-400 text-sm">info@miftahulamanah.ac.id</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 Pondok Pesantren Miftahul Amanah. Semua hak cipta dilindungi.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
