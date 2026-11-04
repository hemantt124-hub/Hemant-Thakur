import React, { useState } from 'react';
import {
  WHATSAPP_LINK,
  WHATSAPP_PHONE,
  WHATSAPP_ICON_IMAGE,
} from './WhatsAppIcon';

export const FloatingWhatsApp: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <aside
      aria-label="Contact options"
      className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-50 flex items-center justify-end pointer-events-none"
    >
      <div className="flex items-center gap-3 pointer-events-auto">
        {/* Tooltip on Desktop hover */}
        <div
          role="tooltip"
          className={`hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-full bg-[#0d0d14]/95 text-white text-xs font-semibold border border-slate-700/80 shadow-2xl backdrop-blur-md transition-all duration-200 select-none ${
            isHovered
              ? 'opacity-100 translate-x-0'
              : 'opacity-0 translate-x-2'
          }`}
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>Chat on WhatsApp</span>
        </div>

        {/* Floating Action Button using user's WhatsApp icon asset */}
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          aria-label={`Chat with Hemant Thakur on WhatsApp at ${WHATSAPP_PHONE}`}
          className="group relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-2xl shadow-2xl hover:scale-105 active:scale-95 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-emerald-500/40"
        >
          {/* Subtle breathing ripple halo */}
          <span className="absolute -inset-1 rounded-2xl bg-[#01bc39]/35 animate-ping -z-10 opacity-75" />
          <span className="absolute -inset-0.5 rounded-2xl bg-[#01bc39]/25 -z-10" />

          {/* User's WhatsApp App Icon */}
          <img
            src={WHATSAPP_ICON_IMAGE}
            alt="Chat with Hemant Thakur on WhatsApp"
            width={64}
            height={64}
            className="w-full h-full rounded-2xl object-cover drop-shadow-xl transition-transform duration-200 group-hover:scale-105 select-none"
          />
        </a>
      </div>
    </aside>
  );
};
