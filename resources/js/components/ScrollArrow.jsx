import React from 'react';

// ScrollArrow component
export default function ScrollArrow({ targetId }) {
    return (
        <div className="mt-12 text-center animate-bounce">
            <a href={`#${targetId}`} className="text-white hover:text-pink-300 transition-colors text-4xl sm:text-5xl drop-shadow-[0_0_10px_rgba(255,192,203,0.5)]">
                <i className="fa fa-chevron-down" aria-hidden="true"></i>
            </a>
        </div>
    );
}
