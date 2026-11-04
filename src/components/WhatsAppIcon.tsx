import React from 'react';

interface WhatsAppIconProps {
  className?: string;
  size?: number;
  variant?: 'image' | 'svg';
  alt?: string;
}

export const WHATSAPP_ICON_IMAGE = '/assets/whatsapp-icon.png';
export const WHATSAPP_ATTACHED_IMAGE =
  '/assets/aistudio/whatsapp-vector-logo-icon-logotype-vector-social-media_901408-404_1cc284b7.png';

export const WhatsAppIcon: React.FC<WhatsAppIconProps> = ({
  className = 'w-5 h-5',
  size = 20,
  variant = 'image',
  alt = 'WhatsApp',
}) => {
  if (variant === 'svg') {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="currentColor"
        className={`shrink-0 block ${className}`}
        aria-hidden="true"
      >
        <path d="M12.031 2C6.495 2 2 6.495 2 12.031c0 1.764.457 3.487 1.325 5.006L2 22l5.127-1.344a10.02 10.02 0 0 0 4.904 1.275h.004c5.536 0 10.031-4.495 10.031-10.031A10.033 10.033 0 0 0 12.031 2zm0 18.362h-.003a8.318 8.318 0 0 1-4.24-1.156l-.304-.18-3.153.827.842-3.074-.198-.315a8.337 8.337 0 0 1-1.278-4.433c0-4.609 3.75-8.36 8.335-8.36 2.227 0 4.321.868 5.896 2.443a8.293 8.293 0 0 1 2.44 5.894c0 4.61-3.75 8.363-8.339 8.363zm4.57-6.262c-.251-.126-1.484-.732-1.714-.816-.23-.084-.397-.126-.564.126-.168.251-.649.816-.795.984-.147.167-.293.188-.544.063-.251-.126-1.06-.391-2.02-1.246-.746-.666-1.25-1.488-1.396-1.74-.146-.251-.016-.387.11-.512.113-.113.251-.293.377-.44.125-.146.167-.251.251-.418.084-.167.042-.314-.021-.44-.063-.126-.565-1.36-.774-1.863-.204-.49-.411-.423-.564-.431l-.481-.008c-.167 0-.44.063-.67.314-.23.251-.879.859-.879 2.094 0 1.236.9 2.43 1.026 2.597.125.168 1.77 2.703 4.288 3.791.599.259 1.067.414 1.432.53.602.191 1.15.164 1.583.099.483-.072 1.484-.607 1.693-1.193.21-.586.21-1.089.147-1.193-.063-.105-.23-.168-.481-.293z" />
      </svg>
    );
  }

  return (
    <img
      src={WHATSAPP_ICON_IMAGE}
      alt={alt}
      width={size}
      height={size}
      className={`shrink-0 block object-contain select-none ${className}`}
      loading="lazy"
      decoding="async"
    />
  );
};

export const WHATSAPP_LINK =
  'https://wa.me/918595639475?text=Hi%2C%20I%20would%20like%20to%20discuss%20my%20project%20with%20you.';
export const WHATSAPP_PHONE = '+91 8595639475';
export const WHATSAPP_RAW_PHONE = '8595639475';
