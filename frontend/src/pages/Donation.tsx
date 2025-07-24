
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Heart, Users, Building, BookOpen, DollarSign, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";

const Donation = () => {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState("");
  const [donorName, setDonorName] = useState("");
  const [donorEmail, setDonorEmail] = useState("");
  const [donorPhone, setDonorPhone] = useState("");
  const [message, setMessage] = useState("");

  const donationCategories = [
    {
      title: "Fasilitas Belajar",
      description: "Pengadaan buku, komputer, dan peralatan pembelajaran modern",
      icon: BookOpen,
      target: "Rp 150.000.000",
      collected: "Rp 90.000.000",
      percentage: 60
    },
    {
      title: "Operasional Harian",
      description: "Biaya operasional sehari-hari pesantren dan kesejahteraan ustadz",
      icon: Heart,
      target: "Rp 300.000.000",
      collected: "Rp 180.000.000",
      percentage: 60
    }
  ];

  const predefinedAmounts = [50000, 100000, 250000, 500000, 1000000, 2500000];

  const handleDonation = () => {
    const amount = selectedAmount || parseInt(customAmount);
    if (!amount || !donorName || !donorEmail) {
      alert("Mohon lengkapi data yang diperlukan");
      return;
    }
    
    // Simulate payment process - here you can integrate with Midtrans or Xendit
    alert(`Terima kasih ${donorName}! Anda akan diarahkan ke halaman pembayaran untuk donasi sebesar Rp ${amount.toLocaleString('id-ID')}`);
    
    // Example integration with payment gateway:
    // For Midtrans: window.snap.pay(token)
    // For Xendit: redirectToXenditCheckout(amount, donorData)
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-islamic-gradient text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Donasi & Infaq untuk Kemajuan Pesantren
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed mb-8">
              Berpartisipasilah dalam membangun generasi muslim yang berkualitas di Pondok Pesantren Miftahul Amanah. 
              Setiap donasi Anda adalah investasi untuk masa depan yang lebih baik.
            </p>
            <div className="font-arabic text-2xl text-islamic-gold">
              مَنْ أَعَانَ عَلَى بِنَاءِ مَسْجِدٍ بَنَى اللَّهُ لَهُ بَيْتًا فِي الْجَنَّةِ
            </div>
            <p className="text-sm text-gray-300 mt-2">
              "Barangsiapa membantu pembangunan masjid, Allah akan membangunkan untuknya rumah di surga"
            </p>
          </div>
        </div>
      </section>

      {/* Program Donasi */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Program <span className="text-gradient">Donasi</span>
            </h2>
            <div className="w-20 h-1 bg-islamic-gradient rounded mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Pilih program donasi yang ingin Anda dukung untuk kemajuan Pondok Pesantren Miftahul Amanah.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {donationCategories.map((category, index) => (
              <Card key={index} className="hover-lift transition-all duration-500 hover:shadow-xl">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="bg-islamic-gradient p-3 rounded-lg transition-transform duration-300 hover:scale-110">
                      <category.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{category.title}</CardTitle>
                      <CardDescription>{category.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {/* Progress Bar */}
                    <div>
                      <div className="flex justify-between text-sm text-gray-600 mb-2">
                        <span>Terkumpul: {category.collected}</span>
                        <span>{category.percentage}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div 
                          className="bg-islamic-gradient h-3 rounded-full transition-all duration-700 ease-out"
                          style={{ width: `${category.percentage}%` }}
                        ></div>
                      </div>
                      <div className="text-sm text-gray-500 mt-1">
                        Target: {category.target}
                      </div>
                    </div>
                    
                    <Button className="w-full bg-islamic-gradient hover:opacity-90 transition-all duration-300 hover:scale-105">
                      Donasi Sekarang
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Form Donasi */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Form <span className="text-gradient">Donasi</span>
              </h2>
              <p className="text-lg text-gray-600">
                Isi form di bawah ini untuk melakukan donasi. Semua donasi akan disalurkan 
                dengan transparan dan akuntabel.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Form */}
              <div className="space-y-6 animate-fade-in">
                {/* Nominal Donasi */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Pilih Nominal Donasi
                  </label>
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    {predefinedAmounts.map((amount) => (
                      <button
                        key={amount}
                        onClick={() => {
                          setSelectedAmount(amount);
                          setCustomAmount("");
                        }}
                        className={`p-3 border rounded-lg text-center transition-all duration-300 hover:scale-105 ${
                          selectedAmount === amount
                            ? "border-islamic-green bg-islamic-green text-white transform scale-105"
                            : "border-gray-300 hover:border-islamic-green"
                        }`}
                      >
                        Rp {amount.toLocaleString('id-ID')}
                      </button>
                    ))}
                  </div>
                  <Input
                    type="number"
                    placeholder="Nominal lainnya"
                    value={customAmount}
                    onChange={(e) => {
                      setCustomAmount(e.target.value);
                      setSelectedAmount(null);
                    }}
                    className="w-full transition-all duration-300 focus:scale-105"
                  />
                </div>

                {/* Data Donatur */}
                <div className="space-y-4">
                  <Input
                    type="text"
                    placeholder="Nama Lengkap *"
                    value={donorName}
                    onChange={(e) => setDonorName(e.target.value)}
                    required
                    className="transition-all duration-300 focus:scale-105"
                  />
                  <Input
                    type="email"
                    placeholder="Email *"
                    value={donorEmail}
                    onChange={(e) => setDonorEmail(e.target.value)}
                    required
                    className="transition-all duration-300 focus:scale-105"
                  />
                  <Input
                    type="tel"
                    placeholder="Nomor Telepon"
                    value={donorPhone}
                    onChange={(e) => setDonorPhone(e.target.value)}
                    className="transition-all duration-300 focus:scale-105"
                  />
                  <Textarea
                    placeholder="Pesan atau doa (opsional)"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={4}
                    className="transition-all duration-300 focus:scale-105"
                  />
                </div>

                <Button 
                  onClick={handleDonation}
                  className="w-full bg-islamic-gradient hover:opacity-90 text-white py-4 text-lg transition-all duration-300 hover:scale-105"
                >

                  Lanjutkan Pembayaran
                </Button>
              </div>

              {/* Info Pembayaran */}
              <div className="space-y-6 animate-fade-in">
                <Card className="transition-all duration-300 hover:shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <CreditCard className="mr-2 h-5 w-5" />
                      Metode Pembayaran
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-islamic-green rounded-full"></div>
                        <span>Transfer Bank (BCA, Mandiri, BRI, BNI)</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-islamic-green rounded-full"></div>
                        <span>E-Wallet (OVO, GoPay, DANA, LinkAja)</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-islamic-green rounded-full"></div>
                        <span>Virtual Account</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-islamic-green rounded-full"></div>
                        <span>Kartu Kredit/Debit</span>
                      </div>
                      <div className="bg-blue-50 p-3 rounded-lg mt-4">
                        <p className="text-sm text-blue-700">
                          💡 <strong>Payment Gateway Integration:</strong> Siap untuk integrasi dengan Midtrans atau Xendit
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="transition-all duration-300 hover:shadow-lg">
                  <CardHeader>
                    <CardTitle>Informasi Rekening</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 text-sm">
                      <div>
                        <div className="font-semibold">Bank BCA</div>
                        <div>No. Rek: 1234-5678-9012</div>
                        <div>a.n. Yayasan Miftahul Amanah</div>
                      </div>
                      <div>
                        <div className="font-semibold">Bank Mandiri</div>
                        <div>No. Rek: 0987-6543-2109</div>
                        <div>a.n. Yayasan Miftahul Amanah</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-islamic-gradient/10 transition-all duration-300 hover:shadow-lg">
                  <CardContent className="pt-6">
                    <div className="text-center">
                      <h4 className="font-semibold text-gray-800 mb-2">Jaminan Amanah</h4>
                      <p className="text-sm text-gray-600">
                        Kami berkomitmen untuk menyalurkan donasi Anda dengan transparan 
                        dan akuntabel. Laporan penggunaan dana akan dipublikasikan secara berkala.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Laporan Keuangan */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Transparansi <span className="text-gradient">Keuangan</span>
            </h2>
            <div className="w-20 h-1 bg-islamic-gradient rounded mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Kami berkomitmen untuk transparan dalam pengelolaan dana donasi yang diterima.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="transition-all duration-300 hover:shadow-lg hover:scale-105">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold text-islamic-green">
                  Rp 2.5 M
                </CardTitle>
                <CardDescription>Total Donasi 2024</CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="transition-all duration-300 hover:shadow-lg hover:scale-105">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold text-islamic-green">
                  Rp 2.1 M
                </CardTitle>
                <CardDescription>Dana Tersalurkan</CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="transition-all duration-300 hover:shadow-lg hover:scale-105">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold text-islamic-green">
                  1,250+
                </CardTitle>
                <CardDescription>Donatur Terdaftar</CardDescription>
              </CardHeader>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="border-islamic-green text-islamic-green hover:bg-islamic-green hover:text-white transition-all duration-300 hover:scale-105">
              Download Laporan Keuangan
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Donation;
