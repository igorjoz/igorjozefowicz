import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';

// Mock Inertia
vi.mock('@inertiajs/react', () => ({
  Head: ({ title }) => <title>{title}</title>,
}));

// Import after mocking
import Index from '@/Pages/Home/Index';

describe('Home Page Integration', () => {
  it('renders hero section with name and title', () => {
    render(<Index />);
    
    expect(screen.getByText('Igor Józefowicz')).toBeInTheDocument();
    expect(screen.getByText('Software Engineer')).toBeInTheDocument();
  });

  it('renders all social links', () => {
    render(<Index />);
    
    // Use getAllByText for text that appears multiple times
    const githubLinks = screen.getAllByText('Github');
    expect(githubLinks.length).toBeGreaterThan(0);
    
    const linkedInLinks = screen.getAllByText('LinkedIn');
    expect(linkedInLinks.length).toBeGreaterThan(0);
    
    const emailLinks = screen.getAllByText('Email');
    expect(emailLinks.length).toBeGreaterThan(0);
  });

  it('renders about me section', () => {
    render(<Index />);
    
    expect(screen.getByText('About me')).toBeInTheDocument();
    expect(screen.getByText(/Hello there! I'm Igor Józefowicz/)).toBeInTheDocument();
  });

  it('renders projects section header', () => {
    render(<Index />);
    
    const projectsHeaders = screen.getAllByText('Projects');
    expect(projectsHeaders.length).toBeGreaterThan(0);
  });

  it('renders project cards with correct content', () => {
    render(<Index />);
    
    // Use getAllByText or check for heading role to find unique instances
    expect(screen.getByText('Vento Kominki Website & Online Shop')).toBeInTheDocument();
    
    const employeesDirElements = screen.getAllByText('Employees Directory');
    expect(employeesDirElements.length).toBeGreaterThan(0);
    
    const anonymousSurveysElements = screen.getAllByText('Anonymous Surveys');
    expect(anonymousSurveysElements.length).toBeGreaterThan(0);
    
    expect(screen.getByText('Driving Course for AI')).toBeInTheDocument();
  });

  it('renders all project links', () => {
    render(<Index />);
    
    const visitWebsiteLinks = screen.getAllByText(/Visit website|View repository|View documentation/);
    expect(visitWebsiteLinks.length).toBeGreaterThan(0);
  });

  it('applies correct styling to hero section', () => {
    const { container } = render(<Index />);
    
    const heroSection = container.querySelector('#hero-section');
    expect(heroSection).toBeInTheDocument();
    expect(heroSection.className).toContain('text-white');
    expect(heroSection.className).toContain('min-h-screen');
  });

  it('applies flat design to main heading', () => {
    const { container } = render(<Index />);
    
    const heading = screen.getByText('Igor Józefowicz');
    expect(heading.tagName).toBe('H1');
    expect(heading.className).toContain('font-bold');
    expect(heading.className).not.toContain('drop-shadow');
  });

  it('renders scroll arrows', () => {
    const { container } = render(<Index />);
    
    const scrollArrow = container.querySelector('.fa-chevron-down');
    expect(scrollArrow).toBeInTheDocument();
  });

  it('has correct section IDs for navigation', () => {
    const { container } = render(<Index />);
    
    expect(container.querySelector('#hero-section')).toBeInTheDocument();
    expect(container.querySelector('#bio-section')).toBeInTheDocument();
    expect(container.querySelector('#projects-section')).toBeInTheDocument();
  });
});
