import { render } from '@testing-library/react';
import React from 'react';
import ReactiveBackground from '@/components/ReactiveBackground.jsx';

// helper to mock matchMedia
function mockMatchMedia(matches) {
  const mql = {
    matches,
    media: '',
    onchange: null,
    addListener: () => {}, // deprecated
    removeListener: () => {}, // deprecated
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => false,
  };
  vi.spyOn(window, 'matchMedia').mockImplementation(() => mql);
}

function getVar(name) {
  return document.documentElement.style.getPropertyValue(name);
}

describe('ReactiveBackground', () => {
  beforeEach(() => {
    document.documentElement.style.cssText = '';
    vi.restoreAllMocks();
    // reset RAF
    let id = 0;
    const callbacks = new Map();
    vi.spyOn(window, 'requestAnimationFrame').mockImplementation((cb) => {
      id += 1;
      callbacks.set(id, cb);
      // call once immediately to progress state
      setTimeout(() => cb(performance.now()), 0);
      return id;
    });
    vi.spyOn(window, 'cancelAnimationFrame').mockImplementation((rid) => {
      callbacks.delete(rid);
    });
  });

  it('sets static CSS vars when prefers-reduced-motion', async () => {
    mockMatchMedia(true);

    const { unmount, container } = render(<ReactiveBackground />);
    expect(container.firstChild).toHaveClass('reactive-bg');

    // initial static values
    expect(getVar('--mx')).toBe('0.12');
    expect(getVar('--my')).toBe('0.1');
    expect(getVar('--mx2')).toBe('0.6');
    expect(getVar('--my2')).toBe('0.7');

    unmount();
  });

  it('animates and updates vars when motion is allowed', async () => {
    mockMatchMedia(false);

    const { unmount } = render(<ReactiveBackground />);

    // simulate move to center
    const evt = new MouseEvent('mousemove', { clientX: 500, clientY: 500 });
    Object.defineProperty(window, 'innerWidth', { value: 1000, configurable: true });
    Object.defineProperty(window, 'innerHeight', { value: 1000, configurable: true });
    window.dispatchEvent(evt);

    // wait one macrotask so RAF callback runs
    await new Promise((r) => setTimeout(r, 10));

    // variables should be set to some numeric strings
    const mx = parseFloat(getVar('--mx'));
    const my = parseFloat(getVar('--my'));
    const mx2 = parseFloat(getVar('--mx2'));
    const my2 = parseFloat(getVar('--my2'));

    expect(Number.isNaN(mx)).toBe(false);
    expect(Number.isNaN(my)).toBe(false);
    expect(Number.isNaN(mx2)).toBe(false);
    expect(Number.isNaN(my2)).toBe(false);

    unmount();
  });
});
