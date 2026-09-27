import React, { useState, useRef } from 'react';
import { X, Play, Pause, Volume2, VolumeX, Film } from 'lucide-react';

export default function TeaserModal({ isOpen, onClose }) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  if (!isOpen) return null;

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="fixed inset-0 z-[3000] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 md:p-10 animate-fadeIn">
      
      {/* Outer Video Frame */}
      <div className="relative w-full max-w-5xl aspect-video bg-[#0D0D0D] rounded-3xl border-4 border-[#FFBF00] shadow-[0_0_50px_rgba(255,191,0,0.3)] overflow-hidden flex flex-col justify-between">
        
        {/* Top Header inside player */}
        <div className="relative z-20 flex items-center justify-between p-4 md:p-6 bg-gradient-to-b from-black/80 to-transparent">
          <div className="flex items-center gap-2 bg-[#FFBF00] text-[#6B3E28] px-4 py-1.5 rounded-full border border-[#6B3E28]">
            <Film className="w-5 h-5 text-[#E31010]" />
            <span className="font-display text-sm md:text-base">ARचIVED MOVIE • VOL. 01</span>
          </div>

          <button
            onClick={onClose}
            className="w-12 h-12 bg-[#E31010] hover:bg-white text-white hover:text-[#E31010] font-display text-xl rounded-full flex items-center justify-center border-2 border-white shadow-lg transition-transform transform hover:scale-110 active:scale-95"
            aria-label="Close Teaser Video"
          >
            <X className="w-7 h-7 stroke-[3]" />
          </button>
        </div>

        {/* Video Canvas Element */}
        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <video
            ref={videoRef}
            src="https://assets.mixkit.co/videos/preview/mixkit-models-walking-on-a-catwalk-in-a-fashion-show-42867-large.mp4"
            autoPlay
            loop
            muted={isMuted}
            playsInline
            className="w-full h-full object-cover"
          />
        </div>

        {/* Bottom Control Bar */}
        <div className="relative z-20 flex items-center justify-between p-4 md:p-6 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
          
          <div className="flex items-center gap-4">
            <button
              onClick={togglePlay}
              className="bg-[#3DC17A] hover:bg-[#FFBF00] text-[#6B3E28] p-3 rounded-full border border-white transition-all transform hover:scale-110"
            >
              {isPlaying ? <Pause className="w-6 h-6 fill-current" /> : <Play className="w-6 h-6 fill-current ml-0.5" />}
            </button>

            <button
              onClick={toggleMute}
              className="bg-white/20 hover:bg-white/40 text-white p-3 rounded-full border border-white/40 transition-all"
            >
              {isMuted ? <VolumeX className="w-6 h-6" /> : <Volume2 className="w-6 h-6" />}
            </button>
          </div>

          <div className="font-mono text-xs md:text-sm text-[#FFF2DF] bg-black/60 px-4 py-2 rounded-full border border-white/20">
            SPRING / SUMMER 2026 TEASER FILM
          </div>

        </div>

      </div>

    </div>
  );
}
