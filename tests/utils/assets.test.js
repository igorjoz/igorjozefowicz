import { describe, it, expect } from 'vitest';
import { storageUrl } from '@/utils/assets';

describe('Assets Utility', () => {
  it('removes public/ prefix from path', () => {
    const result = storageUrl('public/images/test.png');
    expect(result).toBe('/storage/images/test.png');
  });

  it('handles path without public/ prefix', () => {
    const result = storageUrl('images/test.png');
    expect(result).toBe('/storage/images/test.png');
  });

  it('handles nested paths correctly', () => {
    const result = storageUrl('public/projects/vento-logo.svg');
    expect(result).toBe('/storage/projects/vento-logo.svg');
  });

  it('handles root level files', () => {
    const result = storageUrl('public/favicon.png');
    expect(result).toBe('/storage/favicon.png');
  });
});
