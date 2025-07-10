
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MapPin, Phone, Mail, Clock, Send, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const contactInfo = [
    {
      icon: MapPin,
      title: "Alamat Pesantren",
      content: [
        "Jl. Pesantren Al-Hidayah No. 123",
        "Desa Hidayah, Kec. Barokah",
        "Kab. Berkah, Jawa Timur 12345"
      ],
      color: "bg-blue-500"
    },
    {
      icon: Phone,
      title: "Nomor Telepon",
      content: [
        "Kantor: (0331) 123-456",
        "HP: +62 812-3456-7890",
        "WhatsApp: +62 812-3456-7890"
      ],
      color: "bg-green-500"
    },
    {
      icon: Mail,
      title: "Email",
      content: [
        "info@alhidayah.ac.id",
        "pendaftaran@alhidayah.ac.id",
        "admin@alhidayah.ac.id"
      ],
      color: "bg-red-500"
    },
    {
      icon: Clock,
      title: "Jam Layanan",
      content: [
        "Senin - Jumat: 08.00 - 16.00 WIB",
        "Sabtu: 08.00 - 12.00 WIB",
        "Minggu: Libur"
      ],
      color: "bg-purple-500"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Pesan Anda telah dikirim! Kami akan membalas dalam 1x24 jam.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: ""
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-islamic-gradient text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Hubungi Kami
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Kami siap membantu menjawab pertanyaan Anda seputar pendaftaran, 
              program pendidikan, atau informasi lainnya tentang Al-Hidayah.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Informasi <span className="text-gradient">Kontak</span>
            </h2>
            <div className="w-20 h-1 bg-islamic-gradient rounded mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Berikut adalah berbagai cara untuk menghubungi Pondok Pesantren Al-Hidayah.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <Card key={index} className="hover-lift text-center">
                <CardHeader>
                  <div className={`${info.color} p-4 rounded-full inline-block mx-auto mb-4`}>
                    <info.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-lg">{info.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {info.content.map((item, idx) => (
                      <p key={idx} className="text-gray-600 text-sm">{item}</p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                  Kirim <span className="text-gradient">Pesan</span>
                </h2>
                <p className="text-lg text-gray-600">
                  Sampaikan pertanyaan atau masukan Anda melalui form di bawah ini.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nama Lengkap *
                    </label>
                    <Input
                      required
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      placeholder="Masukkan nama lengkap"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <Input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      placeholder="email@contoh.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nomor Telepon
                    </label>
                    <Input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      placeholder="08xxxxxxxxxx"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Subjek *
                    </label>
                    <Input
                      required
                      value={formData.subject}
                      onChange={(e) => handleInputChange("subject", e.target.value)}
                      placeholder="Subjek pesan"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Pesan *
                  </label>
                  <Textarea
                    required
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    placeholder="Tulis pesan Anda di sini..."
                    rows={6}
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-islamic-gradient hover:opacity-90 text-white py-3"
                >
                  <Send className="mr-2 h-4 w-4" />
                  Kirim Pesan
                </Button>
              </form>
            </div>

            {/* Map & Additional Info */}
            <div className="space-y-8">
              {/* Map Placeholder */}
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Lokasi Pesantren</h3>
                <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <MapPin className="h-12 w-12 mx-auto mb-2" />
                    <p>Peta Lokasi Pesantren</p>
                    <p className="text-sm">Jl. Pesantren Al-Hidayah No. 123</p>
                  </div>
                </div>
              </div>

              {/* Quick Contact */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <MessageSquare className="mr-2 h-5 w-5" />
                    Kontak Langsung
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                    <div>
                      <p className="font-semibold text-gray-800">WhatsApp</p>
                      <p className="text-sm text-gray-600">Respon cepat 24/7</p>
                    </div>
                    <Button size="sm" className="bg-green-500 hover:bg-green-600">
                      Chat Now
                    </Button>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                    <div>
                      <p className="font-semibold text-gray-800">Telepon</p>
                      <p className="text-sm text-gray-600">Senin-Jumat 08.00-16.00</p>
                    </div>
                    <Button variant="outline" size="sm">
                      Call Now
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* FAQ Quick Links */}
              <Card>
                <CardHeader>
                  <CardTitle>Pertanyaan Umum</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      "Bagaimana cara mendaftar?",
                      "Berapa biaya pendidikan?",
                      "Apa saja program yang tersedia?",
                      "Kapan pendaftaran dibuka?",
                      "Bagaimana sistem beasiswa?"
                    ].map((question, index) => (
                      <div key={index} className="text-sm">
                        <button className="text-islamic-green hover:text-islamic-green/80 text-left">
                          • {question}
                        </button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Visit Us */}
      <section className="py-20 bg-islamic-gradient text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Kunjungi Pesantren Kami
            </h2>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              Kami mengundang Anda untuk berkunjung langsung ke pesantren dan melihat 
              fasilitas serta lingkungan belajar yang kondusif untuk putra-putri Anda.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <Clock className="h-8 w-8 text-islamic-gold mx-auto mb-4" />
                <h4 className="font-semibold text-lg mb-2">Jam Kunjungan</h4>
                <p className="text-gray-200 text-sm">
                  Senin - Jumat: 09.00 - 15.00 WIB<br />
                  Sabtu: 09.00 - 12.00 WIB
                </p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <Phone className="h-8 w-8 text-islamic-gold mx-auto mb-4" />
                <h4 className="font-semibold text-lg mb-2">Reservasi</h4>
                <p className="text-gray-200 text-sm">
                  Hubungi kami sebelum berkunjung<br />
                  untuk koordinasi yang lebih baik
                </p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <MapPin className="h-8 w-8 text-islamic-gold mx-auto mb-4" />
                <h4 className="font-semibold text-lg mb-2">Panduan Lokasi</h4>
                <p className="text-gray-200 text-sm">
                  Tersedia panduan lengkap<br />
                  untuk mencapai lokasi pesantren
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-islamic-gold hover:bg-yellow-600 text-gray-900 font-semibold px-8 py-3 rounded-full"
              >
                Reservasi Kunjungan
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-full"
              >
                Download Brosur
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
