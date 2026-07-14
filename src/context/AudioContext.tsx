import React, { createContext, useContext, useState, useRef, useEffect } from 'react';

interface AudioContextType {
  isPlaying: boolean;
  isMuted: boolean;
  volume: number;
  streamTitle: string;
  listeners: number;
  togglePlay: () => void;
  toggleMute: () => void;
  setVolume: (volume: number) => void;
}

const AudioContext = createContext<AudioContextType | undefined>(undefined);

export function AudioProvider({ children }: { children: React.ReactNode }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolumeState] = useState(1);
  const [streamTitle, setStreamTitle] = useState("Loading stream info...");
  const [listeners, setListeners] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Setup audio element
    const audio = new Audio("https://stream.zeno.fm/aazzdcbs2hduv");
    audioRef.current = audio;

    // Handle end/pause events if stopped externally
    const handlePause = () => setIsPlaying(false);
    const handlePlay = () => setIsPlaying(true);
    
    audio.addEventListener('pause', handlePause);
    audio.addEventListener('play', handlePlay);

    // Zeno metadata subscription
    const eventSource = new EventSource("https://api.zeno.fm/mounts/metadata/subscribe/aazzdcbs2hduv");
    eventSource.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        if (data && data.streamTitle) {
          setStreamTitle(data.streamTitle);
        } else {
          setStreamTitle("Jengka FM Live");
        }
        if (data && typeof data.listeners === 'number') {
          setListeners(data.listeners);
        } else if (data && typeof data.peakListeners === 'number') {
          // Fallback to peakListeners if listeners is not available
          setListeners(data.peakListeners);
        }
      } catch (e) {
        setStreamTitle("Jengka FM Live");
      }
    };

    return () => {
      audio.removeEventListener('pause', handlePause);
      audio.removeEventListener('play', handlePlay);
      audio.pause();
      audioRef.current = null;
      eventSource.close();
    };
  }, []);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(e => console.error("Playback failed", e));
    }
  };

  const toggleMute = () => {
    if (!audioRef.current) return;
    audioRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const setVolume = (newVolume: number) => {
    if (!audioRef.current) return;
    audioRef.current.volume = newVolume;
    setVolumeState(newVolume);
    if (newVolume > 0 && isMuted) {
      audioRef.current.muted = false;
      setIsMuted(false);
    } else if (newVolume === 0 && !isMuted) {
      audioRef.current.muted = true;
      setIsMuted(true);
    }
  };

  return (
    <AudioContext.Provider value={{ isPlaying, isMuted, volume, streamTitle, listeners, togglePlay, toggleMute, setVolume }}>
      {children}
    </AudioContext.Provider>
  );
}

export function useAudio() {
  const context = useContext(AudioContext);
  if (context === undefined) {
    throw new Error("useAudio must be used within an AudioProvider");
  }
  return context;
}
