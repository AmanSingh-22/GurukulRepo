import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navigationLinks = [
    { href: "/", label: "Home", isRoute: true },
    { href: "/about-us", label: "About Us", isRoute: true },
    { href: "/gurukuls", label: "Locations", isRoute: true },
    { href: "/blog", label: "Blogs", isRoute: true },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 flex items-center justify-center">
            <img 
              src="/lovable-uploads/8269a946-8aae-4c6d-a7e7-1e19bf112af2.png"
              alt="Ved Vignan Maha Vidya Peeth Logo" 
              className="w-full h-full object-contain"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.nextElementSibling?.classList.remove('hidden');
              }}
            />
            <div className="hidden w-8 h-8 bg-gradient-hero rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">ॐ</span>
            </div>
          </div>
          <span className="text-xl font-bold text-foreground">Ved Vignan Maha Vidya Peeth</span>
        </div>
        
        {/* Desktop Navigation and Donate Button */}
        <div className="hidden lg:flex items-center space-x-10">
          {navigationLinks.map((link) => (
            link.isRoute ? (
              <Link
                key={link.href}
                to={link.href}
                className={`text-foreground hover:text-primary transition-colors whitespace-nowrap px-2 ${
                  location.pathname === link.href ? 'text-primary font-semibold' : ''
                }`}
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.href}
                href={link.href}
                className="text-foreground hover:text-primary transition-colors whitespace-nowrap px-2"
              >
                {link.label}
              </a>
            )
          ))}
          <Button variant="hero" size="sm" asChild>
            <Link to="/donate">
              Donate Now
            </Link>
          </Button>
        </div>

        {/* Mobile Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="lg:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <div className="flex flex-col space-y-4 mt-8">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-8 h-8 flex items-center justify-center">
                  <img 
                    src="/lovable-uploads/8269a946-8aae-4c6d-a7e7-1e19bf112af2.png" 
                    alt="Ved Vignan Maha Vidya Peeth Logo" 
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.nextElementSibling?.classList.remove('hidden');
                    }}
                  />
                  <div className="hidden w-8 h-8 bg-gradient-hero rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">ॐ</span>
                  </div>
                </div>
                <span className="text-lg font-bold text-foreground">Ved Vignan Maha Vidya Peeth</span>
              </div>
              
              {navigationLinks.map((link) => (
                link.isRoute ? (
                  <Link
                    key={link.href}
                    to={link.href}
                    className={`text-foreground hover:text-primary transition-colors py-2 text-lg ${
                      location.pathname === link.href ? 'text-primary font-semibold' : ''
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-foreground hover:text-primary transition-colors py-2 text-lg"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </a>
                )
              ))}
              
              <div className="pt-4">
                <Button variant="hero" className="w-full" asChild onClick={() => setIsOpen(false)}>
                  <Link to="/donate">
                    Donate Now
                  </Link>
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navbar;
