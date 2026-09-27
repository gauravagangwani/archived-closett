import React from 'react';
import { Sparkles } from 'lucide-react';

export default function Toast({ message, onClose }) {
  if (!message) return null;

  return (
    <div className="fixed bottom-6 right-6 z-[9999] animate-bounce pointer-events-auto">
      <div 
        onClick={onClose}
        className="bg-[#164BFF] text-white px-5 py-3 rounded-full border border-white/20 shadow-2xl flex items-center gap-2.5 cursor-pointer hover:bg-[#D95B24] transition-colors font-mono text-xs tracking-wider"
      >
        <Sparkles className="w-4 h-4 text-white animate-spin" />
        <span className="uppercase">{message}</span>
      </div>
    </div>
  );
}
