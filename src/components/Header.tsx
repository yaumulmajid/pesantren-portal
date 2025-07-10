
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "Beranda", path: "/" },
    { name: "Profil", path: "/profile" },
    { name: "Program", path: "/programs" },
    { name: "Galeri", path: "/gallery" },
    { name: "Donasi", path: "/donation" },
    { name: "Pendaftaran", path: "/registration" },
    { name: "Kontak", path: "/contact" },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"
    }`}>
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="p-2 bg-islamic-gradient rounded-lg group-hover:scale-110 transition-transform duration-300">
              <Building2 className="h-8 w-8 text-white" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-800">Al-Hidayah</h2>
              <p className="text-sm text-gray-600">Pondok Pesantren</p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`relative px-3 py-2 text-sm font-medium transition-colors duration-300 hover:text-islamic-green ${
                  location.pathname === item.path 
                    ? "text-islamic-green" 
                    : "text-gray-700"
                }`}
              >
                {item.name}
                {location.pathname === item.path && (
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-islamic-green"></div>
                )}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button 
              asChild
              className="bg-islamic-gradient hover:opacity-90 text-white px-6 py-2 rounded-full transition-all duration-300 hover:scale-105"
            >
              <Link to="/donation">Donasi Sekarang</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 p-4 bg-white rounded-lg shadow-lg animate-fade-in">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`block px-3 py-3 text-sm font-medium border-b border-gray-100 last:border-b-0 transition-colors duration-300 hover:text-islamic-green ${
                  location.pathname === item.path 
                    ? "text-islamic-green bg-green-50" 
                    : "text-gray-700"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="mt-4 pt-4 border-t border-gray-100">
              <Button 
                asChild
                className="w-full bg-islamic-gradient hover:opacity-90 text-white"
              >
                <Link to="/donation" onClick={() => setIsMenuOpen(false)}>
                  Donasi Sekarang
                </Link>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
