import React from 'react';

// SocialLink component
export default function SocialLink({ href, imgSrc, imgAlt, text, title }) {
    return (
        <div className="flex flex-col items-center gap-4 group transition-all duration-200">
            <a
                href={href}
                className="transition-transform hover:scale-[1.03]"
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                title={title}
            >
                <img
                    src={imgSrc}
                    alt={imgAlt}
                    className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full invert drop-shadow-[0_0_15px_rgba(255,107,203,0.25)]"
                />
            </a>

            <a
                href={href}
                className="text-white/90 group-hover:text-[var(--color-primary)] transition-colors text-2xl sm:text-3xl md:text-4xl font-medium underline decoration-white/40 group-hover:decoration-[var(--color-primary)]"
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                title={title}
            >
                {text}
            </a>
        </div>
    );
}
