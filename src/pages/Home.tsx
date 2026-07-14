import { useState, useRef, useEffect } from "react";
import { Play, Pause, Volume2 } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { motion } from "framer-motion";

export default function Home() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [streamTitle, setStreamTitle] = useState("Jengka FM Live");
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const eventSource = new EventSource("https://api.zeno.fm/mounts/metadata/subscribe/aazzdcbs2hduv");
    eventSource.onmessage = (event) => {
      try {
        const eventData = JSON.parse(event.data);
        if (event.type === 'message' && eventData.streamTitle) {
          setStreamTitle(eventData.streamTitle);
        }
      } catch (error) {
        console.error('Error parsing metadata JSON:', error);
      }
    };
    return () => eventSource.close();
  }, []);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(e => console.error("Playback failed", e));
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col space-y-16 py-8"
    >
      {/* Hero Section */}
      <section 
        className="relative rounded-3xl overflow-hidden text-white shadow-xl bg-cover bg-center"
        style={{ backgroundImage: `url('/assets/images/bg/banner-bg2.jpg')` }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative px-6 py-24 sm:px-12 sm:py-32 lg:px-16 flex flex-col md:flex-row items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="max-w-xl text-center md:text-left z-10 space-y-6"
          >
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl flex flex-col gap-2 sm:gap-4">
              <span>Dengar</span>
              <span className="text-primary">Jengka FM</span>
            </h1>
            <p className="mt-4 text-xl sm:text-2xl text-neutral-200 font-medium">
              Melodi Anda, Stesen Anda.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, type: "spring", stiffness: 100 }}
            className="mt-12 md:mt-0 z-10 w-full max-w-sm"
          >
            <Card className="bg-black/40 backdrop-blur-md border-primary/30 text-white shadow-2xl">
              <CardContent className="p-6">
                <div className="flex flex-col items-center space-y-6">
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-primary bg-white shadow-[0_0_15px_rgba(255,0,0,0.5)] flex items-center justify-center"
                  >
                    <img src="/assets/images/logo.png" alt="Jengka FM Logo" className="w-full h-full object-contain p-3" />
                    {isPlaying && (
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                        <div className="flex space-x-1">
                          <div className="w-1.5 h-4 bg-primary animate-pulse rounded-full" />
                          <div className="w-1.5 h-6 bg-primary animate-pulse delay-75 rounded-full" />
                          <div className="w-1.5 h-3 bg-primary animate-pulse delay-150 rounded-full" />
                        </div>
                      </div>
                    )}
                  </motion.div>                  
                  <div className="text-center space-y-2 w-full overflow-hidden">
                    <h3 className="font-bold text-lg truncate px-2" title={streamTitle}>{streamTitle}</h3>
                    <p className="text-sm text-neutral-300">DJ KAY ZACK HASBULLAH</p>
                    <div className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-500/20 text-red-100 border border-red-500/30">
                      <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse mr-2"></span>
                      LIVE
                    </div>
                  </div>

                  <audio ref={audioRef} src="https://stream.zeno.fm/aazzdcbs2hduv" />
                  
                  <div className="flex items-center justify-center w-full space-x-4">
                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                      <Button size="icon" variant="ghost" className="text-neutral-300 hover:bg-white/10 hover:text-white rounded-full">
                        <Volume2 className="h-5 w-5" />
                      </Button>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                      <Button 
                        size="icon" 
                        className="h-14 w-14 rounded-full bg-primary text-white hover:bg-primary/90 transition-transform shadow-[0_0_15px_rgba(255,0,0,0.4)] border-none flex items-center justify-center"
                        onClick={togglePlay}
                      >
                        {isPlaying ? (
                          <Pause className="h-6 w-6" />
                        ) : (
                          <Play className="h-6 w-6 translate-x-[1px]" />
                        )}
                      </Button>
                    </motion.div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Music Show Features */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center py-12">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <div className="inline-block px-4 py-1.5 bg-primary/10 text-primary border border-primary/20 rounded-full text-sm font-semibold tracking-wide uppercase">Perkhidmatan Muzik & DJ</div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground leading-tight">
            Perkhidmatan DJ Jengka Premium & Campuran Lagu Hit Global
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Temui pelbagai pilihan muzik yang menawan dengan mendengarkan koleksi lagu campuran kami yang menarik dari Malaysia dan pelbagai destinasi antarabangsa. Mencari hiburan acara terbaik? <strong>Perkhidmatan DJ Jengka</strong> oleh Jengka FM menyediakan pengacaraan DJ dan kurasi muzik bertaraf tinggi untuk perkahwinan, acara korporat, dan parti di seluruh daerah Maran dan sekitarnya, menawarkan pengalaman pendengaran yang sungguh mengasyikkan.
          </p>
          <div className="flex space-x-8 pt-4">
            <motion.div whileHover={{ y: -5 }} className="bg-muted/50 p-6 rounded-2xl border border-border">
              <p className="text-3xl font-extrabold text-primary">128 KBPS</p>
              <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mt-1">Kualiti Audio</p>
            </motion.div>
            <motion.div whileHover={{ y: -5 }} className="bg-muted/50 p-6 rounded-2xl border border-border">
              <p className="text-3xl font-extrabold text-primary">50+</p>
              <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mt-1">Pendengar Aktif</p>
            </motion.div>
          </div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative rounded-2xl overflow-hidden shadow-2xl group border border-border"
        >
          <img 
            src="/assets/images/shows/music/4.jpg" 
            alt="DJ Mixing" 
            className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex items-end">
             <div className="p-8">
               <h3 className="text-white text-xl font-bold">Pengalaman Premium</h3>
               <p className="text-neutral-300 mt-2">Penstriman jelas ke seluruh dunia</p>
             </div>
          </div>
        </motion.div>
      </section>
    </motion.div>
  );
}
