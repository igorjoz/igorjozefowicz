import React, { useEffect, useRef } from 'react';

// ScrollArrow component
export default function ScrollArrow({ targetId, className = "" }) {
    const anchorRef = useRef(null);
    const playedRef = useRef(false);
    const armedRef = useRef(false);
    const timeoutRef = useRef(null);
    const observerRef = useRef(null);
    const initializedRef = useRef(false);
    const prevIntersectingRef = useRef(false);

    useEffect(() => {
        const el = anchorRef.current;
        if (!el || playedRef.current) return;

        const prefersReduced = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReduced) {
            // Do not autoplay for reduced motion users
            return;
        }

        const isInView = (threshold = 0.6) => {
            const rect = el.getBoundingClientRect();
            const vH = window.innerHeight || document.documentElement.clientHeight;
            const visible = Math.max(0, Math.min(rect.bottom, vH) - Math.max(rect.top, 0));
            const ratio = rect.height > 0 ? visible / rect.height : 0;
            return ratio >= threshold;
        };

        const triggerPlay = () => {
            if (playedRef.current) return;
            el.classList.add('play');
            playedRef.current = true;
            // Remove the class after animations settle
            timeoutRef.current = setTimeout(() => {
                el.classList.remove('play');
            }, 1400);
            // Disconnect any observer
            if (observerRef.current) {
                observerRef.current.disconnect();
                observerRef.current = null;
            }
            teardownInputListeners();
        };

        const observerCallback = (entries) => {
            for (const entry of entries) {
                if (!initializedRef.current) {
                    initializedRef.current = true;
                    prevIntersectingRef.current = entry.isIntersecting;
                    continue;
                }
                const risingEdge = !prevIntersectingRef.current && entry.isIntersecting;
                prevIntersectingRef.current = entry.isIntersecting;
                if (armedRef.current && risingEdge && !playedRef.current) {
                    triggerPlay();
                    break;
                }
            }
        };

        const setupObserver = () => {
            if (observerRef.current) return;
            observerRef.current = new IntersectionObserver(observerCallback, { root: null, threshold: 0.6 });
            observerRef.current.observe(el);
        };

        const onFirstUserIntent = (ev) => {
            // Arm and either trigger immediately (if currently visible) or observe for re-entry
            armedRef.current = true;
            teardownInputListeners();
            if (isInView(0.6)) {
                triggerPlay();
            } else {
                setupObserver();
            }
        };

        const teardownInputListeners = () => {
            window.removeEventListener('wheel', onFirstUserIntent, { passive: true });
            window.removeEventListener('scroll', onFirstUserIntent, { passive: true });
            window.removeEventListener('touchmove', onFirstUserIntent, { passive: true });
            window.removeEventListener('touchstart', onFirstUserIntent, { passive: true });
            window.removeEventListener('keydown', onFirstUserIntent);
        };

        // If not in view on mount, we can arm immediately and observe.
        if (!isInView(0.6)) {
            armedRef.current = true;
            setupObserver();
        } else {
            // Otherwise, wait for user interaction before arming to avoid auto-fire on load
            window.addEventListener('wheel', onFirstUserIntent, { passive: true });
            window.addEventListener('scroll', onFirstUserIntent, { passive: true });
            window.addEventListener('touchmove', onFirstUserIntent, { passive: true });
            window.addEventListener('touchstart', onFirstUserIntent, { passive: true });
            window.addEventListener('keydown', onFirstUserIntent);
        }

        return () => {
            if (observerRef.current) {
                observerRef.current.disconnect();
                observerRef.current = null;
            }
            teardownInputListeners();
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
                timeoutRef.current = null;
            }
        };
    }, []);

    return (
        <div className={`mt-12 text-center animate-bounce ${className}`}>
            <a
                ref={anchorRef}
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
                {/* Extra particles */}
                <span className="particles" aria-hidden="true">
                    <span className="particle particle-1" />
                    <span className="particle particle-2" />
                    <span className="particle particle-3" />
                    <span className="particle particle-4" />
                    <span className="particle particle-5" />
                    <span className="particle particle-6" />
                </span>
                <span className="sr-only">Scroll down</span>
            </a>
        </div>
    );
}
