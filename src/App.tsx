import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Feedback from "./pages/Feedback";
import Contact from "./pages/Contact";

import { ThemeProvider } from "./components/theme-provider";
import ScrollToTop from "./components/ScrollToTop";

import { AudioProvider } from "./context/AudioContext";
import AudioPlayer from "./components/layout/AudioPlayer";
import Chatango from "./components/Chatango";
import { PwaInstallPrompt } from "./components/ui/pwa-install-prompt";

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="jengkafm-theme">
      <AudioProvider>
        <Router>
          <ScrollToTop />
          <div className="flex flex-col min-h-screen bg-background text-foreground transition-colors duration-300 relative pb-20">
            <Navbar />
            <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/feedback" element={<Feedback />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </main>
            <Footer />
            <AudioPlayer />
            <Chatango />
            <PwaInstallPrompt />
          </div>
        </Router>
      </AudioProvider>
    </ThemeProvider>
  );
}


export default App;
