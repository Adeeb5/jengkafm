import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Button } from "./button";

export function PwaInstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [showPrompt, setShowPrompt] = useState(false);

  useEffect(() => {
    const handler = (e: Event) => {
      // Prevent Chrome 67 and earlier from automatically showing the prompt
      e.preventDefault();
      // Stash the event so it can be triggered later.
      setDeferredPrompt(e);
      // Wait a few seconds before showing to avoid interrupting the user immediately
      setTimeout(() => setShowPrompt(true), 3000);
    };

    window.addEventListener("beforeinstallprompt", handler);

    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  const handleInstall = async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === 'accepted') {
      setDeferredPrompt(null);
      setShowPrompt(false);
    }
  };

  return (
    <AnimatePresence>
      {showPrompt && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className="fixed bottom-4 left-4 right-4 md:left-6 md:right-auto md:w-[350px] bg-card border border-border shadow-[0_0_40px_rgba(0,0,0,0.1)] dark:shadow-[0_0_40px_rgba(255,0,0,0.05)] rounded-2xl p-4 z-[100] flex items-start space-x-4"
        >
          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
            <img src="/pwa-icon.png" alt="Icon" className="w-8 h-8 object-contain drop-shadow-md rounded-md" />
          </div>
          <div className="flex-1">
            <h4 className="font-semibold text-foreground">Pasang Aplikasi</h4>
            <p className="text-sm text-muted-foreground mt-1">Pasang JengkaFM untuk capaian pantas di skrin utama anda!</p>
            <div className="mt-3 flex items-center space-x-2">
              <Button size="sm" onClick={handleInstall} className="w-full font-bold">
                Pasang Sekarang
              </Button>
            </div>
          </div>
          <button onClick={() => setShowPrompt(false)} className="text-muted-foreground hover:text-foreground shrink-0 p-1">
            <X className="w-5 h-5" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
