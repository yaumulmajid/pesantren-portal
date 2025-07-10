
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { User, Calendar, MapPin, Phone, Mail, FileText, Upload, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";

const Registration = () => {
  const [formData, setFormData] = useState({
    // Data Santri
    fullName: "",
    nickname: "",
    birthPlace: "",
    birthDate: "",
    gender: "",
    address: "",
    phone: "",
    email: "",
    previousSchool: "",
    grade: "",
    // Data Orang Tua
    fatherName: "",
    fatherJob: "",
    fatherPhone: "",
    motherName: "",
    motherJob: "",
    motherPhone: "",
    parentAddress: "",
    // Program Pilihan
    program: "",
    startPeriod: "",
    // Dokumen
    agreement: false
  });

  const requirements = [
    "Fotokopi Akta Kelahiran",
    "Fotokopi Kartu Keluarga",
    "Fotokopi KTP Orang Tua",
    "Pas Foto 3x4 (6 lembar)",
    "Fotokopi Ijazah/Rapor terakhir",
    "Surat Keterangan Sehat dari Dokter",
    "Surat Rekomendasi dari Sekolah/Pesantren sebelumnya (jika ada)"
  ];

  const programs = [
    { value: "tahfidz", label: "Program Tahfidz Al-Quran" },
    { value: "formal", label: "Pendidikan Formal Terpadu" },
    { value: "lifeskill", label: "Program Life Skills" },
    { value: "combined", label: "Program Kombinasi (Tahfidz + Formal)" }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.agreement) {
      alert("Mohon setujui syarat dan ketentuan terlebih dahulu");
      return;
    }
    
    // Simulate form submission
    alert("Pendaftaran berhasil dikirim! Tim kami akan menghubungi Anda dalam 1x24 jam.");
    console.log("Form data:", formData);
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
              Pendaftaran Santri Baru
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Daftarkan putra-putri Anda untuk mendapatkan pendidikan Islam terbaik 
              di lingkungan yang mendukung perkembangan spiritual dan akademik.
            </p>
          </div>
        </div>
      </section>

      {/* Informasi Pendaftaran */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Informasi <span className="text-gradient">Pendaftaran</span>
            </h2>
            <div className="w-20 h-1 bg-islamic-gradient rounded mx-auto mb-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              {
                title: "Pendaftaran Dibuka",
                description: "1 Februari - 30 April 2025",
                icon: Calendar,
                color: "bg-blue-500"
              },
              {
                title: "Tes Masuk",
                description: "5-10 Mei 2025",
                icon: FileText,
                color: "bg-green-500"
              },
              {
                title: "Pengumuman",
                description: "15 Mei 2025",
                icon: CheckCircle,
                color: "bg-yellow-500"
              },
              {
                title: "Mulai Pembelajaran",
                description: "1 Juli 2025",
                icon: User,
                color: "bg-purple-500"
              }
            ].map((info, index) => (
              <Card key={index} className="hover-lift text-center">
                <CardHeader>
                  <div className={`${info.color} p-3 rounded-full inline-block mx-auto mb-4`}>
                    <info.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-lg">{info.title}</CardTitle>
                  <CardDescription>{info.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>

          {/* Syarat & Ketentuan */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card>
              <CardHeader>
                <CardTitle>Syarat Pendaftaran</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-islamic-green mt-0.5 mr-3 flex-shrink-0" />
                    <span>Laki-laki/Perempuan berusia 12-18 tahun</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-islamic-green mt-0.5 mr-3 flex-shrink-0" />
                    <span>Lulusan SD/MI untuk program SMP atau lulusan SMP/MTs untuk program SMA</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-islamic-green mt-0.5 mr-3 flex-shrink-0" />
                    <span>Sehat jasmani dan rohani</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-islamic-green mt-0.5 mr-3 flex-shrink-0" />
                    <span>Sanggup mengikuti peraturan pesantren</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-islamic-green mt-0.5 mr-3 flex-shrink-0" />
                    <span>Mendapat izin dari orang tua/wali</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Dokumen yang Diperlukan</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {requirements.map((req, index) => (
                    <li key={index} className="flex items-start">
                      <FileText className="h-5 w-5 text-islamic-green mt-0.5 mr-3 flex-shrink-0" />
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Form Pendaftaran */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Form <span className="text-gradient">Pendaftaran</span>
              </h2>
              <p className="text-lg text-gray-600">
                Lengkapi form di bawah ini dengan data yang benar dan akurat.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-12">
              {/* Data Santri */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <User className="mr-2 h-5 w-5" />
                    Data Calon Santri
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Nama Lengkap *
                      </label>
                      <Input
                        required
                        value={formData.fullName}
                        onChange={(e) => handleInputChange("fullName", e.target.value)}
                        placeholder="Masukkan nama lengkap"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Nama Panggilan
                      </label>
                      <Input
                        value={formData.nickname}
                        onChange={(e) => handleInputChange("nickname", e.target.value)}
                        placeholder="Nama panggilan"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Tempat Lahir *
                      </label>
                      <Input
                        required
                        value={formData.birthPlace}
                        onChange={(e) => handleInputChange("birthPlace", e.target.value)}
                        placeholder="Kota kelahiran"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Tanggal Lahir *
                      </label>
                      <Input
                        type="date"
                        required
                        value={formData.birthDate}
                        onChange={(e) => handleInputChange("birthDate", e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Jenis Kelamin *
                      </label>
                      <Select value={formData.gender} onValueChange={(value) => handleInputChange("gender", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Pilih jenis kelamin" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="male">Laki-laki</SelectItem>
                          <SelectItem value="female">Perempuan</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Alamat Lengkap *
                    </label>
                    <Textarea
                      required
                      value={formData.address}
                      onChange={(e) => handleInputChange("address", e.target.value)}
                      placeholder="Alamat lengkap dengan RT/RW, Kelurahan, Kecamatan, Kota/Kabupaten"
                      rows={3}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Nomor Telepon/HP *
                      </label>
                      <Input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        placeholder="08xxxxxxxxxx"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email
                      </label>
                      <Input
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        placeholder="email@contoh.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Asal Sekolah *
                      </label>
                      <Input
                        required
                        value={formData.previousSchool}
                        onChange={(e) => handleInputChange("previousSchool", e.target.value)}
                        placeholder="Nama sekolah terakhir"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Kelas yang Dituju *
                      </label>
                      <Select value={formData.grade} onValueChange={(value) => handleInputChange("grade", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Pilih kelas" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="smp1">SMP Kelas 1</SelectItem>
                          <SelectItem value="smp2">SMP Kelas 2</SelectItem>
                          <SelectItem value="smp3">SMP Kelas 3</SelectItem>
                          <SelectItem value="sma1">SMA Kelas 1</SelectItem>
                          <SelectItem value="sma2">SMA Kelas 2</SelectItem>
                          <SelectItem value="sma3">SMA Kelas 3</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Data Orang Tua */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <User className="mr-2 h-5 w-5" />
                    Data Orang Tua/Wali
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Nama Ayah *
                      </label>
                      <Input
                        required
                        value={formData.fatherName}
                        onChange={(e) => handleInputChange("fatherName", e.target.value)}
                        placeholder="Nama lengkap ayah"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Pekerjaan Ayah *
                      </label>
                      <Input
                        required
                        value={formData.fatherJob}
                        onChange={(e) => handleInputChange("fatherJob", e.target.value)}
                        placeholder="Pekerjaan ayah"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Nama Ibu *
                      </label>
                      <Input
                        required
                        value={formData.motherName}
                        onChange={(e) => handleInputChange("motherName", e.target.value)}
                        placeholder="Nama lengkap ibu"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Pekerjaan Ibu *
                      </label>
                      <Input
                        required
                        value={formData.motherJob}
                        onChange={(e) => handleInputChange("motherJob", e.target.value)}
                        placeholder="Pekerjaan ibu"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Telepon Ayah *
                      </label>
                      <Input
                        type="tel"
                        required
                        value={formData.fatherPhone}
                        onChange={(e) => handleInputChange("fatherPhone", e.target.value)}
                        placeholder="08xxxxxxxxxx"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Telepon Ibu
                      </label>
                      <Input
                        type="tel"
                        value={formData.motherPhone}
                        onChange={(e) => handleInputChange("motherPhone", e.target.value)}
                        placeholder="08xxxxxxxxxx"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Alamat Orang Tua (jika berbeda dengan santri)
                    </label>
                    <Textarea
                      value={formData.parentAddress}
                      onChange={(e) => handleInputChange("parentAddress", e.target.value)}
                      placeholder="Alamat lengkap orang tua"
                      rows={3}
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Program Pilihan */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BookOpen className="mr-2 h-5 w-5" />
                    Program Pilihan
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Program yang Dipilih *
                      </label>
                      <Select value={formData.program} onValueChange={(value) => handleInputChange("program", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Pilih program" />
                        </SelectTrigger>
                        <SelectContent>
                          {programs.map((program) => (
                            <SelectItem key={program.value} value={program.value}>
                              {program.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Periode Masuk *
                      </label>
                      <Select value={formData.startPeriod} onValueChange={(value) => handleInputChange("startPeriod", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Pilih periode" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="2025-1">Tahun Ajaran 2025/2026 Semester 1</SelectItem>
                          <SelectItem value="2025-2">Tahun Ajaran 2025/2026 Semester 2</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Upload Dokumen */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Upload className="mr-2 h-5 w-5" />
                    Upload Dokumen
                  </CardTitle>
                  <CardDescription>
                    Upload dokumen dalam format PDF atau JPG (max 5MB per file)
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {requirements.map((req, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                      <span className="text-sm">{req}</span>
                      <Button variant="outline" size="sm">
                        <Upload className="mr-2 h-4 w-4" />
                        Upload
                      </Button>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Persetujuan */}
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-3">
                    <Checkbox
                      id="agreement"
                      checked={formData.agreement}
                      onCheckedChange={(checked) => 
                        setFormData(prev => ({ ...prev, agreement: checked as boolean }))
                      }
                    />
                    <label htmlFor="agreement" className="text-sm text-gray-600 leading-relaxed">
                      Saya menyatakan bahwa data yang saya berikan adalah benar dan dapat dipertanggungjawabkan. 
                      Saya bersedia mengikuti semua peraturan yang berlaku di Pondok Pesantren Al-Hidayah 
                      dan akan mematuhi tata tertib yang telah ditetapkan.
                    </label>
                  </div>
                </CardContent>
              </Card>

              {/* Submit Button */}
              <div className="text-center">
                <Button 
                  type="submit"
                  size="lg"
                  className="bg-islamic-gradient hover:opacity-90 text-white px-12 py-4 text-lg"
                >
                  Kirim Pendaftaran
                </Button>
                <p className="text-sm text-gray-500 mt-4">
                  Dengan mengirim formulir ini, Anda menyetujui syarat dan ketentuan yang berlaku.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Registration;
