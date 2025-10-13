import React from 'react';

export default function Card({ children, className = '', as: Tag = 'div' }) {
  return (
    <Tag
      className={`card-border glass rounded-[var(--radius-lg)] overflow-hidden
        bg-[var(--color-elev)]/70 shadow-[var(--shadow-xl)]
        transition-transform duration-300 hover:translate-y-[-2px] ${className}`}
    >
      {children}
    </Tag>
  );
}

export function CardMedia({ children, className = '' }) {
  return (
    <div className={`relative flex items-center justify-center overflow-hidden bg-[var(--color-surface)] ${className}`}>
      {children}
    </div>
  );
}

export function CardBody({ children, className = '' }) {
  return <div className={`p-7 flex flex-col flex-grow ${className}`}>{children}</div>;
}
