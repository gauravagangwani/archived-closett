import React, { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [cursorText, setCursorText] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);

    const handleMouseOver = (e) => {
      const target = e.target.closest('a, button, .archived-card, [data-cursor]');
      if (target) {
        setIsHovered(true);
        const text = target.getAttribute('data-cursor') || (target.tagName === 'BUTTON' ? 'CLICK' : 'VIEW');
        setCursorText(text);
      } else {
        setIsHovered(false);
        setCursorText('');
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div
      className="custom-cursor hidden md:block"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    >
      <div
        className={`rounded-full flex items-center justify-center font-display text-[10px] tracking-widest transition-all duration-200 pointer-events-none ${
          isHovered
            ? 'w-20 h-20 bg-[#164BFF] text-white border-2 border-white shadow-[0_0_20px_rgba(22,75,255,0.6)] scale-110'
            : 'w-6 h-6 bg-[#164BFF]/80 border border-white/50 shadow-md'
        }`}
      >
        {isHovered && <span className="animate-pulse">{cursorText}</span>}
      </div>
    </div>
  );
}
