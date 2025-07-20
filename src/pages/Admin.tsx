
import { useState } from "react";
import { Navigate } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  LayoutDashboard, 
  FileText, 
  Image, 
  Users, 
  Settings, 
  Eye,
  Edit,
  Trash2,
  Plus,
  LogOut
} from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import AdminDashboard from "@/components/admin/AdminDashboard";
import ContentEditor from "@/components/admin/ContentEditor";
import MediaManager from "@/components/admin/MediaManager";
import UserManager from "@/components/admin/UserManager";
import AdminSettings from "@/components/admin/AdminSettings";

const Admin = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const { user, loading, signOut } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-islamic-green mx-auto mb-4"></div>
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  const handleSignOut = async () => {
    await signOut();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="border-b bg-white">
        <div className="flex h-16 items-center px-6">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <LayoutDashboard className="h-6 w-6 text-islamic-green" />
              <h1 className="text-xl font-bold">Admin CMS</h1>
            </div>
            <Badge variant="secondary">Miftahul Amanah</Badge>
          </div>
          <div className="ml-auto flex items-center space-x-4">
            <span className="text-sm text-gray-600">{user.email}</span>
            <Button variant="outline" size="sm">
              <Eye className="h-4 w-4 mr-2" />
              Preview Site
            </Button>
            <Button variant="outline" size="sm" onClick={handleSignOut}>
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </div>

      <div className="flex">
        <div className="w-64 border-r bg-white min-h-screen">
          <nav className="p-4">
            <div className="space-y-2">
              <Button
                variant={activeTab === "dashboard" ? "default" : "ghost"}
                className="w-full justify-start"
                onClick={() => setActiveTab("dashboard")}
              >
                <LayoutDashboard className="h-4 w-4 mr-2" />
                Dashboard
              </Button>
              <Button
                variant={activeTab === "content" ? "default" : "ghost"}
                className="w-full justify-start"
                onClick={() => setActiveTab("content")}
              >
                <FileText className="h-4 w-4 mr-2" />
                Content
              </Button>
              <Button
                variant={activeTab === "media" ? "default" : "ghost"}
                className="w-full justify-start"
                onClick={() => setActiveTab("media")}
              >
                <Image className="h-4 w-4 mr-2" />
                Media
              </Button>
              <Button
                variant={activeTab === "users" ? "default" : "ghost"}
                className="w-full justify-start"
                onClick={() => setActiveTab("users")}
              >
                <Users className="h-4 w-4 mr-2" />
                Users
              </Button>
              <Button
                variant={activeTab === "settings" ? "default" : "ghost"}
                className="w-full justify-start"
                onClick={() => setActiveTab("settings")}
              >
                <Settings className="h-4 w-4 mr-2" />
                Settings
              </Button>
            </div>
          </nav>
        </div>

        <div className="flex-1 p-6">
          {activeTab === "dashboard" && <AdminDashboard />}
          {activeTab === "content" && <ContentEditor />}
          {activeTab === "media" && <MediaManager />}
          {activeTab === "users" && <UserManager />}
          {activeTab === "settings" && <AdminSettings />}
        </div>
      </div>
    </div>
  );
};

export default Admin;
