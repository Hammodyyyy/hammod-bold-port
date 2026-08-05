import type { ReactNode } from 'react';

interface GradientButtonProps {
  children: ReactNode;
  href?: string;
  className?: string;
  size?: 'sm' | 'md';
}

const SIZES = {
  sm: 'px-6 py-2.5 text-[11px] sm:px-7 sm:py-3 sm:text-xs',
  md: 'px-8 py-3 text-xs sm:px-10 sm:py-3.5 sm:text-sm md:px-12 md:py-4 md:text-base',
};

// The signature pill: violet, inner glow, inset white keyline. Every stop is
// kept below #A855F7 so white text clears 4.7:1 across the whole gradient.
export default function GradientButton({
  children,
  href,
  className = '',
  size = 'md',
}: GradientButtonProps) {
  const cls = `inline-flex min-h-[44px] items-center justify-center rounded-full font-display font-semibold uppercase tracking-widest text-white transition-transform duration-200 hover:scale-[1.03] ${SIZES[size]} ${className}`;
  const style = {
    background:
      'linear-gradient(120deg, #6D28D9 0%, #9333EA 50%, #C026D3 100%)',
    boxShadow:
      '0px 4px 18px rgba(147, 51, 234, 0.4), 4px 4px 12px rgba(255, 255, 255, 0.35) inset',
    outline: '2px solid rgba(255, 255, 255, 0.85)',
    outlineOffset: '-3px',
  };

  if (href) {
    const external = href.startsWith('http');
    return (
      <a
        href={href}
        className={cls}
        style={style}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={cls} style={style}>
      {children}
    </button>
  );
}
