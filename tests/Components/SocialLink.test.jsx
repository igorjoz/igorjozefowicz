import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import SocialLink from '@/Components/SocialLink';

describe('SocialLink Component', () => {
  it('renders social link with correct text', () => {
    render(
      <SocialLink
        href="https://github.com/test"
        imgSrc="/test-icon.png"
        imgAlt="Test Icon"
        text="GitHub"
        title="Test Title"
      />
    );
    
    expect(screen.getByText('GitHub')).toBeInTheDocument();
  });

  it('renders image with correct alt text', () => {
    render(
      <SocialLink
        href="https://github.com/test"
        imgSrc="/test-icon.png"
        imgAlt="Test Icon"
        text="GitHub"
        title="Test Title"
      />
    );
    
    const img = screen.getByAltText('Test Icon');
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', '/test-icon.png');
  });

  it('renders link with target="_blank" for external URLs', () => {
    render(
      <SocialLink
        href="https://github.com/test"
        imgSrc="/test-icon.png"
        imgAlt="Test Icon"
        text="GitHub"
        title="Test Title"
      />
    );
    
    const links = screen.getAllByRole('link');
    links.forEach(link => {
      expect(link).toHaveAttribute('target', '_blank');
      expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    });
  });

  it('applies hover styles with group class', () => {
    const { container } = render(
      <SocialLink
        href="https://github.com/test"
        imgSrc="/test-icon.png"
        imgAlt="Test Icon"
        text="GitHub"
        title="Test Title"
      />
    );
    
    const groupDiv = container.querySelector('.group');
    expect(groupDiv).toBeInTheDocument();
    expect(groupDiv).toHaveClass('transition-all', 'duration-150');
  });
});
