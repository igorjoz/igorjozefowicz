import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import ProjectCard from '@/Components/ProjectCard';

describe('ProjectCard Component', () => {
  const mockProject = {
    imgSrc: '/test-project.png',
    imgAlt: 'Test Project',
    title: 'Test Project Title',
    description: 'This is a test project description',
    links: [
      { text: 'View Repository', url: 'https://github.com/test' },
      { text: 'Live Demo', url: 'https://demo.test.com' }
    ]
  };

  it('renders project card with title and description', () => {
    render(<ProjectCard {...mockProject} />);
    
    expect(screen.getByText('Test Project Title')).toBeInTheDocument();
    expect(screen.getByText('This is a test project description')).toBeInTheDocument();
  });

  it('renders project image with correct attributes', () => {
    render(<ProjectCard {...mockProject} />);
    
    const img = screen.getByAltText('Test Project');
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', '/test-project.png');
  });

  it('renders all project links', () => {
    render(<ProjectCard {...mockProject} />);
    
    expect(screen.getByText('View Repository')).toBeInTheDocument();
    expect(screen.getByText('Live Demo')).toBeInTheDocument();
    
    const repoLink = screen.getByText('View Repository');
    expect(repoLink).toHaveAttribute('href', 'https://github.com/test');
    expect(repoLink).toHaveAttribute('target', '_blank');
  });

  it('applies short image class when isShortImage is true', () => {
    render(<ProjectCard {...mockProject} isShortImage={true} />);
    
    const img = screen.getByAltText('Test Project');
    const imgContainer = img.parentElement;
    
    // Test for presence of height class, not the specific value
    expect(imgContainer.className).toMatch(/h-\[.*px\]/);
    expect(img.className).toMatch(/h-\[.*px\]/);
  });

  it('applies pink button styling to links', () => {
    render(<ProjectCard {...mockProject} />);
    
    const link = screen.getByText('View Repository');
    expect(link.className).toContain('text-white');
    expect(link.style.backgroundColor).toBe('rgb(255, 147, 165)');
  });
});
