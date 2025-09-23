import { useState } from "react";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="text-2xl font-bold text-primary">
            Thiru Annamalaiyar
          </div>
          <div className="hidden text-sm text-muted-foreground md:block">
            Agricultural Machinery
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#home" className="text-sm font-medium transition-colors hover:text-primary">
            Home
          </a>
          <a href="#machinery" className="text-sm font-medium transition-colors hover:text-primary">
            Machinery
          </a>
          <a href="#spare-parts" className="text-sm font-medium transition-colors hover:text-primary">
            Spare Parts
          </a>
          <a href="#services" className="text-sm font-medium transition-colors hover:text-primary">
            Services
          </a>
          <a href="#contact" className="text-sm font-medium transition-colors hover:text-primary">
            Contact
          </a>
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center space-x-3">
          <Button variant="outline" size="sm" className="btn-quote">
            <Phone className="mr-2 h-4 w-4" />
            Request Quote
          </Button>
          <Button className="btn-cta">
            Shop Spare Parts
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="border-t bg-background md:hidden">
          <div className="container px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <a href="#home" className="text-sm font-medium transition-colors hover:text-primary">
                Home
              </a>
              <a href="#machinery" className="text-sm font-medium transition-colors hover:text-primary">
                Machinery
              </a>
              <a href="#spare-parts" className="text-sm font-medium transition-colors hover:text-primary">
                Spare Parts
              </a>
              <a href="#services" className="text-sm font-medium transition-colors hover:text-primary">
                Services
              </a>
              <a href="#contact" className="text-sm font-medium transition-colors hover:text-primary">
                Contact
              </a>
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="outline" size="sm" className="btn-quote w-full">
                  <Phone className="mr-2 h-4 w-4" />
                  Request Quote
                </Button>
                <Button className="btn-cta w-full">
                  Shop Spare Parts
                </Button>
              </div>
            </nav>
          </div>
        </div>
      )}

      {/* WhatsApp Sticky Button - Mobile */}
      <div className="fixed bottom-4 right-4 z-50 md:hidden">
        <Button 
          className="btn-cta rounded-full h-14 w-14 shadow-lg"
          onClick={() => window.open('https://wa.me/919876543210', '_blank')}
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      </div>
    </header>
  );
};

export default Header;