import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Shield, Phone, GraduationCap, Activity, LayoutDashboard, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";
import { LoginModal } from "./LoginModal";
import { useAuth } from "@/contexts/AuthContext";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const location = useLocation();
  const { user, signOut } = useAuth();

  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { path: "/emergency-contacts", label: "Emergency Tools", icon: Phone },
    { path: "/education", label: "Education Modules", icon: GraduationCap },
    { path: "/virtual-drills", label: "Virtual Drills", icon: Activity },
    { path: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  ];

  return (
    <nav className="bg-card/95 backdrop-blur-sm border-b border-border/50 sticky top-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <Shield className="h-8 w-8 text-primary group-hover:scale-110 transition-transform" />
            <span className="font-bold text-xl bg-gradient-to-r from-primary to-success bg-clip-text text-transparent">
              EduSafe
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link key={item.path} to={item.path}>
                <Button
                  variant={isActive(item.path) ? "default" : "ghost"}
                  className="flex items-center space-x-2 hover:scale-105 transition-transform"
                >
                  <item.icon className="h-4 w-4" />
                  <span>{item.label}</span>
                </Button>
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            {user ? (
              <Button
                variant="ghost"
                size="icon"
                onClick={signOut}
                className="h-9 w-9 hover:scale-110 transition-transform"
                title="Logout"
              >
                <LogOut className="h-4 w-4" />
              </Button>
            ) : (
              <Button 
                variant="default" 
                className="bg-gradient-to-r from-primary to-success hover:scale-105 transition-transform"
                onClick={() => setIsLoginOpen(true)}
              >
                Login
              </Button>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="hover:scale-110 transition-transform"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-border/50 pb-4">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                >
                  <Button
                    variant={isActive(item.path) ? "default" : "ghost"}
                    className="w-full justify-start space-x-2"
                  >
                    <item.icon className="h-4 w-4" />
                    <span>{item.label}</span>
                  </Button>
                </Link>
              ))}
               <div className="pt-4">
                {user ? (
                  <Button 
                    variant="ghost" 
                    className="w-full justify-start space-x-2"
                    onClick={signOut}
                  >
                    <LogOut className="h-4 w-4" />
                    <span>Logout</span>
                  </Button>
                ) : (
                  <Button 
                    variant="default" 
                    className="w-full bg-gradient-to-r from-primary to-success"
                    onClick={() => setIsLoginOpen(true)}
                  >
                    Login
                  </Button>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Login Modal */}
      {!user && <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />}
    </nav>
  );
}