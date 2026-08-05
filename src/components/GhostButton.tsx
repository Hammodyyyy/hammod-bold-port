'use client';

import type { ReactNode } from 'react';

interface GhostButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  size?: 'sm' | 'md' | 'fluid';
}

const SIZES = {
  sm: 'px-6 py-2.5 text-[11px] sm:px-7 sm:py-3 sm:text-xs',
  md: 'px-8 py-3 text-sm sm:px-10 sm:py-3.5 sm:text-base',
  // shrinks on phones where it shares a row with other content
  fluid: 'px-5 py-3 text-[11px] sm:px-10 sm:py-3.5 sm:text-base',
};

// Outline counterpart to GradientButton, for secondary actions.
export default function GhostButton({
  children,
  href,
  onClick,
  className = '',
  size = 'md',
}: GhostButtonProps) {
  const cls = `inline-flex min-h-[44px] items-center justify-center rounded-full border-2 border-[#D7E2EA] font-display font-medium uppercase tracking-widest text-[#D7E2EA] transition-colors duration-200 hover:bg-[#D7E2EA]/10 ${SIZES[size]} ${className}`;

  if (href) {
    const external = href.startsWith('http');
    return (
      <a
        href={href}
        className={cls}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={cls} onClick={onClick}>
      {children}
    </button>
  );
}
