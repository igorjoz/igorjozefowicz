import React from 'react';

// SocialLink component
export default function SocialLink({ href, imgSrc, imgAlt, text, title }) {
    return (
        <div className="flex flex-col items-center gap-4 group transition-all duration-150">
            <a 
                href={href} 
                className="transition-all" 
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                title={title}
            >
                <img 
                    src={imgSrc} 
                    alt={imgAlt} 
                    className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full filter invert"
                />
            </a>

            <a 
                href={href} 
                className="text-white group-hover:text-pink-300 transition-colors text-2xl sm:text-3xl md:text-4xl font-medium underline decoration-white group-hover:decoration-pink-300 group-hover:decoration-wavy" 
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                title={title}
            >
                {text}
            </a>
        </div>
    );
}
