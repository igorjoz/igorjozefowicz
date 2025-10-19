import React from 'react';

// Modern, tactile button used across project cards and elsewhere
// - Gradient background with subtle animated shift on hover
// - Soft elevation and micro-lift
// - Clear focus-visible ring for accessibility
// - Motion-safe fallbacks via Tailwind's motion-safe utilities
export default function Button({ href, children, className = '', target, rel, onClick, ariaLabel }) {
  const common = `inline-flex items-center justify-center gap-2 select-none
    rounded-[var(--radius-md)] px-5 py-3 text-[1.6rem] font-semibold
    text-white hover:!text-white focus:!text-white active:!text-white

    // Background: animated gradient
    bg-[linear-gradient(135deg,_#ff7aa2_0%,_#ff92ae_50%,_#ff8da1_100%)]
    [background-size:200%_200%] hover:[background-position:100%_0%]

    // Elevation + transitions
  shadow-[0_6px_14px_rgba(255,147,165,.28)] hover:shadow-[0_10px_22px_rgba(255,147,165,.36)]
  transition-[transform,box-shadow,background-position,filter] duration-250 ease-out
  motion-safe:hover:-translate-y-[1px]
  active:translate-y-0

    // Focus ring
    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-black`;

  if (href) {
    return (
      <a
        href={href}
        className={`${common} ${className}`}
        target={target || (href.startsWith('http') ? '_blank' : undefined)}
        rel={rel || (href.startsWith('http') ? 'noopener noreferrer' : undefined)}
        aria-label={ariaLabel}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={`${common} ${className}`} onClick={onClick} aria-label={ariaLabel}>
      {children}
    </button>
  );
}
