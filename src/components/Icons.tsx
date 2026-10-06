import type { SVGProps } from 'react';

type IconProps = SVGProps<SVGSVGElement>;

const defaults = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  'aria-hidden': true,
  focusable: false,
};

export function SunIcon(props: IconProps) {
  return (
    <svg {...defaults} {...props}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </svg>
  );
}

export function MoonIcon(props: IconProps) {
  return (
    <svg {...defaults} {...props}>
      <path d="M21 14.5A8.5 8.5 0 1 1 9.5 3a7 7 0 0 0 11.5 11.5z" />
    </svg>
  );
}

export function MenuIcon(props: IconProps) {
  return (
    <svg {...defaults} {...props}>
      <path d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
}

export function CloseIcon(props: IconProps) {
  return (
    <svg {...defaults} {...props}>
      <path d="m6 6 12 12M18 6 6 18" />
    </svg>
  );
}

export function ArrowLeftIcon(props: IconProps) {
  return (
    <svg {...defaults} {...props}>
      <path d="m15 18-6-6 6-6M9 12h10" />
    </svg>
  );
}

export function ArrowUpRightIcon(props: IconProps) {
  return (
    <svg {...defaults} {...props}>
      <path d="M7 17 17 7M7 7h10v10" />
    </svg>
  );
}

export function ChevronLeftIcon(props: IconProps) {
  return (
    <svg {...defaults} {...props}>
      <path d="m15 18-6-6 6-6" />
    </svg>
  );
}

export function ChevronRightIcon(props: IconProps) {
  return (
    <svg {...defaults} {...props}>
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

export function GithubIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" {...props}>
      <path
        fill="currentColor"
        d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.44 9.8 8.21 11.39.6.1.82-.26.82-.57v-2.24c-3.01.56-3.79-.73-4.03-1.41-.14-.35-.72-1.41-1.23-1.7-.42-.22-1.02-.78-.02-.79.95-.02 1.62.87 1.85 1.23 1.08 1.81 2.8 1.3 3.49.99.11-.78.42-1.31.77-1.61-2.67-.3-5.46-1.33-5.46-5.92 0-1.31.47-2.39 1.23-3.23-.12-.3-.54-1.53.12-3.18 0 0 1.01-.31 3.3 1.23.96-.27 1.98-.4 3-.4s2.04.13 3 .4c2.3-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.23 0 4.6-2.81 5.62-5.48 5.92.44.38.81 1.1.81 2.22v3.3c0 .32.23.69.83.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12Z"
      />
    </svg>
  );
}

export function LinkedinIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" {...props}>
      <path
        fill="currentColor"
        d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.14 1.44-2.14 2.94v5.66H9.35V9h3.42v1.56h.04a3.75 3.75 0 0 1 3.37-1.85c3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12Zm1.78 13.02H3.56V9h3.56v11.45ZM22.23 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0h.01Z"
      />
    </svg>
  );
}

export function MailIcon(props: IconProps) {
  return (
    <svg {...defaults} {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

export function FileIcon(props: IconProps) {
  return (
    <svg {...defaults} {...props}>
      <path d="M6 2h8l4 4v16H6zM14 2v5h5M12 11v7M9 15l3 3 3-3" />
    </svg>
  );
}
