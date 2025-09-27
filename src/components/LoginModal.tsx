import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GraduationCap, Shield, Eye, EyeOff, X } from "lucide-react";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function LoginModal({ isOpen, onClose }: LoginModalProps) {
  const [showStudentPassword, setShowStudentPassword] = useState(false);
  const [showAdminPassword, setShowAdminPassword] = useState(false);
  const [studentEmail, setStudentEmail] = useState("student@college.edu");
  const [adminEmail, setAdminEmail] = useState("admin@college.edu");

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md bg-background border border-border">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <div className="text-center flex-1">
              <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-primary to-success bg-clip-text text-transparent">
                Login to EduSafe
              </DialogTitle>
              <DialogDescription className="mt-2">
                Choose your role to access the disaster preparedness platform
              </DialogDescription>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="absolute right-4 top-4"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </DialogHeader>

        <Tabs defaultValue="student" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="student" className="flex items-center space-x-2">
              <GraduationCap className="h-4 w-4" />
              <span>Student</span>
            </TabsTrigger>
            <TabsTrigger value="admin" className="flex items-center space-x-2">
              <Shield className="h-4 w-4" />
              <span>Admin</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="student" className="space-y-4 mt-6">
            <div className="space-y-2">
              <Label htmlFor="student-email">Email</Label>
              <Input
                id="student-email"
                type="email"
                value={studentEmail}
                onChange={(e) => setStudentEmail(e.target.value)}
                placeholder="student@college.edu"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="student-password">Password</Label>
              <div className="relative">
                <Input
                  id="student-password"
                  type={showStudentPassword ? "text" : "password"}
                  placeholder="Enter your password"
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 h-8 w-8"
                  onClick={() => setShowStudentPassword(!showStudentPassword)}
                >
                  {showStudentPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </Button>
              </div>
            </div>
            <Button className="w-full bg-gradient-to-r from-primary to-success">
              Login as Student
            </Button>
            <p className="text-sm text-muted-foreground text-center">
              Don't have an account? Contact your institution's admin.
            </p>
          </TabsContent>

          <TabsContent value="admin" className="space-y-4 mt-6">
            <div className="space-y-2">
              <Label htmlFor="admin-email">Admin Email</Label>
              <Input
                id="admin-email"
                type="email"
                value={adminEmail}
                onChange={(e) => setAdminEmail(e.target.value)}
                placeholder="admin@college.edu"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="admin-password">Password</Label>
              <div className="relative">
                <Input
                  id="admin-password"
                  type={showAdminPassword ? "text" : "password"}
                  placeholder="Enter admin password"
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 h-8 w-8"
                  onClick={() => setShowAdminPassword(!showAdminPassword)}
                >
                  {showAdminPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </Button>
              </div>
            </div>
            <Button className="w-full bg-gradient-to-r from-emergency to-warning">
              Login as Admin
            </Button>
            <p className="text-sm text-muted-foreground text-center">
              Don't have an account? Contact your institution's admin.
            </p>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}