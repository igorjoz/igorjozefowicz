import React from 'react';
import Card, { CardBody, CardMedia } from '@/Components/Card';
import Button from '@/Components/Button';

// ProjectCard component
export default function ProjectCard({ imgSrc, imgAlt, title, description, links, isShortImage = false, extraClass = '', year }) {
        const handleImgError = (e) => {
                if (!e?.currentTarget) return;
                // Prevent infinite loop
                e.currentTarget.onerror = null;
                const fallbackSvg = encodeURIComponent(`
                        <svg xmlns='http://www.w3.org/2000/svg' width='800' height='450'>
                            <defs>
                                <linearGradient id='g' x1='0' y1='0' x2='1' y2='1'>
                                    <stop offset='0%' stop-color='#16161a'/>
                                    <stop offset='100%' stop-color='#3a0c2f'/>
                                </linearGradient>
                            </defs>
                            <rect fill='url(#g)' width='100%' height='100%'/>
                            <circle cx='15%' cy='20%' r='120' fill='rgba(255,107,203,0.15)'/>
                            <circle cx='85%' cy='30%' r='140' fill='rgba(0,200,255,0.12)'/>
                            <text x='50%' y='52%' dominant-baseline='middle' text-anchor='middle' fill='#ff6bcb' font-family='Inter, Ubuntu, Arial, sans-serif' font-weight='700' font-size='44'>Project</text>
                        </svg>
                `);
                e.currentTarget.src = `data:image/svg+xml;charset=utf-8,${fallbackSvg}`;
                e.currentTarget.classList.add('object-cover');
                e.currentTarget.style.width = '100%';
                e.currentTarget.style.height = '100%';
        };
    const isForcen = extraClass === 'project-card__image--forcen';
    const isVento = extraClass === 'project-card__image--vento';

    const mediaClass = isShortImage
        ? (isForcen ? 'h-[240px] md:h-[280px] py-[20px]' : 'h-[225px] py-[45px]')
        : 'h-[260px] md:h-[300px] lg:h-[320px]';

    const imgSizingClass = isShortImage
        ? (isForcen ? 'h-[170px] md:h-[190px] w-auto max-w-full mx-[40px] object-contain' : 'h-[225px] mx-[100px] py-[45px] object-contain')
        : 'w-full h-full object-cover';

    const imgScaleClass = isVento
        ? 'scale-[1.2] group-hover:scale-[1.35]'
        : isForcen
            ? 'group-hover:scale-[1.06]'
            : 'group-hover:scale-[1.08]';

    return (
        <Card className="flex flex-col">
            <CardMedia className={`${mediaClass} group ${(isForcen || isVento) ? 'bg-white' : ''}`}> 
                {year && (
                    <span className="absolute top-3 right-3 z-10 text-[1.2rem] font-semibold px-3 py-1 rounded-full shadow-sm bg-[rgba(28,28,34,0.85)] text-white ring-1 ring-white/10">
                        {year}
                    </span>
                )}
                <img
                    src={imgSrc}
                    alt={imgAlt}
                    onError={handleImgError}
                    className={`transition-transform duration-500 ease-out will-change-transform ${imgSizingClass} ${imgScaleClass} ${extraClass}`}
                />
            </CardMedia>
            <CardBody>
                <h3 className="text-[2.6rem] font-semibold mb-3 text-center text-white">
                    {title}
                </h3>
                <p className="text-[1.7rem] text-[var(--color-muted)] mb-6 flex-grow">
                    {description}
                </p>
                <div className="flex flex-col gap-3 mt-auto">
                    {links && links.map((link, index) => (
                        <Button key={index} href={link.url}>
                            {link.text}
                        </Button>
                    ))}
                </div>
            </CardBody>
        </Card>
    );
}
