import React from 'react';
import { Search, ShoppingBag } from 'lucide-react';

export default function Header({ onOpenMenu, onOpenCart, cartCount, onNavigate = () => {} }) {
  return (
    <header className="fixed top-0 left-0 w-full z-[1000] px-4 md:px-8 py-6 pointer-events-none">
      <nav className="w-full flex items-center justify-between gap-4">
        
        {/* Left: Brand / Logo */}
        <div className="pointer-events-auto bg-white/20 backdrop-blur-md hover:bg-white/30 text-[#F5F5F0] px-6 py-2.5 rounded-full transition-colors cursor-pointer border border-white/10">
          <span className="font-display font-bold text-lg tracking-tight">Ar<span className="text-[#164BFF]">च</span>ived</span>
        </div>

        {/* Center: Links (Hidden on small screens) */}
        <div className="pointer-events-auto hidden lg:flex items-center gap-6 bg-white/20 backdrop-blur-md text-[#F5F5F0] px-8 py-3 rounded-full border border-white/10 text-xs font-bold tracking-widest uppercase">
          <button onClick={() => onNavigate('ALL')} className="hover:text-white transition-colors cursor-pointer">New In</button>
          <button onClick={() => onNavigate('T-Shirts')} className="hover:text-white transition-colors cursor-pointer">Tops</button>
          <button onClick={() => onNavigate('Denim')} className="hover:text-white transition-colors cursor-pointer">Bottoms</button>
          <button onClick={() => onNavigate('Jackets')} className="hover:text-white transition-colors cursor-pointer">Outerwear</button>
          <button onClick={() => onNavigate('Hoodies')} className="hover:text-white transition-colors cursor-pointer">Hoodies</button>
          <button onClick={() => onNavigate('ALL')} className="hover:text-white transition-colors cursor-pointer">Lookbook</button>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-2 pointer-events-auto">
          <button className="flex items-center gap-2 bg-white/20 backdrop-blur-md hover:bg-white/30 text-[#F5F5F0] px-5 py-2.5 rounded-full transition-colors text-xs font-bold tracking-widest uppercase border border-white/10">
            <Search className="w-4 h-4" />
            <span className="hidden sm:inline">Search</span>
          </button>
          
          <button 
            onClick={onOpenCart}
            className="flex items-center gap-2 bg-white/20 backdrop-blur-md hover:bg-white/30 text-[#F5F5F0] px-5 py-2.5 rounded-full transition-colors text-xs font-bold tracking-widest uppercase border border-white/10"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>Cart ({cartCount})</span>
          </button>
        </div>

      </nav>
    </header>
  );
}
