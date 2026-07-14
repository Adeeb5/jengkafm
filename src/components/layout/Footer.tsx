import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaYoutube, FaThreads } from "react-icons/fa6";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-12 md:py-16">
        <div className="flex flex-col items-center justify-center space-y-6">
          <Link to="/" className="flex items-center space-x-2">
            <img src="/assets/images/logo.png" alt="Jengka FM Logo" className="h-10" />
          </Link>
          
          <nav className="flex flex-wrap justify-center gap-6">
            <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">Home</Link>
            <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">About Us</Link>
            <Link to="/feedback" className="text-sm text-muted-foreground hover:text-primary transition-colors">Feedback</Link>
            <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">Contact</Link>
          </nav>
          
          <div className="w-full h-px bg-border max-w-3xl my-4"></div>
          
          <div className="flex w-full max-w-3xl items-center justify-between flex-wrap gap-4">
            <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Jengka FM. All rights reserved.</p>
            <div className="flex space-x-6 text-sm font-medium">
              <a href="https://www.facebook.com/Djemceepasystempahang" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-[#1877F2] transition-colors" aria-label="Facebook">
                <FaFacebook className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/kay_zack_hasbullah/" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-[#E4405F] transition-colors" aria-label="Instagram">
                <FaInstagram className="h-5 w-5" />
              </a>
              <a href="https://www.youtube.com/channel/UCd24ZUbtqQyL_izovhUDfuw/videos?view=0&sort=p" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-[#FF0000] transition-colors" aria-label="YouTube">
                <FaYoutube className="h-5 w-5" />
              </a>
              <a href="https://www.threads.com/@kay_zack_hasbullah" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Threads">
                <FaThreads className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
