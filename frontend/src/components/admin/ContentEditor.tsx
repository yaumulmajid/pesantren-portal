
import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { 
  Edit, 
  Save, 
  Eye, 
  Plus,
  Home,
  User,
  BookOpen,
  Image as ImageIcon,
  DollarSign,
  UserPlus,
  Phone
} from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const ContentEditor = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const sections = [
    { id: "hero", name: "Hero Section", icon: Home, description: "Banner utama website" },
    { id: "about", name: "About Us", icon: User, description: "Tentang pesantren" },
    { id: "programs", name: "Programs", icon: BookOpen, description: "Program pendidikan" },
    { id: "gallery", name: "Gallery", icon: ImageIcon, description: "Galeri foto" },
    { id: "donation", name: "Donation", icon: DollarSign, description: "Halaman donasi" },
    { id: "registration", name: "Registration", icon: UserPlus, description: "Pendaftaran santri" },
    { id: "contact", name: "Contact", icon: Phone, description: "Kontak informasi" }
  ];

  const [heroData, setHeroData] = useState({
    title: "Selamat Datang di Pondok Pesantren Miftahul Amanah",
    subtitle: "Membentuk Generasi Muslim yang Berakhlak Mulia",
    description: "Lembaga pendidikan Islam yang menggabungkan nilai-nilai tradisional dengan pendekatan modern",
    ctaText: "Daftar Sekarang"
  });

  useEffect(() => {
    if (activeSection === "hero") {
      fetchHeroContent();
    }
  }, [activeSection]);

  const fetchHeroContent = async () => {
    try {
      const { data } = await supabase
        .from('content')
        .select('*')
        .eq('type', 'hero')
        .eq('slug', 'hero-welcome')
        .single();

      if (data && data.metadata && typeof data.metadata === 'object') {
        const metadata = data.metadata as any;
        setHeroData({
          title: metadata.title || heroData.title,
          subtitle: metadata.subtitle || heroData.subtitle,
          description: data.content || heroData.description,
          ctaText: metadata.ctaText || heroData.ctaText
        });
      }
    } catch (error) {
      console.error('Error fetching hero content:', error);
    }
  };

  const saveHeroContent = async () => {
    setLoading(true);
    try {
      const { error } = await supabase
        .from('content')
        .upsert({
          slug: 'hero-welcome',
          title: heroData.title,
          content: heroData.description,
          type: 'hero',
          status: 'published',
          metadata: {
            title: heroData.title,
            subtitle: heroData.subtitle,
            ctaText: heroData.ctaText
          }
        });

      if (error) throw error;

      toast({
        title: "Success",
        description: "Hero content berhasil disimpan!",
      });
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    }
    setLoading(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Content Editor</h2>
          <p className="text-gray-600">Edit konten website pesantren</p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline">
            <Eye className="h-4 w-4 mr-2" />
            Preview
          </Button>
          <Button>
            <Save className="h-4 w-4 mr-2" />
            Save All
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle className="text-lg">Sections</CardTitle>
            <CardDescription>Pilih section untuk diedit</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {sections.map((section) => (
                <Button
                  key={section.id}
                  variant={activeSection === section.id ? "default" : "ghost"}
                  className="w-full justify-start"
                  onClick={() => setActiveSection(section.id)}
                >
                  <section.icon className="h-4 w-4 mr-2" />
                  {section.name}
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="lg:col-span-3">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Edit className="h-5 w-5 mr-2" />
              Edit {sections.find(s => s.id === activeSection)?.name}
            </CardTitle>
            <CardDescription>
              {sections.find(s => s.id === activeSection)?.description}
            </CardDescription>
          </CardHeader>
          <CardContent>
            {activeSection === "hero" && (
              <div className="space-y-4">
                <div>
                  <Label htmlFor="hero-title">Judul Utama</Label>
                  <Input
                    id="hero-title"
                    value={heroData.title}
                    onChange={(e) => setHeroData({...heroData, title: e.target.value})}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="hero-subtitle">Subtitle</Label>
                  <Input
                    id="hero-subtitle"
                    value={heroData.subtitle}
                    onChange={(e) => setHeroData({...heroData, subtitle: e.target.value})}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="hero-desc">Deskripsi</Label>
                  <Textarea
                    id="hero-desc"
                    value={heroData.description}
                    onChange={(e) => setHeroData({...heroData, description: e.target.value})}
                    className="mt-1"
                    rows={3}
                  />
                </div>
                <div>
                  <Label htmlFor="hero-cta">Teks Button CTA</Label>
                  <Input
                    id="hero-cta"
                    value={heroData.ctaText}
                    onChange={(e) => setHeroData({...heroData, ctaText: e.target.value})}
                    className="mt-1"
                  />
                </div>
                <div className="flex space-x-2 pt-4">
                  <Button onClick={saveHeroContent} disabled={loading}>
                    <Save className="h-4 w-4 mr-2" />
                    {loading ? "Saving..." : "Save Changes"}
                  </Button>
                  <Button variant="outline">
                    <Eye className="h-4 w-4 mr-2" />
                    Preview
                  </Button>
                </div>
              </div>
            )}

            {activeSection !== "hero" && (
              <div className="text-center py-12 text-gray-500">
                <Edit className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                <p>Editor untuk {sections.find(s => s.id === activeSection)?.name} akan segera tersedia</p>
                <p className="text-sm mt-2">Silakan pilih Hero Section untuk melihat contoh editor</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ContentEditor;
