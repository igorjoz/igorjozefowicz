import React from 'react';

// A modern, glassy social link with animated gradient glow and subtle sheen
export default function SocialLink({ href, imgSrc, imgAlt, text, title }) {
    const isExternal = /^https?:\/\//i.test(href);

    return (
        <a
            href={href}
            target={isExternal ? '_blank' : undefined}
            rel={isExternal ? 'noopener noreferrer' : undefined}
            title={title}
            aria-label={`${text}${title ? ` – ${title}` : ''}`}
            className="group relative inline-flex items-center gap-4 sm:gap-5 rounded-2xl md:rounded-3xl px-5 py-3 sm:px-6 sm:py-4 focus:outline-none focus-visible:ring-4 focus-visible:ring-pink-400/40 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
        >
            {/* Glow layer */}
            <span
                aria-hidden
                className="pointer-events-none absolute inset-0 rounded-2xl md:rounded-3xl bg-gradient-to-r from-pink-500 via-fuchsia-500 to-indigo-500 blur-xl opacity-60 group-hover:opacity-90 transition-opacity"
            />

            {/* Main glass surface */}
            <span className="relative z-10 inline-flex items-center gap-4 sm:gap-5 rounded-2xl md:rounded-3xl bg-white/10 backdrop-blur-xl border border-white/10 shadow-lg shadow-pink-500/20 group-hover:shadow-pink-500/40 px-5 py-3 sm:px-6 sm:py-4">
                {/* Icon bubble */}
                <span className="relative grid place-items-center h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-gradient-to-br from-white/25 to-white/5 border border-white/20 shadow-inner group-hover:scale-[1.03] transition-transform">
                    {/* Soft inner glow */}
                    <span aria-hidden className="absolute inset-0 rounded-full bg-gradient-to-tr from-pink-400/20 via-fuchsia-300/10 to-indigo-300/20 blur-md" />
                    <img
                        src={imgSrc}
                        alt={imgAlt}
                        className="relative z-[1] h-7 w-7 sm:h-8 sm:w-8 invert drop-shadow-[0_0_10px_rgba(255,107,203,0.35)]"
                        loading="lazy"
                    />
                </span>

                {/* Texts */}
                <span className="flex flex-col -space-y-0.5">
                    <span className="text-white text-xl sm:text-2xl md:text-3xl font-semibold tracking-wide">
                        {text}
                    </span>
                    {title && (
                        <span className="text-white/70 text-sm sm:text-base md:text-lg tracking-wide">
                            {title}
                        </span>
                    )}
                </span>

                {/* Arrow indicator */}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="ml-1 h-5 w-5 sm:h-6 sm:w-6 text-white/80 group-hover:text-white transition-colors"
                    aria-hidden
                >
                    <path d="M5.47 18.53a.75.75 0 0 1 0-1.06L14.94 8H9.75a.75.75 0 0 1 0-1.5h6.5a.75.75 0 0 1 .75.75v6.5a.75.75 0 0 1-1.5 0V8.81l-9.47 9.47a.75.75 0 0 1-1.06 0Z" />
                </svg>
            </span>

            {/* Sheen sweep */}
            <span
                aria-hidden
                className="pointer-events-none absolute -inset-y-3 -inset-x-6 overflow-hidden rounded-3xl"
            >
                <span className="absolute left-[-30%] top-0 h-full w-24 rotate-12 bg-gradient-to-r from-white/40 via-white/10 to-transparent blur-md opacity-0 group-hover:opacity-80 translate-x-0 group-hover:translate-x-[220%] transition-transform duration-700 ease-out" />
            </span>
        </a>
    );
}
