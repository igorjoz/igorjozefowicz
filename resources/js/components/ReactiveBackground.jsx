import React, { useEffect } from 'react';

export default function ReactiveBackground() {
  useEffect(() => {
    const prefersReduced = typeof window !== 'undefined' && typeof window.matchMedia === 'function'
      ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
      : false;
    const params = new URLSearchParams(window.location.search);
    const forceMotion = params.get('motion') === 'on';
    const root = document.documentElement;

    let rafId;
    // Timekeeping and inertial scroll variables
    let t = 0;
    let lastTs = 0;
    let lastScrollY = (typeof window !== 'undefined' ? (window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0) : 0);
    let scrollVel = 0; // low-pass filtered scroll velocity (viewport heights per second)
    let inertX = 0; // inertial offsets influenced by scroll velocity
    let inertY = 0;

    const clamp01 = (v) => Math.min(1, Math.max(0, v));

    const tick = (ts) => {
      if (!lastTs) lastTs = ts;
      const dt = Math.min(0.050, Math.max(0.0, (ts - lastTs) / 1000)); // cap dt to 50ms for stability
      lastTs = ts;

      // advance time more slowly for smooth paths
      t += dt;

      // compute scroll velocity and apply smoothing and decay
      const currScrollY = (typeof window !== 'undefined' ? (window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0) : 0);
      const dv = (currScrollY - lastScrollY) / Math.max(1, (window.innerHeight || 1));
      lastScrollY = currScrollY;
      // low-pass filter toward dv
      scrollVel += (dv - scrollVel) * 0.2;
      // integrate into inertial offsets with decay
      inertX = inertX * 0.94 + scrollVel * 0.020;
      inertY = inertY * 0.94 - scrollVel * 0.015;

      // base autonomous motion via multi-frequency Lissajous-like curves
      const baseMx = 0.5 + 0.15 * Math.sin(t * 0.5) + 0.10 * Math.sin(t * 1.3 + 0.8);
      const baseMy = 0.5 + 0.12 * Math.cos(t * 0.4 + 1.2) + 0.09 * Math.sin(t * 1.7);
      const baseMx2 = 0.5 + 0.18 * Math.cos(t * 0.6 + 0.4) + 0.07 * Math.sin(t * 1.1 + 1.7);
      const baseMy2 = 0.5 + 0.20 * Math.sin(t * 0.45 + 2.0) + 0.06 * Math.cos(t * 1.5);

      // apply inertial offset (counter-moving for the second light)
      const mx = clamp01(baseMx + inertX);
      const my = clamp01(baseMy + inertY);
      const mx2 = clamp01(baseMx2 - inertX * 0.8);
      const my2 = clamp01(baseMy2 - inertY * 0.8);

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
      rafId = requestAnimationFrame(tick);
    } else {
      const dmx = 0.12;
      const dmy = 0.10;
      const dmx2 = 0.60;
      const dmy2 = 0.70;
      root.style.setProperty('--mx', String(dmx));
      root.style.setProperty('--my', String(dmy));
      root.style.setProperty('--mx2', String(dmx2));
      root.style.setProperty('--my2', String(dmy2));
      root.style.setProperty('--mxp', `${dmx * 100}%`);
      root.style.setProperty('--myp', `${dmy * 100}%`);
      root.style.setProperty('--mx2p', `${dmx2 * 100}%`);
      root.style.setProperty('--my2p', `${dmy2 * 100}%`);
    }

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return <div className="reactive-bg" aria-hidden="true" />;
}
