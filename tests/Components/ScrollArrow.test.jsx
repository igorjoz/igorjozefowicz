import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import ScrollArrow from '@/Components/ScrollArrow';

describe('ScrollArrow Component', () => {
  it('renders scroll arrow with correct icon', () => {
    render(<ScrollArrow targetId="test-section" />);
    
    const icon = document.querySelector('.fa-chevron-down');
    expect(icon).toBeInTheDocument();
  });

  it('links to correct target section', () => {
    render(<ScrollArrow targetId="bio-section" />);
    
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', '#bio-section');
  });

  it('applies animate-bounce class', () => {
    render(<ScrollArrow targetId="test-section" />);
    
    const container = screen.getByRole('link').parentElement;
    expect(container.className).toContain('animate-bounce');
  });

  it('applies hover color transition', () => {
    render(<ScrollArrow targetId="test-section" />);
    
    const link = screen.getByRole('link');
    expect(link.className).toContain('hover:text-pink-300');
    expect(link.className).toContain('transition-colors');
  });
});
