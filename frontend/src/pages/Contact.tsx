import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MapPin, Phone, Mail, Clock, Send, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import "leaflet/dist/leaflet.css";
import React, { useEffect, useState } from "react";

const Contact = () => {
  const [contactData, setContactData] = useState<any>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  useEffect(() => {
    fetch("/api/contact")
      .then((res) => res.json())
      .then((data) => setContactData(data.data))
      .catch((err) => console.error("Gagal memuat data kontak", err));
  }, []);


  if (!contactData) {
    return (
      <div className="flex items-center justify-center h-screen bg-white">
        <div className="flex flex-col items-center space-y-4">
          <div className="w-16 h-16 rounded-full border-4 border-t-transparent border-r-yellow-500 border-b-green-600 border-l-yellow-500 animate-spin"></div>
          <p className="text-gray-600 text-sm font-semibold">Memuat kontak...</p>
        </div>
      </div>
    );
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: "Alamat Pesantren",
      content: contactData.alamat.split(","),
      color: "bg-blue-500",
    },
    {
      icon: Phone,
      title: "Nomor Telepon",
      content: [
        `Kantor: ${contactData.telepon_kantor}`,
        `HP: ${contactData.telepon_hp}`,
        `WhatsApp: ${contactData.telepon_wa}`,
      ],
      color: "bg-green-500",
    },
    {
      icon: Mail,
      title: "Email",
      content: contactData.emails ? contactData.emails.map((email: any) => email.value) : [],
      color: "bg-red-500",
    },
    {
      icon: Clock,
      title: "Jam Layanan",
      content: [
        `Senin - Jumat: ${contactData.jam_kerja_senin_jumat}`,
        `Sabtu: ${contactData.jam_kerja_sabtu}`,
        `Minggu: ${contactData.jam_kerja_minggu}`,
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
    <section className="pt-20 pb-10 bg-islamic-gradient text-white">
      <div className="container mx-auto px-4 text-center max-w-2xl md:max-w-3xl">
        <h1 className="text-2xl md:text-3xl font-semibold mb-3 tracking-tight">
          Hubungi Kami
        </h1>
        <p className="text-sm md:text-base text-gray-100 leading-relaxed">
          Kami siap membantu menjawab pertanyaan Anda seputar pendaftaran,
          program pendidikan, atau informasi lainnya tentang Miftahul Amanah.
        </p>
      </div>
    </section>

      {/* Contact Info */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
              Informasi <span className="text-gradient">Kontak</span>
            </h2>
            <div className="w-16 h-1 bg-islamic-gradient rounded mx-auto mb-4"></div>
            <p className="text-base text-gray-600 max-w-xl mx-auto">
              Berikut adalah berbagai cara untuk menghubungi Pondok Pesantren Miftahul Amanah.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="hover-lift text-center">
                <CardHeader>
                  <div className={`${info.color} p-3 rounded-full inline-block mx-auto mb-3`}>
                    <info.icon className="h-5 w-5 text-white" />
                  </div>
                  <CardTitle className="text-base">{info.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-1.5">
                    {info.content.map((item, idx) => (
                      <p key={idx} className="text-gray-600 text-xs">
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
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Form */}
          <div>
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-3">
                Kirim <span className="text-gradient">Pesan</span>
              </h2>
              <p className="text-base text-gray-600">
                Sampaikan pertanyaan atau masukan Anda melalui form di bawah ini.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1.5">
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
                  <label className="block text-xs font-medium text-gray-700 mb-1.5">
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

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1.5">
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
                  <label className="block text-xs font-medium text-gray-700 mb-1.5">
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
                <label className="block text-xs font-medium text-gray-700 mb-1.5">
                  Pesan *
                </label>
                <Textarea
                  required
                  rows={5}
                  placeholder="Tulis pesan Anda di sini..."
                  value={formData.message}
                  onChange={handleInputChange("message")}
                />
              </div>

              <Button type="submit" className="w-full bg-islamic-gradient hover:opacity-90 text-white py-2.5 text-sm">
                <Send className="mr-2 h-3 w-3" />
                Kirim Pesan
              </Button>
            </form>
          </div>

          {/* Map & Contact Action */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Lokasi Pesantren</h3>
              <div className="bg-gray-200 rounded-lg h-56 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <MapPin className="h-10 w-10 mx-auto mb-2" />
                  <a 
                    href="https://maps.app.goo.gl/HiCTELwFGxB3Qx299" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-islamic-green hover:underline mt-1 inline-block text-sm"
                  >
                    Lihat di Google Maps
                  </a>
                  <p className="text-xs">Jl. Brigjen M. Isa No. 35 Cipadung</p>
                </div>
              </div>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-base">
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Kontak Langsung
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between p-2.5 bg-green-50 rounded-lg">
                  <div>
                    <p className="font-semibold text-gray-800 text-sm">WhatsApp</p>
                    <p className="text-xs text-gray-600">Respon cepat 24/7</p>
                  </div>
                  <Button size="sm" className="bg-green-500 hover:bg-green-600 text-xs">
                    Chat Now
                  </Button>
                </div>

                <div className="flex items-center justify-between p-2.5 bg-blue-50 rounded-lg">
                  <div>
                    <p className="font-semibold text-gray-800 text-sm">Telepon</p>
                    <p className="text-xs text-gray-600">Senin-Jumat 08.00-16.00</p>
                  </div>
                  <Button variant="outline" size="sm" className="text-xs">
                    Call Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Visit Us */}
      <section className="py-16 bg-islamic-gradient text-white">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Kunjungi Pesantren Kami</h2>
          <p className="text-lg text-gray-200 mb-6 leading-relaxed">
            Kami mengundang Anda untuk berkunjung langsung ke pesantren dan melihat
            fasilitas serta lingkungan belajar yang kondusif untuk putra-putri Anda.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
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
              <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <item.icon className="h-6 w-6 text-islamic-gold mx-auto mb-3" />
                <h4 className="font-semibold text-base mb-2">{item.title}</h4>
                <p className="text-gray-200 text-xs">{item.content}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              size="lg"
              className="bg-islamic-gold hover:bg-yellow-600 text-gray-900 font-semibold px-6 py-2.5 rounded-full text-sm"
            >
              Reservasi Kunjungan
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-gray-900 px-6 py-2.5 rounded-full text-sm"
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