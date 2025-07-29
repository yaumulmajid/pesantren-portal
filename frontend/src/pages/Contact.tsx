import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MapPin, Phone, Mail, Clock, Send, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const contactInfo = [
    {
      icon: MapPin,
      title: "Alamat Pesantren",
      content: [
        "Jl. Brigjen M. Isa No. 35 Cipadung,",
        "Kec. Purwaharja, Kota Banjar,",
        "Jawa Barat 46332",
      ],
      color: "bg-blue-500",
    },
    {
      icon: Phone,
      title: "Nomor Telepon",
      content: [
        "Kantor: (0331) 123-456",
        "HP: +62 812-3456-7890",
        "WhatsApp: +62 812-3456-7890",
      ],
      color: "bg-green-500",
    },
    {
      icon: Mail,
      title: "Email",
      content: ["info@miftahulamanah.ac.id", "admin@miftahulamanah.ac.id"],
      color: "bg-red-500",
    },
    {
      icon: Clock,
      title: "Jam Layanan",
      content: [
        "Senin - Jumat: 08.00 - 16.00 WIB",
        "Sabtu: 08.00 - 12.00 WIB",
        "Minggu: Libur",
      ],
      color: "bg-purple-500",
    },
  ];

  const handleInputChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Pesan Anda telah dikirim! Kami akan membalas dalam 1x24 jam.");
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-islamic-gradient text-white">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Hubungi Kami</h1>
          <p className="text-xl text-gray-200 leading-relaxed">
            Kami siap membantu menjawab pertanyaan Anda seputar pendaftaran,
            program pendidikan, atau informasi lainnya tentang Miftahul Amanah.
          </p>
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
              Berikut adalah berbagai cara untuk menghubungi Pondok Pesantren Miftahul Amanah.
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
                      <p key={idx} className="text-gray-600 text-sm">
                        {item}
                      </p>
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
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
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
                    placeholder="Masukkan nama lengkap"
                    value={formData.name}
                    onChange={handleInputChange("name")}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <Input
                    required
                    type="email"
                    placeholder="email@gmail.com"
                    value={formData.email}
                    onChange={handleInputChange("email")}
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
                    placeholder="08xxxxxxxxxx"
                    value={formData.phone}
                    onChange={handleInputChange("phone")}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subjek *
                  </label>
                  <Input
                    required
                    placeholder="Subjek pesan"
                    value={formData.subject}
                    onChange={handleInputChange("subject")}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Pesan *
                </label>
                <Textarea
                  required
                  rows={6}
                  placeholder="Tulis pesan Anda di sini..."
                  value={formData.message}
                  onChange={handleInputChange("message")}
                />
              </div>

              <Button type="submit" className="w-full bg-islamic-gradient hover:opacity-90 text-white py-3">
                <Send className="mr-2 h-4 w-4" />
                Kirim Pesan
              </Button>
            </form>
          </div>

          {/* Map & Contact Action */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Lokasi Pesantren</h3>
              <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <MapPin className="h-12 w-12 mx-auto mb-2" />
                  <a 
                    href="https://maps.app.goo.gl/HiCTELwFGxB3Qx299" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-islamic-green hover:underline mt-1 inline-block"
                  >
                    Lihat di Google Maps
                  </a>
                  <p className="text-sm">Jl. Brigjen M. Isa No. 35 Cipadung</p>
                </div>
              </div>
            </div>

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
          </div>
        </div>
      </section>

      {/* Visit Us */}
      <section className="py-20 bg-islamic-gradient text-white">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Kunjungi Pesantren Kami</h2>
          <p className="text-xl text-gray-200 mb-8 leading-relaxed">
            Kami mengundang Anda untuk berkunjung langsung ke pesantren dan melihat
            fasilitas serta lingkungan belajar yang kondusif untuk putra-putri Anda.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: Clock,
                title: "Jam Kunjungan",
                content: (
                  <>
                    Senin - Jumat: 09.00 - 15.00 WIB<br />
                    Sabtu: 09.00 - 12.00 WIB
                  </>
                ),
              },
              {
                icon: Phone,
                title: "Reservasi",
                content: (
                  <>
                    Hubungi kami sebelum berkunjung<br />
                    untuk koordinasi yang lebih baik
                  </>
                ),
              },
              {
                icon: MapPin,
                title: "Panduan Lokasi",
                content: (
                  <>
                    Tersedia panduan lengkap<br />
                    untuk mencapai lokasi pesantren
                  </>
                ),
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <item.icon className="h-8 w-8 text-islamic-gold mx-auto mb-4" />
                <h4 className="font-semibold text-lg mb-2">{item.title}</h4>
                <p className="text-gray-200 text-sm">{item.content}</p>
              </div>
            ))}
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
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
