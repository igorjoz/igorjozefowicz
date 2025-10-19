import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import Layout from '@/Layouts/Layout';

describe('Layout Component', () => {
  it('renders children content', () => {
    render(
      <Layout>
        <div>Test Content</div>
      </Layout>
    );
    
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  it('renders footer with copyright', () => {
    render(<Layout><div>Test</div></Layout>);
    
    const currentYear = new Date().getFullYear();
    expect(screen.getByText(new RegExp(`© ${currentYear} Igor Józefowicz`))).toBeInTheDocument();
  });

  it('renders footer with email link', () => {
    render(<Layout><div>Test</div></Layout>);
    
    const emailLink = screen.getByText('igor@jozefowicz.pl');
    expect(emailLink).toBeInTheDocument();
    expect(emailLink).toHaveAttribute('href', 'mailto:igor@jozefowicz.pl');
  });

  it('renders footer with phone link', () => {
    render(<Layout><div>Test</div></Layout>);
    
    const phoneLink = screen.getByText('+48 535 743 042');
    expect(phoneLink).toBeInTheDocument();
    expect(phoneLink).toHaveAttribute('href', 'tel:+48535743042');
  });

  it('applies dark footer styling', () => {
    const { container } = render(<Layout><div>Test</div></Layout>);
    
    const footer = container.querySelector('footer');
    expect(footer).toHaveClass('text-white');
    expect(footer).not.toHaveClass('border-pink-300');
  });

  it('applies pink hover color to footer links', () => {
    render(<Layout><div>Test</div></Layout>);

    const emailLink = screen.getByText('igor@jozefowicz.pl');
    expect(emailLink.className).toContain('text-pink-300');
    expect(emailLink.className).toContain('hover:text-pink-200');
  });
});
