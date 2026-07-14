import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "../ui/button";
import { ModeToggle } from "../mode-toggle";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMenu = () => setIsMobileMenuOpen(false);

  const navLinks = [
    { path: "/", label: "Laman Utama" },
    { path: "/about", label: "Mengenai Kami" },
    { path: "/feedback", label: "Maklum Balas" },
    { path: "/contact", label: "Hubungi Kami" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center space-x-2" onClick={closeMenu}>
          <motion.img 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            src="/assets/images/logo.png" 
            alt="Jengka FM Logo" 
            className="h-10" 
          />
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex flex-1 items-center justify-center space-x-6 lg:space-x-8">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path} 
              className={`text-sm font-medium transition-colors hover:text-primary ${location.pathname === link.path ? "text-primary" : "text-muted-foreground"}`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center space-x-2 sm:space-x-4">
          <ModeToggle />
          <Link to="/contact" className="hidden sm:block" onClick={closeMenu}>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold shadow-md hover:shadow-[0_0_15px_rgba(255,0,0,0.4)] transition-shadow">
                Hubungi Kami
              </Button>
            </motion.div>
          </Link>

          {/* Mobile Menu Toggle */}
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden" 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-background border-b border-border"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link 
                  key={link.path} 
                  to={link.path} 
                  onClick={closeMenu}
                  className={`text-base font-medium p-2 rounded-md transition-colors hover:bg-muted ${location.pathname === link.path ? "text-primary bg-primary/10" : "text-foreground"}`}
                >
                  {link.label}
                </Link>
              ))}
              <Link to="/contact" onClick={closeMenu} className="pt-2 sm:hidden">
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold shadow-md">
                  Hubungi Kami
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
