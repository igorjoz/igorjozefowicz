import { router } from '@inertiajs/react';
import { useEffect, useRef, useState } from 'react';
import SiteLink from '@/components/SiteLink';
import { track } from '@/utils/analytics';

const navigation = ['', 'services', 'projects', 'about', 'articles', 'contact'];

export default function SiteLayout({ children, locale, section, ui, canonical, alternates }) {
    const labels = ui.studio;
    const [menuOpen, setMenuOpen] = useState(false);
    const menuButton = useRef(null);
    const main = useRef(null);

    useEffect(() => {
        document.documentElement.lang = locale;
        setMenuOpen(false);
    }, [locale, canonical]);

    useEffect(() => {
        let frame;
        // Success is emitted for completed visits, not browser back/forward restores.
        const unsubscribe = router.on('success', event => {
            cancelAnimationFrame(frame);
            if (new URL(event.detail.page.url, window.location.href).hash) return;
            frame = requestAnimationFrame(() => main.current?.focus({ preventScroll: true }));
        });
        return () => { unsubscribe(); cancelAnimationFrame(frame); };
    }, []);

    const onEmail = () => track('contact_click', { contact_method: 'email', language: locale, page_path: new URL(canonical).pathname });

    return <div className={`studio-site${section === 'about' ? ' about-page' : ''}`} onKeyDown={event => {
        if (event.key === 'Escape' && menuOpen) { setMenuOpen(false); menuButton.current?.focus(); }
    }}>
        <a className="skip-link" href="#main">{labels.skip}</a>
        <header className="site-header"><div className="site-shell header-inner">
            <SiteLink className="site-brand" href={`/${locale}`} aria-label="Igor Józefowicz"><img className="site-brand-logo" src="/images/logo-igorjoz.svg" alt="" width="32" height="32" /><span>Igor Józefowicz<small>Software Engineer · Web & AI</small></span></SiteLink>
            <button ref={menuButton} className="menu-toggle" type="button" aria-expanded={menuOpen} aria-controls="studio-navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? labels.closeMenu : labels.menu}<span aria-hidden="true">{menuOpen ? '−' : '+'}</span></button>
            <nav id="studio-navigation" className={menuOpen ? 'is-open' : ''} aria-label={labels.navigation}>
                {navigation.map((path, i) => <SiteLink key={path} href={`/${locale}${path ? '/' + path : ''}`} aria-current={section === path ? 'page' : undefined} onClick={() => setMenuOpen(false)}>{ui.nav[i]}</SiteLink>)}
            </nav>
            <div className="language-switch" role="group" aria-label={labels.language}>{Object.entries(alternates).map(([lang, href]) => <SiteLink key={lang} href={href} hrefLang={lang} lang={lang} aria-label={lang === 'pl' ? 'Polski' : 'English'} title={lang === 'pl' ? 'Polski' : 'English'} aria-current={locale === lang ? 'true' : undefined}><img src={`/images/flag-${lang === 'pl' ? 'pl' : 'gb'}.svg`} alt="" width="30" height="20" /></SiteLink>)}</div>
        </div></header>
        <main id="main" className="site-shell" tabIndex={-1} ref={main}>{children}</main>
        <footer className="site-shell site-footer"><SiteLink href={`/${locale}`}>© {new Date().getFullYear()} Igor Józefowicz</SiteLink><span>{labels.footer}</span><a href="mailto:igor@jozefowicz.pl" onClick={onEmail}>igor@jozefowicz.pl <span className="link-arrow" aria-hidden="true">↗</span></a></footer>
    </div>;
}
