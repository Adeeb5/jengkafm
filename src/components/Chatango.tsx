import { useEffect, useRef, useState } from "react";
import { MessageSquare, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Chatango() {
  const chatRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!chatRef.current || !isOpen) return;
    
    // Clear any previous instances to handle React StrictMode or navigation re-renders
    chatRef.current.innerHTML = '';

    const script = document.createElement("script");
    script.id = "cid0020000358024307098";
    script.src = "//st.chatango.com/js/gz/emb.js";
    script.async = true;
    script.setAttribute("data-cfasync", "false");
    script.style.width = "100%";
    script.style.height = "100%";
    // Updated JSON to align with Shadcn UI colors (minimalist light theme)
    script.innerHTML = JSON.stringify({
      handle: "jengkafm",
      arch: "js",
      styles: {
        a: "FFFFFF", // Main bg
        b: 100,
        c: "000000", // Main text
        d: "F4F4F5", // Header/Footer bg
        e: "FFFFFF", // Inner bg
        h: "FFFFFF", // Message bg
        k: "000000", // Message text
        l: "E11D48", // Link color
        m: "E11D48", // Button color
        n: "FFFFFF", // Button text
        p: "10",
        q: "CCCCCC", // Border color
        r: 100,
        ab: false,
        usricon: 0,
        sbc: "D4D4D8", // Scrollbar color
        surl: 0,
        allowpm: 0,
        cnrs: "0.85"
      }
    });

    chatRef.current.appendChild(script);
  }, [isOpen]);

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-20 md:bottom-24 right-4 md:right-6 z-50 w-[calc(100vw-2rem)] sm:w-[350px] h-[500px] max-h-[70vh] bg-card border border-border rounded-xl shadow-2xl flex flex-col overflow-hidden"
          >
            <div className="flex items-center justify-between p-4 border-b border-border bg-muted/30">
              <div className="flex items-center space-x-2">
                <MessageSquare className="w-5 h-5 text-primary" />
                <h3 className="font-semibold text-foreground">Jengka FM Chat</h3>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-muted-foreground hover:text-foreground transition-colors p-1 hover:bg-neutral-200 dark:hover:bg-neutral-800 rounded-md"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="flex-1 w-full bg-white relative">
              <div ref={chatRef} className="absolute inset-0 w-full h-full" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-20 md:bottom-24 right-4 md:right-6 z-40 w-12 h-12 md:w-14 md:h-14 bg-primary text-white rounded-full shadow-lg flex items-center justify-center hover:bg-primary/90 transition-colors"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />}
      </motion.button>
    </>
  );
}
