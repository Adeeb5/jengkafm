import { motion, AnimatePresence } from 'framer-motion';
import { Play, Square, Volume2, VolumeX } from 'lucide-react';
import { useAudio } from '../../context/AudioContext';
import { useLocation } from 'react-router-dom';
import { Slider } from '../ui/slider';

export default function AudioPlayer() {
  const { isPlaying, isMuted, streamTitle, togglePlay, toggleMute, volume, setVolume } = useAudio();
  const location = useLocation();
  
  // Optionally, hide the floating player on the Home page since it has its own large player.
  // But maybe it's better to always show it if it's playing, or just show it when away from Home.
  const isHomePage = location.pathname === '/';
  
  if (isHomePage) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-md"
      >
        <div className="bg-white dark:bg-card border border-border shadow-2xl rounded-full p-2 pr-6 flex items-center space-x-4 backdrop-blur-lg bg-opacity-90">
          <div className="relative shrink-0">
            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary bg-white flex items-center justify-center shadow-inner">
              <img src="/assets/images/logo.png" alt="Logo" className="w-full h-full object-contain p-1" />
            </div>
            {isPlaying && (
              <span className="absolute bottom-0 right-0 w-3 h-3 bg-red-500 border-2 border-white rounded-full animate-pulse"></span>
            )}
          </div>
          
          <div className="flex-1 overflow-hidden flex flex-col justify-center">
            <h4 className="text-sm font-bold text-foreground truncate">{streamTitle}</h4>
            <p className="text-xs text-muted-foreground flex items-center">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 mr-1.5 animate-pulse"></span>
              LIVE
            </p>
          </div>

            <div className="flex items-center space-x-2 shrink-0">
              <div className="flex items-center group relative">
                <button
                  onClick={toggleMute}
                  className="p-2 text-muted-foreground hover:text-foreground hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-full transition-colors"
                >
                  {isMuted || volume === 0 ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                </button>
                
                <div className="w-20 flex items-center pr-2">
                  <Slider
                    value={[isMuted ? 0 : volume * 100]}
                    max={100}
                    step={1}
                    onValueChange={(vals) => {
                      const v = Array.isArray(vals) ? vals[0] : vals;
                      setVolume(v / 100);
                    }}
                    className="cursor-pointer"
                  />
                </div>
              </div>
              
              <button
                onClick={togglePlay}
                className="w-10 h-10 flex items-center justify-center bg-primary text-white rounded-full hover:bg-primary/90 transition-transform hover:scale-105 active:scale-95 shadow-md"
              >
                {isPlaying ? <Square className="w-4 h-4" /> : <Play className="w-5 h-5 ml-1" />}
              </button>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    );
  }
