import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
vi.mock('@inertiajs/react', () => ({
    Head: ({ children }) => <>{children}</>,
    Link: ({ children, ...props }) => <a {...props} data-inertia-link="true">{children}</a>,
    router: { on: vi.fn(() => () => {}), visit: vi.fn() },
}));
import Site from '../../resources/js/Pages/Site';
import pl from '../../resources/content/pl.json';
import en from '../../resources/content/en.json';

function RenderedSite(props) { return Site.layout(<Site {...props} />); }

const props = (locale) => ({ locale, section: 'services', title: 'Services', description: 'Description', ui: (locale === 'pl' ? pl : en).ui, canonical: `https://igorjoz.com/${locale}/services/ai-integrations`, alternates: { pl: 'https://igorjoz.com/pl/services/ai-integrations', en: 'https://igorjoz.com/en/services/ai-integrations' }, sections: [{ id: 'contact', heading: 'Contact', paragraphs: [], items: [], links: [{ label: 'Email', href: 'mailto:igor@jozefowicz.pl' }] }] });
describe('Bilingual site', () => {
    it('switches language to the corresponding detail page and updates document language', () => {
        render(<RenderedSite {...props('en')} />);
        expect(screen.getByRole('link', { name: 'Polski' })).toHaveAttribute('href', 'https://igorjoz.com/pl/services/ai-integrations');
        expect(screen.getByRole('link', { name: 'English' })).toHaveAttribute('aria-current', 'true');
        expect(document.documentElement.lang).toBe('en');
        expect(screen.getByRole('link', { name: 'Services' })).toHaveAttribute('aria-current', 'page');
    });
    it('tracks an email click without treating it as a submitted enquiry', () => {
        window.gtag = vi.fn();
        render(<RenderedSite {...props('pl')} />);
        expect(window.gtag).toHaveBeenCalledWith('event', 'content_view', expect.objectContaining({ content_type: 'services', language: 'pl' }));
        const email = screen.getAllByRole('link', { name: 'igor@jozefowicz.pl' })[0];
        email.addEventListener('click', event => event.preventDefault(), { once: true });
        fireEvent.click(email);
        expect(window.gtag).toHaveBeenCalledWith('event', 'contact_click', expect.objectContaining({ contact_method: 'email', language: 'pl' }));
        delete window.gtag;
    });
    it('opens the mobile navigation and restores focus on Escape', () => {
        render(<RenderedSite {...props('pl')} />);
        const button = screen.getByRole('button', { name: 'Menu' });
        fireEvent.click(button);
        expect(button).toHaveAttribute('aria-expanded', 'true');
        fireEvent.keyDown(button, { key: 'Escape' });
        expect(button).toHaveAttribute('aria-expanded', 'false');
        expect(button).toHaveFocus();
    });
    it('copies the email and announces success', async () => {
        const writeText = vi.fn().mockResolvedValue(undefined);
        Object.defineProperty(navigator, 'clipboard', { value: { writeText }, configurable: true });
        render(<RenderedSite {...props('en')} />);
        fireEvent.click(screen.getByRole('button', { name: 'Copy email' }));
        await waitFor(() => expect(screen.getByRole('status')).toHaveTextContent('Address copied'));
        expect(writeText).toHaveBeenCalledWith('igor@jozefowicz.pl');
    });
    it('keeps the direct email link available when clipboard access fails', async () => {
        Object.defineProperty(navigator, 'clipboard', { value: { writeText: vi.fn().mockRejectedValue(new Error('Denied')) }, configurable: true });
        render(<RenderedSite {...props('pl')} />);
        fireEvent.click(screen.getByRole('button', { name: 'Kopiuj e-mail' }));
        await waitFor(() => expect(screen.getByRole('status')).toHaveTextContent(pl.ui.studio.copyFailed));
        expect(screen.getAllByRole('link', { name: 'igor@jozefowicz.pl' })[0]).toHaveAttribute('href', 'mailto:igor@jozefowicz.pl');
    });
    it('presents the offer in the hero and places the portrait with the biography', () => {
        const data = props('pl');
        render(<RenderedSite {...data} section="" title={pl.ui.hero} sections={[...data.sections, { id: 'about', heading: pl.ui.bio, paragraphs: [pl.ui.bioText], items: [], links: [] }]} />);
        expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(pl.ui.hero);
        expect(screen.getByRole('link', { name: pl.ui.cta })).toHaveAttribute('href', '#contact');
        const portrait = screen.getByAltText(pl.ui.studio.portraitAlt);
        expect(portrait.closest('section')).toHaveAttribute('id', 'about');
        expect(portrait).toHaveAttribute('loading', 'lazy');
    });
});
