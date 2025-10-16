import React from 'react';

// ScrollArrow component
export default function ScrollArrow({ targetId }) {
    return (
        <div className="mt-12 text-center animate-bounce">
            <a
                href={`#${targetId}`}
                className="scroll-arrow text-white/90 hover:text-[var(--color-primary)] transition-colors text-5xl sm:text-6xl md:text-7xl drop-shadow-[0_0_10px_rgba(255,107,203,0.35)]"
                style={{ lineHeight: 1 }}
            >
                <span className="arrow-stack" aria-hidden="true">
                    {/* Main arrow */}
                    <i className="fa fa-chevron-down arrow-main" aria-hidden="true"></i>
                    {/* Ghost arrows that cascade on hover */}
                    <i className="fa fa-chevron-down arrow-ghost ghost-1" aria-hidden="true"></i>
                    <i className="fa fa-chevron-down arrow-ghost ghost-2" aria-hidden="true"></i>
                </span>
                <span className="sr-only">Scroll down</span>
            </a>
        </div>
    );
}
