import { ReactNode, useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Home, 
  BookOpen, 
  BarChart3, 
  Users, 
  Settings, 
  Bot,
  Sun,
  Moon,
  Menu,
  X
} from "lucide-react";
import { cn } from "@/lib/utils";
import AIChatbot from "./AIChatbot";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showChatbot, setShowChatbot] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const navigation = [
    { name: 'Dashboard', href: '/dashboard', icon: Home },
    { name: 'Courses', href: '/courses', icon: BookOpen },
    { name: 'Analytics', href: '/analytics', icon: BarChart3 },
    { name: 'Study Rooms', href: '/study-rooms', icon: Users },
    { name: 'Settings', href: '/settings', icon: Settings },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="glass-navbar fixed top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-poppins font-bold text-gradient">
                EduMind AI
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navigation.map((item) => (
                <Link key={item.name} to={item.href}>
                  <Button
                    variant={isActive(item.href) ? "default" : "ghost"}
                    size="sm"
                    className={cn(
                      "transition-all duration-normal",
                      isActive(item.href) 
                        ? "bg-primary text-primary-foreground hover:bg-primary/90" 
                        : "hover:bg-glass-bg"
                    )}
                  >
                    <item.icon className="w-4 h-4 mr-2" />
                    {item.name}
                  </Button>
                </Link>
              ))}
            </div>

            {/* Theme Toggle & Mobile Menu */}
            <div className="flex items-center space-x-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setDarkMode(!darkMode)}
                className="hover:bg-glass-bg"
              >
                {darkMode ? (
                  <Sun className="w-4 h-4" />
                ) : (
                  <Moon className="w-4 h-4" />
                )}
              </Button>
              
              <Button
                variant="ghost"
                size="sm"
                className="md:hidden"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? (
                  <X className="w-4 h-4" />
                ) : (
                  <Menu className="w-4 h-4" />
                )}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden border-t border-glass-border">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Button
                      variant={isActive(item.href) ? "default" : "ghost"}
                      size="sm"
                      className={cn(
                        "w-full justify-start",
                        isActive(item.href) 
                          ? "bg-primary text-primary-foreground" 
                          : "hover:bg-glass-bg"
                      )}
                    >
                      <item.icon className="w-4 h-4 mr-2" />
                      {item.name}
                    </Button>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-16 min-h-screen">
        {children}
      </main>

      {/* AI Chatbot Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setShowChatbot(!showChatbot)}
          size="lg"
          className="rounded-full w-14 h-14 bg-gradient-primary hover:shadow-glow transition-all duration-normal hover:scale-110"
        >
          <Bot className="w-6 h-6 text-white" />
        </Button>
      </div>

      {/* AI Chatbot */}
      {showChatbot && (
        <AIChatbot onClose={() => setShowChatbot(false)} />
      )}
    </div>
  );
};

export default Layout;