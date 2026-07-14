import React, { createContext, useContext, useState, useRef, useEffect } from 'react';

interface AudioContextType {
  isPlaying: boolean;
  isMuted: boolean;
  streamTitle: string;
  togglePlay: () => void;
  toggleMute: () => void;
}

const AudioContext = createContext<AudioContextType | undefined>(undefined);

export function AudioProvider({ children }: { children: React.ReactNode }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [streamTitle, setStreamTitle] = useState("Loading stream info...");
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

  return (
    <AudioContext.Provider value={{ isPlaying, isMuted, streamTitle, togglePlay, toggleMute }}>
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
