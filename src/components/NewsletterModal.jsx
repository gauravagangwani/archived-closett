import React, { useState } from 'react';
import { X, Mail, Sparkles, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function NewsletterModal({ isOpen, onClose, onShowToast }) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;

    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });

    setSubscribed(true);
    if (onShowToast) {
      onShowToast('VIP ARCHIVE PASS ACTIVATED! WELCOME BOSS.');
    }

    setTimeout(() => {
      onClose();
      setSubscribed(false);
      setEmail('');
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-[2800] bg-black/85 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn">
      
      {/* Modal Box */}
      <div className="relative w-full max-w-lg bg-[#141414] text-[#F5F5F0] rounded-3xl border border-[#2A2A2A] shadow-[0_25px_60px_rgba(0,0,0,0.8)] overflow-hidden p-6 sm:p-10 text-center flex flex-col items-center">
        
        {/* Red Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 bg-[#A52A2A] text-white font-display text-lg rounded-full flex items-center justify-center border border-white/20 shadow-md hover:scale-110 active:scale-95 transition-all"
        >
          <X className="w-5 h-5 stroke-[2.5]" />
        </button>

        {/* Header Emblem */}
        <div className="bg-[#1C1C1C] border border-[#2A2A2A] px-4 py-1.5 rounded-full font-mono text-xs text-[#8A8A8A] mb-4 flex items-center gap-2">
          <Sparkles className="w-3.5 h-3.5 text-[#164BFF]" />
          <span>JOIN THE ARCHIVE CLUB</span>
        </div>

        <h2 className="font-display text-3xl sm:text-5xl text-[#F5F5F0] leading-none mb-3">
          WHAT'S GOOD BOSS?
        </h2>

        <p className="font-body text-[#8A8A8A] text-xs sm:text-sm max-w-md mb-6 uppercase tracking-wider">
          UNLOCK 15% OFF YOUR FIRST ORDER, EXCLUSIVE SECRET DROPS & EARLY GRAIL ACCESS.
        </p>

        {subscribed ? (
          <div className="bg-[#164BFF] text-white p-6 rounded-2xl border border-white/20 flex flex-col items-center gap-2 animate-bounce w-full">
            <CheckCircle2 className="w-8 h-8" />
            <span className="font-display text-lg">YOU ARE IN THE CLUB!</span>
            <span className="font-mono text-xs opacity-80">Check your inbox for your 15% code.</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="w-full flex flex-col gap-3">
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#8A8A8A]" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="ENTER YOUR EMAIL HERE..."
                required
                className="w-full bg-[#0D0D0D] border border-[#2A2A2A] rounded-full py-3.5 pl-11 pr-4 font-mono text-xs text-[#F5F5F0] placeholder-gray-500 focus:outline-none focus:border-[#164BFF]"
              />
            </div>

            <button
              type="submit"
              className="huge-button color-blue group w-full"
            >
              <span className="inner w-full text-center py-3.5 text-base">
                JOIN NOW !
              </span>
            </button>
          </form>
        )}

        <div className="font-mono text-[10px] text-[#8A8A8A] mt-6 uppercase tracking-widest">
          FROM AR<span className="text-[#164BFF]">च</span>IVED CLOSET ® WITH GIGANTIC LOVE
        </div>

      </div>

    </div>
  );
}
