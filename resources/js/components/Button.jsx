import React from 'react';

export default function Button({ href, children, className = '', target, rel, onClick, ariaLabel }) {
  const common = `inline-flex items-center justify-center gap-2 rounded-[var(--radius-md)]
    px-5 py-3 text-[1.6rem] font-semibold text-white
    bg-[var(--color-primary)] hover:bg-[var(--color-primary-600)]
    shadow-lg shadow-pink-500/20 transition-all duration-300 ease-out
    hover:translate-y-[-1px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-black`;

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
