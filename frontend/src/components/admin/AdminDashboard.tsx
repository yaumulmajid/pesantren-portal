
import { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Users, 
  FileText, 
  Image, 
  TrendingUp,
  Eye,
  Edit,
  Calendar,
  Activity
} from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

const AdminDashboard = () => {
  const [stats, setStats] = useState([
    {
      title: "Total Pengunjung",
      value: "0",
      change: "+0%",
      icon: Users,
      color: "text-blue-600"
    },
    {
      title: "Konten Aktif",
      value: "0",
      change: "+0",
      icon: FileText,
      color: "text-green-600"
    },
    {
      title: "Media Files",
      value: "0",
      change: "+0",
      icon: Image,
      color: "text-purple-600"
    },
    {
      title: "Total Users",
      value: "0",
      change: "+0",
      icon: TrendingUp,
      color: "text-orange-600"
    }
  ]);

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      // Fetch content count
      const { count: contentCount } = await supabase
        .from('content')
        .select('*', { count: 'exact', head: true });

      // Fetch media count
      const { count: mediaCount } = await supabase
        .from('media')
        .select('*', { count: 'exact', head: true });

      // Fetch profiles count
      const { count: profilesCount } = await supabase
        .from('profiles')
        .select('*', { count: 'exact', head: true });

      // Fetch analytics count
      const { count: analyticsCount } = await supabase
        .from('analytics')
        .select('*', { count: 'exact', head: true });

      setStats([
        {
          title: "Total Pengunjung",
          value: analyticsCount?.toString() || "0",
          change: "+0%",
          icon: Users,
          color: "text-blue-600"
        },
        {
          title: "Konten Aktif",
          value: contentCount?.toString() || "0",
          change: "+0",
          icon: FileText,
          color: "text-green-600"
        },
        {
          title: "Media Files",
          value: mediaCount?.toString() || "0",
          change: "+0",
          icon: Image,
          color: "text-purple-600"
        },
        {
          title: "Total Users",
          value: profilesCount?.toString() || "0",
          change: "+0",
          icon: TrendingUp,
          color: "text-orange-600"
        }
      ]);
    } catch (error) {
      console.error('Error fetching stats:', error);
    }
  };

  const recentActivities = [
    {
      action: "Edit konten About Us",
      time: "2 jam yang lalu",
      user: "Admin"
    },
    {
      action: "Upload gambar kegiatan",
      time: "4 jam yang lalu", 
      user: "Admin"
    },
    {
      action: "Tambah program baru",
      time: "1 hari yang lalu",
      user: "Admin"
    }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-2">Dashboard</h2>
        <p className="text-gray-600">Selamat datang di Admin CMS Pondok Pesantren Miftahul Amanah</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <stat.icon className={`h-4 w-4 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-green-600">
                {stat.change} dari bulan lalu
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Activity className="h-5 w-5 mr-2" />
              Aktivitas Terbaru
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivities.map((activity, index) => (
                <div key={index} className="flex items-center justify-between border-b pb-2 last:border-b-0">
                  <div>
                    <p className="font-medium">{activity.action}</p>
                    <p className="text-sm text-gray-500">{activity.time}</p>
                  </div>
                  <Badge variant="outline">{activity.user}</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Calendar className="h-5 w-5 mr-2" />
              Quick Actions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <Button className="w-full justify-start">
                <Edit className="h-4 w-4 mr-2" />
                Edit Homepage
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <FileText className="h-4 w-4 mr-2" />
                Tambah Berita
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Image className="h-4 w-4 mr-2" />
                Upload Media
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Eye className="h-4 w-4 mr-2" />
                Preview Website
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;
