import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
vi.mock('@inertiajs/react', () => ({
    Link: props => <a {...props} data-inertia-link="true" />,
    router: { visit: vi.fn() },
}));
import { router } from '@inertiajs/react';
import SiteLink from '../../resources/js/components/SiteLink';
import { handleArticleLinkClick, isPortfolioHref } from '../../resources/js/utils/siteNavigation';

describe('Portfolio navigation', () => {
    it.each(['/pl', '/en/projects/forcen', '/pl/articles/custom-application', '/en/services/ai-integrations'])('uses Inertia for %s', href => {
        render(<SiteLink href={href}>Open</SiteLink>);
        expect(screen.getByRole('link')).toHaveAttribute('data-inertia-link', 'true');
    });
    it.each([
        { href: '#contact' }, { href: '/gp' }, { href: 'mailto:igor@jozefowicz.pl' },
        { href: 'https://github.com/igorjoz' }, { href: '/pl/projects', target: '_blank' },
        { href: '/pl/projects', download: true }, { href: '/pl/projects', download: '' },
    ])('keeps native behavior for $href ($target)', props => {
        render(<SiteLink {...props}>Open</SiteLink>);
        expect(screen.getByRole('link')).not.toHaveAttribute('data-inertia-link');
    });
    it('accepts absolute same-origin URLs and leaves same-page anchors native', () => {
        const current = 'https://example.test/pl?view=all';
        expect(isPortfolioHref('https://example.test/en/about', current)).toBe(true);
        expect(isPortfolioHref('/pl?view=all#contact', current)).toBe(false);
        expect(isPortfolioHref('https://other.test/pl', current)).toBe(false);
        expect(isPortfolioHref('/platform', current)).toBe(false);
    });
    it('delegates article links only on unmodified primary clicks', () => {
        const article = document.createElement('article');
        article.innerHTML = '<a href="/pl/contact"><span>Contact</span></a>';
        const event = { currentTarget: article, target: article.querySelector('span'), button: 0, defaultPrevented: false, preventDefault: vi.fn() };
        router.visit.mockClear();
        handleArticleLinkClick(event);
        expect(router.visit).toHaveBeenCalledWith(new URL('/pl/contact', window.location.href).href);
        expect(event.preventDefault).toHaveBeenCalledOnce();
        for (const modifiers of [{ ctrlKey: true }, { metaKey: true }, { shiftKey: true }, { altKey: true }, { button: 1 }, { defaultPrevented: true }]) {
            router.visit.mockClear();
            handleArticleLinkClick({ ...event, ...modifiers });
            expect(router.visit).not.toHaveBeenCalled();
        }
        for (const attributes of ['target="_blank"', 'download', 'href="/gp"', 'href="#contact"', 'href="https://github.com/igorjoz"']) {
            article.innerHTML = `<a href="/pl/contact" ${attributes}>Contact</a>`;
            if (attributes.startsWith('href=')) article.innerHTML = `<a ${attributes}>Contact</a>`;
            router.visit.mockClear();
            handleArticleLinkClick({ ...event, target: article.querySelector('a') });
            expect(router.visit).not.toHaveBeenCalled();
        }
    });
});
