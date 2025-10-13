import React, { useEffect } from 'react';

export default function ReactiveBackground() {
  useEffect(() => {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const params = new URLSearchParams(window.location.search);
  const forceMotion = params.get('motion') === 'on';
    const root = document.documentElement;

    let rafId;
    let t = 0;
    const state = {
      mx: 0.12,
      my: 0.10,
      mx2: 0.6,
      my2: 0.7,
      targetX: 0.12,
      targetY: 0.10,
      scroll: 0, // 0..1 scroll progress
      targetScroll: 0,
    };

    const onMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const x = e.clientX / innerWidth;
      const y = e.clientY / innerHeight;
      state.targetX = x;
      state.targetY = y;
    };

    const onTouch = (e) => {
      if (!e.touches || e.touches.length === 0) return;
      const { innerWidth, innerHeight } = window;
      const x = e.touches[0].clientX / innerWidth;
      const y = e.touches[0].clientY / innerHeight;
      state.targetX = x;
      state.targetY = y;
    };

    const getScrollProgress = () => {
      const doc = document.documentElement;
      const body = document.body;
      const scrollTop = doc.scrollTop || body.scrollTop;
      const scrollHeight = (doc.scrollHeight || body.scrollHeight) - window.innerHeight;
      return scrollHeight > 0 ? Math.min(1, Math.max(0, scrollTop / scrollHeight)) : 0;
    };

    const onScroll = () => {
      state.targetScroll = getScrollProgress();
    };

    const tick = () => {
      t += 0.005; // time

      // Lerp mouse to target for smoothness
      state.mx += (state.targetX - state.mx) * 0.06;
      state.my += (state.targetY - state.my) * 0.06;

      // Orbiting secondary blob
      state.mx2 = 0.5 + Math.cos(t * 0.8) * 0.2;
      state.my2 = 0.5 + Math.sin(t * 0.6) * 0.25;

  // Lerp scroll progress
  state.scroll += (state.targetScroll - state.scroll) * 0.06;

  // Parallax offsets based on scroll (small but noticeable)
  const px = (state.scroll - 0.5) * 0.3;   // -0.15..0.15
  const py = (state.scroll - 0.5) * -0.25; //  0.125..-0.125

  // Provide both raw (0..1) and percentage variables for wide CSS support
  const mx = state.mx + px;
  const my = state.my + py;
  const mx2 = state.mx2 - px * 0.8;
  const my2 = state.my2 - py * 0.8;

  root.style.setProperty('--mx', mx.toFixed(4));
  root.style.setProperty('--my', my.toFixed(4));
  root.style.setProperty('--mx2', mx2.toFixed(4));
  root.style.setProperty('--my2', my2.toFixed(4));
  root.style.setProperty('--mxp', `${(mx * 100).toFixed(2)}%`);
  root.style.setProperty('--myp', `${(my * 100).toFixed(2)}%`);
  root.style.setProperty('--mx2p', `${(mx2 * 100).toFixed(2)}%`);
  root.style.setProperty('--my2p', `${(my2 * 100).toFixed(2)}%`);

      rafId = requestAnimationFrame(tick);
    };

  if (!prefersReduced || forceMotion) {
      window.addEventListener('mousemove', onMove, { passive: true });
      window.addEventListener('touchmove', onTouch, { passive: true });
      window.addEventListener('scroll', onScroll, { passive: true });
      state.targetScroll = getScrollProgress();
      rafId = requestAnimationFrame(tick);
    } else {
      // Static but still nice positions
  root.style.setProperty('--mx', String(state.mx));
  root.style.setProperty('--my', String(state.my));
  root.style.setProperty('--mx2', String(state.mx2));
  root.style.setProperty('--my2', String(state.my2));
  root.style.setProperty('--mxp', `${state.mx * 100}%`);
  root.style.setProperty('--myp', `${state.my * 100}%`);
  root.style.setProperty('--mx2p', `${state.mx2 * 100}%`);
  root.style.setProperty('--my2p', `${state.my2 * 100}%`);
    }

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('touchmove', onTouch);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return <div className="reactive-bg" aria-hidden="true" />;
}
