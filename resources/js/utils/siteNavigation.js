import { router } from '@inertiajs/react';

// Only the bilingual portfolio is served by Inertia; teaching pages use Blade.
export function isPortfolioHref(href, currentHref = window.location.href) {
    if (typeof href !== 'string' || !href || href.startsWith('#')) return false;
    try {
        const current = new URL(currentHref);
        const destination = new URL(href, current);
        if (destination.origin !== current.origin || !/^\/(pl|en)(\/|$)/.test(destination.pathname)) return false;
        return !(destination.hash && destination.pathname === current.pathname && destination.search === current.search);
    } catch {
        return false;
    }
}

export function handleArticleLinkClick(event) {
    if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    const anchor = event.target instanceof Element ? event.target.closest('a[href]') : null;
    if (!anchor || !event.currentTarget.contains(anchor) || anchor.hasAttribute('download')) return;
    if (anchor.target && anchor.target !== '_self') return;
    if (!isPortfolioHref(anchor.getAttribute('href'))) return;
    event.preventDefault();
    router.visit(anchor.href);
}
