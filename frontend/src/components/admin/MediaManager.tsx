
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Upload, 
  Search, 
  Grid,
  List,
  Image as ImageIcon,
  Video,
  File,
  Trash2,
  Eye,
  Download,
  Plus
} from "lucide-react";

const MediaManager = () => {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [searchTerm, setSearchTerm] = useState("");

  const mediaFiles = [
    {
      id: 1,
      name: "hero-mosque.jpg",
      type: "image",
      size: "2.4 MB",
      uploadDate: "2024-01-15",
      url: "/placeholder.svg"
    },
    {
      id: 2,
      name: "students-learning.jpg", 
      type: "image",
      size: "1.8 MB",
      uploadDate: "2024-01-14",
      url: "/placeholder.svg"
    },
    {
      id: 3,
      name: "program-video.mp4",
      type: "video", 
      size: "15.2 MB",
      uploadDate: "2024-01-13",
      url: "/placeholder.svg"
    },
    {
      id: 4,
      name: "brochure.pdf",
      type: "document",
      size: "890 KB", 
      uploadDate: "2024-01-12",
      url: "/placeholder.svg"
    }
  ];

  const getFileIcon = (type: string) => {
    switch (type) {
      case "image":
        return ImageIcon;
      case "video":
        return Video;
      default:
        return File;
    }
  };

  const getFileColor = (type: string) => {
    switch (type) {
      case "image":
        return "text-green-600";
      case "video":
        return "text-blue-600";
      default:
        return "text-gray-600";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Media Manager</h2>
          <p className="text-gray-600">Kelola gambar, video, dan file lainnya</p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Upload Media
        </Button>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Media Library</CardTitle>
              <CardDescription>Total {mediaFiles.length} files</CardDescription>
            </div>
            <div className="flex items-center space-x-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Cari media..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 w-64"
                />
              </div>
              <div className="flex rounded-lg border">
                <Button
                  variant={viewMode === "grid" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("grid")}
                >
                  <Grid className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("list")}
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          {viewMode === "grid" ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
              {mediaFiles.map((file) => {
                const IconComponent = getFileIcon(file.type);
                return (
                  <div key={file.id} className="group relative border rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="aspect-square flex items-center justify-center bg-gray-50 rounded-lg mb-2">
                      {file.type === "image" ? (
                        <img src="/placeholder.svg" alt={file.name} className="w-full h-full object-cover rounded-lg" />
                      ) : (
                        <IconComponent className={`h-8 w-8 ${getFileColor(file.type)}`} />
                      )}
                    </div>
                    <p className="text-sm font-medium truncate">{file.name}</p>
                    <p className="text-xs text-gray-500">{file.size}</p>
                    <Badge variant="outline" className="mt-1 text-xs">
                      {file.type}
                    </Badge>
                    <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="flex space-x-1">
                        <Button size="sm" variant="secondary" className="h-6 w-6 p-0">
                          <Eye className="h-3 w-3" />
                        </Button>
                        <Button size="sm" variant="secondary" className="h-6 w-6 p-0">
                          <Download className="h-3 w-3" />
                        </Button>
                        <Button size="sm" variant="destructive" className="h-6 w-6 p-0">
                          <Trash2 className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="space-y-2">
              {mediaFiles.map((file) => {
                const IconComponent = getFileIcon(file.type);
                return (
                  <div key={file.id} className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50">
                    <div className="flex items-center space-x-3">
                      <IconComponent className={`h-5 w-5 ${getFileColor(file.type)}`} />
                      <div>
                        <p className="font-medium">{file.name}</p>
                        <p className="text-sm text-gray-500">{file.size} • {file.uploadDate}</p>
                      </div>
                      <Badge variant="outline">{file.type}</Badge>
                    </div>
                    <div className="flex space-x-1">
                      <Button size="sm" variant="ghost">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="ghost">
                        <Download className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="ghost">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Upload className="h-5 w-5 mr-2" />
            Upload New Media
          </CardTitle>
          <CardDescription>Drag and drop files atau klik untuk browse</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-gray-400 transition-colors">
            <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <p className="text-lg font-medium mb-2">Drop files here to upload</p>
            <p className="text-gray-500 mb-4">Atau klik tombol di bawah untuk memilih file</p>
            <Button>
              <Upload className="h-4 w-4 mr-2" />
              Choose Files
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MediaManager;
