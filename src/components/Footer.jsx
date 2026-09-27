import React, { useState } from 'react';
import { ArrowUp, Send } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function Footer({ onShowToast }) {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (!email) return;

    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.8 }
    });

    if (onShowToast) {
      onShowToast('VIP NEWSLETTER SUBSCRIBED!');
    }
    setEmail('');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#0B0B0B] text-[#F5F5F0] pt-20 pb-12 px-6 md:px-12 border-t border-[#1C1C1C]">
      
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
        
        {/* Logo Emblem */}
        <div className="mb-6">
          <div className="bg-[#141414] border border-[#2A2A2A] px-6 py-2.5 rounded-2xl shadow-xl inline-block">
            <span className="font-display text-2xl md:text-4xl text-[#F5F5F0]">
              Ar<span className="text-[#164BFF]">च</span>ived <span className="text-[#8A8A8A]">CLOSET</span>
            </span>
          </div>
        </div>

        <p className="font-body text-sm md:text-base max-w-md text-[#8A8A8A] mb-8 font-normal uppercase tracking-wider">
          THE PREMIER DESTINATION FOR VINTAGE GRAILS, HEAVYWEIGHT HOODIES & ARCHIVAL STREETWEAR.
        </p>

        {/* Footer Newsletter Input */}
        <form onSubmit={handleNewsletterSubmit} className="w-full max-w-md flex gap-2 mb-12">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="ENTER YOUR EMAIL FOR SECRETS..."
            required
            className="flex-1 bg-[#141414] border border-[#2A2A2A] rounded-full px-5 py-3 font-mono text-xs text-[#F5F5F0] focus:outline-none focus:border-[#164BFF]"
          />
          <button
            type="submit"
            className="bg-[#164BFF] hover:bg-[#D95B24] text-white px-6 py-3 rounded-full font-mono text-xs tracking-wider border border-white/10 flex items-center gap-2 transition-all active:scale-95"
          >
            <span>JOIN</span>
            <Send className="w-3.5 h-3.5" />
          </button>
        </form>

        {/* Footer Navigation Links */}
        <div className="flex flex-wrap justify-center gap-6 font-mono text-xs text-[#8A8A8A] tracking-wider uppercase mb-12">
          <a href="#drops" className="hover:text-white transition-colors">SHOP ALL</a>
          <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-white transition-colors">AUTHENTICITY GUARANTEE</a>
          <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-white transition-colors">SHIPPING & RETURNS</a>
          <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-white transition-colors">FAQS</a>
          <a href="#social" className="hover:text-white transition-colors">COMMUNITY</a>
        </div>

        {/* Bottom copyright and back-to-top */}
        <div className="w-full pt-8 border-t border-[#2A2A2A] flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-[#8A8A8A]">
          <div>
            © 2026 AR<span className="text-[#164BFF]">च</span>IVED CLOSET ®. ALL RIGHTS RESERVED.
          </div>

          <button
            onClick={scrollToTop}
            className="bg-[#141414] hover:bg-[#164BFF] text-[#F5F5F0] px-4 py-2 rounded-full border border-[#2A2A2A] font-mono text-xs flex items-center gap-1.5 transition-all transform hover:scale-105"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>

    </footer>
  );
}
