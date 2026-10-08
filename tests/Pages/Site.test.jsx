import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
vi.mock('@inertiajs/react', () => ({ Head: ({ children }) => <>{children}</> }));
import Site from '../../resources/js/Pages/Site';
import pl from '../../resources/content/pl.json';
import en from '../../resources/content/en.json';

const props = (locale) => ({ locale, section: 'services', title: 'Services', description: 'Description', ui: (locale === 'pl' ? pl : en).ui, canonical: `https://igorjoz.com/${locale}/services/ai-integrations`, alternates: { pl: 'https://igorjoz.com/pl/services/ai-integrations', en: 'https://igorjoz.com/en/services/ai-integrations' }, sections: [{ id: 'contact', heading: 'Contact', paragraphs: [], items: [], links: [{ label: 'Email', href: 'mailto:igor@jozefowicz.pl' }] }] });
describe('Bilingual site', () => {
    it('switches language to the corresponding detail page and updates document language', () => {
        render(<Site {...props('en')} />);
        expect(screen.getByRole('link', { name: 'PL' })).toHaveAttribute('href', 'https://igorjoz.com/pl/services/ai-integrations');
        expect(document.documentElement.lang).toBe('en');
        expect(screen.getByRole('link', { name: 'Services' })).toHaveAttribute('aria-current', 'page');
    });
    it('tracks an email click without treating it as a submitted enquiry', () => {
        window.gtag = vi.fn();
        render(<Site {...props('pl')} />);
        expect(window.gtag).toHaveBeenCalledWith('event', 'content_view', expect.objectContaining({ content_type: 'services', language: 'pl' }));
        fireEvent.click(screen.getByRole('link', { name: 'Email ↗' }));
        expect(window.gtag).toHaveBeenCalledWith('event', 'contact_click', expect.objectContaining({ contact_method: 'email', language: 'pl' }));
        delete window.gtag;
    });
});
