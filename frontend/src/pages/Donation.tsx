import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Heart, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useState } from "react";

const Donation = () => {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState("");
  const [donorName, setDonorName] = useState("");
  const [donorEmail, setDonorEmail] = useState("");
  const [donorPhone, setDonorPhone] = useState("");
  const [message, setMessage] = useState("");

  const predefinedAmounts = [50000, 100000, 250000, 500000, 1000000, 2500000];

  const handleDonation = () => {
    const amount = selectedAmount || parseInt(customAmount);
    if (!amount || !donorName || !donorEmail) {
      alert("Mohon lengkapi data yang diperlukan");
      return;
    }

    alert(
      `Terima kasih ${donorName}! Anda akan diarahkan ke halaman pembayaran untuk donasi sebesar Rp ${amount.toLocaleString(
        "id-ID"
      )}`
    );
  };

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-islamic-gradient text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl md:max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-3xl md:text-4xl font-semibold mb-6 leading-snug">
              Infaq & Donasi untuk Kemajuan Pesantren
            </h1>
            <p className="text-base md:text-lg text-gray-100 leading-relaxed mb-6">
              Dukung pendidikan dan operasional Pondok Pesantren Miftahul Amanah
              melalui infaq jariyah Anda. Setiap rupiah membawa keberkahan.
            </p>
            <div className="font-arabic text-xl md:text-2xl text-islamic-gold">
              مَنْ دَلَّ عَلَى خَيْرٍ فَلَهُ مِثْلُ أَجْرِ فَاعِلِهِ
            </div>
            <p className="text-xs md:text-sm text-gray-300 mt-2">
              “Barangsiapa menunjukkan kepada kebaikan, maka ia mendapat pahala
              seperti orang yang melakukannya.” (HR. Muslim)
            </p>
          </div>
        </div>
      </section>


      {/* Ajakan Infaq Umum */}
      {/* <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Infaq <span className="text-gradient">Pendidikan & Pesantren</span>
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Salurkan infaq terbaik Anda untuk mendukung pendidikan para santri,
              pembangunan fasilitas, dan operasional harian Pondok Pesantren Miftahul Amanah. 
              Setiap kontribusi Anda adalah investasi jariyah yang terus mengalir.
            </p>
            <div className="flex justify-center">
              <Heart className="h-16 w-16 text-islamic-green" />
            </div>
          </div>
        </div>
      </section> */}

      {/* Form Donasi */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Form <span className="text-gradient">Infaq</span>
              </h2>
              <p className="text-lg text-gray-600">
                Isi form di bawah ini untuk melakukan infaq. Semua donasi akan
                disalurkan dengan transparan dan akuntabel.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Form */}
              <div className="space-y-6 animate-fade-in">
                {/* Nominal Donasi */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Pilih Nominal Infaq
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
                        Rp {amount.toLocaleString("id-ID")}
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
                        dan akuntabel. Laporan penggunaan dana akan dipublikasikan secara
                        berkala.
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
              Kami berkomitmen untuk transparan dalam pengelolaan dana donasi yang
              diterima.
            </p>
          </div>

          {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
          </div> */}

          <div className="text-center mt-12">
            <Button
              variant="outline"
              size="lg"
              className="border-islamic-green text-islamic-green hover:bg-islamic-green hover:text-white transition-all duration-300 hover:scale-105"
            >
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
