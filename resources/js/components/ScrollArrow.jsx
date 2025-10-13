import React from 'react';

// ScrollArrow component
export default function ScrollArrow({ targetId }) {
    return (
        <div className="mt-12 text-center animate-bounce">
            <a
                href={`#${targetId}`}
                className="text-white/90 hover:text-[var(--color-primary)] transition-colors text-4xl sm:text-5xl drop-shadow-[0_0_10px_rgba(255,107,203,0.35)]"
            >
                <i className="fa fa-chevron-down" aria-hidden="true"></i>
            </a>
        </div>
    );
}
