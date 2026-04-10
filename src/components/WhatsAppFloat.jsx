import React from 'react';

const WHATSAPP_NUMBER = '919902452207';
const WHATSAPP_MESSAGE = encodeURIComponent(
  'Hello NH Marine Services, I would like to know more about your services.'
);

const WhatsAppFloat = () => {
  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with NH Marine Services on WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-3 rounded-full bg-[#25D366] px-4 py-3 text-white shadow-[0_14px_30px_rgba(37,211,102,0.35)] transition-all duration-300 hover:scale-105 hover:bg-[#20ba59] focus:outline-none focus:ring-4 focus:ring-[#25D366]/30"
    >
      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/18">
        <svg
          viewBox="0 0 32 32"
          aria-hidden="true"
          className="h-6 w-6 fill-current"
        >
          <path d="M27.28 4.72A15.88 15.88 0 0 0 16 0C7.16 0 0 7.16 0 16c0 2.82.74 5.57 2.13 8L0 32l8.2-2.09A15.93 15.93 0 0 0 16 32c8.84 0 16-7.16 16-16 0-4.27-1.66-8.29-4.72-11.28ZM16 29.3c-2.41 0-4.77-.65-6.83-1.89l-.49-.29-4.87 1.24 1.3-4.74-.32-.5A13.23 13.23 0 0 1 2.74 16C2.74 8.67 8.68 2.74 16 2.74c3.54 0 6.86 1.38 9.35 3.87A13.12 13.12 0 0 1 29.26 16c0 7.32-5.94 13.3-13.26 13.3Zm7.27-9.95c-.4-.2-2.34-1.16-2.71-1.29-.36-.13-.63-.2-.89.2-.27.4-1.02 1.29-1.25 1.55-.23.26-.46.3-.86.1-.4-.2-1.67-.61-3.18-1.94-1.17-1.05-1.96-2.35-2.19-2.75-.23-.4-.02-.61.17-.81.17-.17.4-.43.6-.66.2-.23.27-.4.4-.66.13-.26.07-.5-.03-.69-.1-.2-.89-2.15-1.22-2.94-.32-.77-.64-.66-.88-.67l-.75-.01c-.27 0-.69.1-1.05.5-.36.4-1.38 1.35-1.38 3.29s1.41 3.8 1.61 4.06c.2.26 2.77 4.23 6.72 5.93.94.4 1.68.64 2.25.83.95.3 1.81.26 2.49.16.76-.11 2.34-.96 2.67-1.89.33-.93.33-1.72.23-1.89-.1-.16-.36-.26-.76-.46Z" />
        </svg>
      </span>
      <span className="hidden pr-1 text-sm font-semibold sm:inline">WhatsApp Us</span>
    </a>
  );
};

export default WhatsAppFloat;
