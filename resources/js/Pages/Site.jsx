import { Head } from '@inertiajs/react';
import { useEffect, useRef, useState } from 'react';
import SiteLayout from '@/Layouts/SiteLayout';
import SiteLink from '@/components/SiteLink';
import { track } from '@/utils/analytics';
import { handleArticleLinkClick } from '@/utils/siteNavigation';

const Arrow = () => <span className="link-arrow" aria-hidden="true">↗</span>;

function Project({ item, index, labels }) {
    const project = item.project;
    return <section className={`project-scene project-${item.id} reveal`} id={item.id}>
        <SiteLink className="project-visual" href={item.links[0]?.href} tabIndex={-1} aria-hidden="true">
            <span className="project-visual-grid" />
            <span className="project-number">0{index + 1} / {labels.project}</span>
            <img src={item.image} alt="" loading="lazy" width="640" height="360" />
            <span className="project-visual-footer"><span>{project?.technologies.split(',').slice(0, 3).join(' / ')}</span><span>↗</span></span>
        </SiteLink>
        <div className="project-copy"><p className="site-eyebrow">0{index + 1} — {labels.project}</p><h3><SiteLink href={item.links[0]?.href}>{item.heading} <Arrow /></SiteLink></h3>
            {item.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
            {project && <div className="project-contribution"><h4>{labels.contribution}</h4><p>{project.paragraphs[2]}</p></div>}
            <div className="technology-list">{project?.technologies.split(',').map(tech => <span key={tech}>{tech.trim()}</span>)}</div>
            <SiteLink className="text-link" href={item.links[0]?.href}>{labels.readCase} <Arrow /></SiteLink>
        </div>
    </section>;
}

function ContentSection({ item: s, ui, onEmail, children, aboutPage = false }) {
    const labels = ui.studio;
    if (s.id === 'about') return <section className="studio-section section-about reveal" id="about">
        <header className="about-heading"><p className="site-eyebrow">{ui.bio}</p><h2>{labels.aboutTitle}</h2><p className="section-lead">{labels.aboutNote}</p></header>
        <div className="about-portrait"><img src="/images/igor-portrait-640.webp" srcSet="/images/igor-portrait-320.webp 320w, /images/igor-portrait-640.webp 640w, /images/igor-portrait-960.webp 960w" sizes={`(max-width: 800px) 200px, (max-width: 1100px) 260px, ${aboutPage ? 360 : 320}px`} width="640" height="800" loading="lazy" decoding="async" alt={labels.portraitAlt} /></div>
        <div className="about-copy">{s.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
            <div className="expertise-list">{labels.expertise.map((label, i) => <span key={label}><small>0{i + 1}</small>{label}</span>)}</div>
            <div className="site-links">{s.links.map(link => <SiteLink key={link.href} href={link.href}>{link.label} <Arrow /></SiteLink>)}</div>
        </div>
    </section>;
    if (s.id === 'contact') return <section className="studio-contact reveal" id="contact">
        <p className="site-eyebrow">{ui.contact}</p><h2>{labels.contactTitle}</h2>
        <SiteLink className="contact-email" href="mailto:igor@jozefowicz.pl" onClick={onEmail}>igor@jozefowicz.pl <Arrow /></SiteLink>
        {children}
        {s.paragraphs.map((p, i) => <p className="contact-note" key={i}>{p}</p>)}
        <div className="site-links" aria-label={labels.elsewhere}><SiteLink href="https://github.com/igorjoz">GitHub <Arrow /></SiteLink><SiteLink href="https://www.linkedin.com/in/igor-jozefowicz/">LinkedIn <Arrow /></SiteLink></div>
    </section>;
    return <section className={`studio-section reveal section-${s.id} ${s.kind === 'service' ? 'service-section' : ''}`} id={s.id}>
        <p className="site-eyebrow">{s.id === 'process' ? labels.processNote : s.kind === 'service' ? ui.services : s.id === 'articles' ? labels.articlesNote : 'Web / AI'}</p>
        <h2>{s.heading}</h2>
        {s.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
        {s.items.length > 0 && (s.id === 'process' ? <ol className="process-list">{s.items.map((item, i) => <li key={item}><span>0{i + 1}</span><p>{item}</p></li>)}</ol> : <ul>{s.items.map(item => <li key={item}>{item}</li>)}</ul>)}
        <div className={`site-links ${s.id === 'articles' || s.id === 'portfolio' ? 'editorial-links' : ''}`}>{s.links.map(link => <SiteLink key={link.href} href={link.href} onClick={link.href.startsWith('mailto:') ? onEmail : undefined}>{link.label} <Arrow /></SiteLink>)}</div>
    </section>;
}

export default function Site({ locale, section, title, description, ui, sections, articleHtml, canonical, alternates, presentation = {} }) {
    const labels = ui.studio;
    const [copyStatus, setCopyStatus] = useState('');
    const copyTimer = useRef(null);
    const home = !section;
    const projects = sections.filter(item => item.kind === 'project');
    const remaining = sections.filter(item => item.kind !== 'project');
    const onEmail = () => track('contact_click', { contact_method: 'email', language: locale, page_path: new URL(canonical).pathname });

    useEffect(() => {
        if (['services', 'projects'].includes(section)) track('content_view', { content_type: section, page_path: new URL(canonical).pathname, language: locale });
    }, [locale, section, canonical]);
    useEffect(() => () => clearTimeout(copyTimer.current), []);
    useEffect(() => {
        const query = window.matchMedia?.('(prefers-reduced-motion: reduce)');
        if (!('IntersectionObserver' in window) || query?.matches) return;
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); } });
        }, { threshold: 0.08 });
        document.querySelectorAll('.reveal').forEach(element => {
            // Content is visible by default, even if observer setup fails.
            element.classList.add('will-reveal'); observer.observe(element);
        });
        return () => { observer.disconnect(); document.querySelectorAll('.will-reveal').forEach(element => element.classList.remove('will-reveal')); };
    }, [canonical]);

    const copy = async () => {
        try { await navigator.clipboard.writeText('igor@jozefowicz.pl'); setCopyStatus(labels.copied); }
        catch { setCopyStatus(labels.copyFailed); }
        clearTimeout(copyTimer.current);
        copyTimer.current = setTimeout(() => setCopyStatus(''), 5000);
    };

    return <>
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
            {home ? <section className="studio-hero">
                <div className="hero-copy">
                    <h1>{ui.hero}</h1>
                    <p className="hero-intro">{ui.intro}</p>
                    <div className="site-actions"><SiteLink className="site-button" href="#contact">{ui.cta}</SiteLink><SiteLink className="text-link" href={`/${locale}/projects`}>{ui.work}<Arrow /></SiteLink></div>
                </div>
            </section> : <section className={`page-hero ${presentation.project ? 'project-detail-hero' : ''}`}>
                <div><p className="site-eyebrow">Igor Józefowicz / {presentation.project ? labels.project : 'Web & AI'}</p><h1>{title}</h1>
                {presentation.project && <><p>{presentation.project.paragraphs[0]}</p><SiteLink className="text-link" href={`/${locale}/projects`}>← {labels.backProjects}</SiteLink></>}</div>
                {presentation.project && <div className={`project-detail-image project-${presentation.project.slug}`}><img src={presentation.project.image} alt={presentation.project.imageAlt} width="640" height="360" /></div>}
            </section>}
            {articleHtml && <article className="site-article" onClick={handleArticleLinkClick} dangerouslySetInnerHTML={{ __html: articleHtml }} />}
            {projects.length > 0 && <div className="selected-work"><div className="section-heading"><div><p className="site-eyebrow">01 / {labels.selected}</p><h2>{labels.selected}</h2><p>{labels.selectedNote}</p></div>{home && <SiteLink className="text-link" href={`/${locale}/projects`}>{labels.allProjects}<Arrow /></SiteLink>}</div>
                {projects.map((item, index) => <Project key={item.id} item={item} index={index} labels={labels} />)}
            </div>}
            <div className={`studio-sections ${presentation.project ? 'case-study' : ''}`}>{remaining.map(item => <ContentSection key={item.id} item={item} ui={ui} onEmail={onEmail} aboutPage={section === 'about'}>
                <div className="copy-email"><button type="button" onClick={copy}>{labels.copy}<span aria-hidden="true"> ⧉</span></button><span role="status">{copyStatus}</span></div>
            </ContentSection>)}</div>
    </>;
}

Site.layout = page => <SiteLayout {...page.props}>{page}</SiteLayout>;
