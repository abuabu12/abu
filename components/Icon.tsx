import React from 'react';

type IconProps = React.SVGProps<SVGSVGElement>;

export const IconImageEdit: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M11 20H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1.5l1.5-2h4l1.5 2H16a2 2 0 0 1 2 2v2.5" />
    <path d="m18.5 14.5-2.5 2.5" />
    <path d="M19 13v-1" />
    <path d="M22 16v-1" />
    <path d="M19 13h-1" />
    <path d="M22 16h-1" />
    <path d="M16 19h1" />
    <path d="M13 22h1" />
    <path d="M16 19v1" />
    <path d="M13 22v1" />
    <circle cx="9" cy="11" r="2" />
    <path d="M15.21 21.21a5 5 0 1 0-7.07-7.07" />
  </svg>
);

export const IconImage: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect width="18" height="18" x="3" y="3" rx="2" ry="2"/>
    <circle cx="9" cy="9" r="2"/>
    <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/>
  </svg>
);

export const IconUpload: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="17 8 12 3 7 8" />
    <line x1="12" x2="12" y1="3" y2="15" />
  </svg>
);

export const IconWand: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M15 4V2" />
        <path d="M15 10V8" />
        <path d="M12.5 6.5L14 5" />
        <path d="M12.5 11.5L14 13" />
        <path d="M10 4h.01" />
        <path d="M5 4h.01" />
        <path d="M10 8h.01" />
        <path d="M5 8h.01" />
        <path d="M2.5 6.5L4 5" />
        <path d="M2.5 11.5L4 13" />
        <path d="M18 17a2 2 0 0 0-2-2h-1a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-2z" />
    </svg>
);

export const IconSpinner: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M21 12a9 9 0 1 1-6.219-8.56" />
  </svg>
);

export const IconX: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
);
