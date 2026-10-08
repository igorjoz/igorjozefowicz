import { Head } from '@inertiajs/react';
import { useEffect } from 'react';

export function track(name, data) {
    if (typeof window.gtag === 'function') window.gtag('event', name, data);
}

export default function Site({ locale, section, title, description, ui, sections, articleHtml, canonical, alternates }) {
    useEffect(() => {
        document.documentElement.lang = locale;
        if (['services', 'projects'].includes(section)) track('content_view', { content_type: section, page_path: new URL(canonical).pathname, language: locale });
    }, [locale, section, canonical]);
    const nav = ['', 'services', 'projects', 'about', 'articles', 'contact'];
    return <div className="site-shell">
        <Head title={`${title} | Igor Józefowicz`}>
            <meta name="description" content={description} head-key="description" />
            <link rel="canonical" href={canonical} head-key="canonical" />
            {Object.entries(alternates).map(([lang, href]) => <link key={lang} rel="alternate" hrefLang={lang} href={href} head-key={`alternate-${lang}`} />)}
            <link rel="alternate" hrefLang="x-default" href={alternates.pl} head-key="alternate-default" />
            <meta property="og:title" content={`${title} | Igor Józefowicz`} head-key="og-title" />
            <meta property="og:description" content={description} head-key="og-description" />
            <meta property="og:url" content={canonical} head-key="og-url" />
            <meta property="og:image" content={new URL('/storage/home/Igor.jpg', canonical).href} head-key="og-image" />
            <meta property="og:image:alt" content="Igor Józefowicz" head-key="og-image-alt" />
            <meta name="twitter:card" content="summary" head-key="twitter-card" />
            <meta property="og:type" content={articleHtml ? 'article' : 'website'} head-key="og-type" />
            <meta property="og:locale" content={locale === 'pl' ? 'pl_PL' : 'en_GB'} head-key="og-locale" />
        </Head>
        <a className="skip-link" href="#main">{locale === 'pl' ? 'Przejdź do treści' : 'Skip to content'}</a>
        <header className="site-header"><a className="site-brand" href={`/${locale}`}>Igor Józefowicz<span>Software Engineer · Web & AI</span></a>
            <nav aria-label={locale === 'pl' ? 'Nawigacja główna' : 'Main navigation'}>{nav.map((path, i) => <a key={path} href={`/${locale}${path ? '/'+path : ''}`} aria-current={section === path ? 'page' : undefined}>{ui.nav[i]}</a>)}</nav>
            <div className="language-switch" aria-label={locale === 'pl' ? 'Wybierz język' : 'Choose language'}>{Object.entries(alternates).map(([lang, href]) => <a key={lang} href={href} hrefLang={lang} lang={lang} aria-current={locale === lang ? 'true' : undefined}>{lang.toUpperCase()}</a>)}</div>
        </header>
        <main id="main"><section className="site-hero"><p className="site-eyebrow">Igor Józefowicz / Web & AI</p><h1>{title}</h1>{!section && <><p>{ui.intro}</p><div className="site-actions"><a className="site-button" href="#contact">{ui.cta}</a><a href={`/${locale}/projects`}>{ui.work} →</a></div></>}</section>
            {articleHtml && <article className="site-article" dangerouslySetInnerHTML={{ __html: articleHtml }} />}
            <div className="site-sections">{sections.map(s => <section className={`site-panel ${s.id === 'contact' ? 'site-contact' : ''}`} id={s.id} key={s.id}>{s.image && <img className="site-project-image" src={s.image} alt={s.imageAlt} loading="lazy" width="640" height="260" />}<h2>{s.heading}</h2>{s.paragraphs.map((p,i) => <p key={i}>{p}</p>)}{s.items.length > 0 && <ul>{s.items.map(item => <li key={item}>{item}</li>)}</ul>}<div className="site-links">{s.links.map(link => <a key={link.href} href={link.href} onClick={() => {if (link.href.startsWith('mailto:')) track('contact_click', { contact_method: 'email', language: locale, page_path: new URL(canonical).pathname });}}>{link.label} ↗</a>)}</div></section>)}</div>
        </main><footer className="site-footer">© {new Date().getFullYear()} Igor Józefowicz · <a href="mailto:igor@jozefowicz.pl" onClick={() => track('contact_click', { contact_method: 'email', language: locale })}>igor@jozefowicz.pl</a></footer>
    </div>;
}
