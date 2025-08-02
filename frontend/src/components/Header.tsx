import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Building2, Settings } from "lucide-react";
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

  const handleAdminLogin = () => {
    const backendUrl = import.meta.env.VITE_BACKEND_URL || 'http://127.0.0.1:8000';
    window.open(`${backendUrl}/admin`, '_blank');
  };

  const menuItems = [
    { name: "Beranda", path: "/" },
    { name: "Profil", path: "/profile" },
    { name: "Program", path: "/programs" },
    { name: "Galeri", path: "/gallery" },
    { name: "Berita", path: "/berita" }, 
    // { name: "Donasi", path: "/donation" },
    // { name: "Pendaftaran", path: "/registration" },
    { name: "Kontak", path: "/contact" },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-white"
    }`}>
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center space-x-3">
            <img
              src="/ui/images/logo.png"
              alt="Logo"
              className="h-12 w-auto"
            />
            <div className="leading-tight">
              <p className="text-sm text-green-800 font-semibold">
                Pondok Pesantren
              </p>
              <p className="text-base text-green-900 font-bold">
                Miftahul Amanah
              </p>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-6">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`relative px-3 py-2 text-sm font-medium transition-all duration-300 ease-in-out hover:text-islamic-green transform hover:scale-105 ${
                  location.pathname === item.path 
                    ? "text-islamic-green" 
                    : "text-gray-700"
                }`}
              >
                {item.name}
                {location.pathname === item.path && (
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-islamic-green animate-fade-in"></div>
                )}
              </Link>
            ))}
          </div>

          {/* Right Section - Admin, CTA Button & Mobile Menu */}
          <div className="flex items-center space-x-3">
            {/* Admin Button - Desktop */}
            <div className="hidden lg:block">
              <button
                onClick={handleAdminLogin}
                className="group flex items-center space-x-2 px-4 py-2 text-sm font-medium text-gray-600 hover:text-islamic-green bg-gray-50 hover:bg-green-50 rounded-full transition-all duration-300 hover:scale-105 shadow-sm border border-gray-200 hover:border-green-200"
                title="Admin Panel"
              >
                <span className="hidden xl:inline">Login Admin</span>
              </button>
            </div>

            {/* CTA Button */}
            {/* <div className="hidden lg:block">
              <Button 
                asChild
                className="bg-islamic-gradient hover:opacity-90 text-white px-6 py-2 rounded-full transition-all duration-300 hover:scale-105 shadow-md"
              >
                <Link to="/donation">Donasi Sekarang</Link>
              </Button>
            </div> */}

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 p-4 bg-white rounded-lg shadow-lg animate-fade-in border border-gray-100">
            <div className="space-y-1">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`block px-4 py-3 text-sm font-medium rounded-lg transition-all duration-300 hover:text-islamic-green hover:bg-green-50 ${
                    location.pathname === item.path 
                      ? "text-islamic-green bg-green-50 border-l-4 border-islamic-green" 
                      : "text-gray-700"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            
            {/* Mobile Admin & Donation Buttons */}
            <div className="mt-6 pt-4 border-t border-gray-200 space-y-3">
              {/* Admin Button - Mobile */}
              <button
                onClick={() => {
                  handleAdminLogin();
                  setIsMenuOpen(false);
                }}
                className="w-full flex items-center justify-center space-x-2 px-4 py-3 text-sm font-medium text-gray-600 hover:text-islamic-green bg-gray-50 hover:bg-green-50 rounded-lg transition-all duration-300 border border-gray-200 hover:border-green-200"
              >
                <span>Login Admin</span>
              </button>

              {/* Donation Button - Mobile */}
              {/* <Button 
                asChild
                className="w-full bg-islamic-gradient hover:opacity-90 text-white transition-all duration-300 hover:scale-105 shadow-md rounded-lg"
              >
                <Link to="/donation" onClick={() => setIsMenuOpen(false)}>
                  Donasi Sekarang
                </Link>
              </Button> */}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;