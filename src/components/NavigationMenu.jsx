import React from 'react';
import { X, ArrowUpRight, Film, Sparkles, Music, Mail, Globe, MessageSquare } from 'lucide-react';

export default function NavigationMenu({ isOpen, onClose, onOpenFilm, onFilterCategory }) {
  if (!isOpen) return null;

  const NAV_LINKS = [
    { label: 'SHOP ALL DROPS', category: 'ALL', bg: '#164BFF' },
    { label: 'TEASER MOVIE', isFilm: true, bg: '#A52A2A' },
    { label: 'VINTAGE HOODIES', category: 'Hoodies', bg: '#D95B24' },
    { label: 'RACING JACKETS', category: 'Jackets', bg: '#4A3025' },
    { label: 'GRAPHIC TEES', category: 'T-Shirts', bg: '#31583F' },
    { label: 'CARGO DENIM', category: 'Denim', bg: '#164BFF' },
  ];

  return (
    <div className="fixed inset-0 z-[2000] overflow-hidden flex flex-col animate-fadeIn">
      {/* Dark Overlay Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-md transition-opacity" 
        onClick={onClose}
      />

      {/* Main Dark Canvas Drawer */}
      <div className="relative w-full h-full bg-[#0B0B0B] text-[#F5F5F0] overflow-y-auto flex flex-col justify-between p-6 md:p-12 border-8 border-[#1C1C1C]">
        
        {/* Subtle Background Watermark Letters */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-5">
          <div className="absolute top-10 left-10 text-9xl font-display text-white animate-float rotate-12">Ar</div>
          <div className="absolute top-1/4 right-16 text-9xl font-display text-white animate-float-reverse -rotate-12">च</div>
          <div className="absolute bottom-1/3 left-1/4 text-8xl font-display text-white animate-float rotate-45">i</div>
          <div className="absolute bottom-10 right-10 text-9xl font-display text-white animate-float-reverse -rotate-6">vd</div>
        </div>

        {/* Header Bar inside Menu */}
        <div className="relative z-10 flex items-center justify-between">
          <div className="flex items-center gap-2 bg-[#141414] px-4 py-2 rounded-full border border-[#2A2A2A]">
            <Sparkles className="w-4 h-4 text-[#164BFF]" />
            <span className="font-mono text-xs text-[#8A8A8A] uppercase tracking-widest">NAVIGATION</span>
          </div>

          <button
            onClick={onClose}
            className="w-12 h-12 bg-[#A52A2A] hover:bg-white text-white hover:text-black font-display text-xl rounded-full flex items-center justify-center border border-white/20 shadow-xl transform hover:scale-110 active:scale-95 transition-all"
            aria-label="Close menu"
          >
            <X className="w-6 h-6 stroke-[2.5]" />
          </button>
        </div>

        {/* Links Navigation */}
        <div className="relative z-10 my-auto flex flex-col items-center justify-center gap-4 md:gap-6 py-8">
          {NAV_LINKS.map((link, idx) => (
            <div key={idx} className="group relative">
              <button
                onClick={() => {
                  if (link.isFilm) {
                    onClose();
                    onOpenFilm();
                  } else if (link.category) {
                    onFilterCategory(link.category);
                    onClose();
                  } else {
                    onClose();
                  }
                }}
                className="relative z-10 text-3xl sm:text-5xl md:text-7xl font-display uppercase tracking-tight text-[#8A8A8A] group-hover:text-[#F5F5F0] transition-colors py-2 px-6 flex items-center gap-4"
              >
                {/* Background Hover Pill */}
                <span 
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transform scale-90 group-hover:scale-100 transition-all duration-300 -z-10 shadow-2xl border border-white/10"
                  style={{ backgroundColor: link.bg }}
                />
                
                <span>{link.label}</span>
                {link.isFilm ? (
                  <Film className="w-8 h-8 md:w-12 md:h-12 text-[#F5F5F0] animate-bounce" />
                ) : (
                  <ArrowUpRight className="w-6 h-6 md:w-10 md:h-10 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all text-[#F5F5F0]" />
                )}
              </button>
            </div>
          ))}
        </div>

        {/* Footer Info inside Menu */}
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 pt-6 border-t border-[#2A2A2A]">
          <div className="text-center md:text-left">
            <h4 className="font-display text-xl text-[#F5F5F0]">Ar<span className="text-[#164BFF]">च</span>ived Closet ®</h4>
            <p className="font-mono text-xs text-[#8A8A8A]">THE HOUSE OF VINTAGE GRAILS & STREETWEAR</p>
          </div>

          <div className="flex items-center gap-3">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="bg-[#141414] p-3 rounded-xl border border-[#2A2A2A] hover:bg-[#164BFF] text-[#8A8A8A] hover:text-white transition-colors">
              <Globe className="w-5 h-5" />
            </a>
            <a href="https://tiktok.com" target="_blank" rel="noreferrer" className="bg-[#141414] p-3 rounded-xl border border-[#2A2A2A] hover:bg-[#D95B24] text-[#8A8A8A] hover:text-white transition-colors">
              <Music className="w-5 h-5" />
            </a>
            <a href="https://discord.com" target="_blank" rel="noreferrer" className="bg-[#141414] p-3 rounded-xl border border-[#2A2A2A] hover:bg-[#31583F] text-[#8A8A8A] hover:text-white transition-colors">
              <MessageSquare className="w-5 h-5" />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
