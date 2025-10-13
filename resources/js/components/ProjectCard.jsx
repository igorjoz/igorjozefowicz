import React from 'react';
import Card, { CardBody, CardMedia } from '@/Components/Card';
import Button from '@/Components/Button';

// ProjectCard component
export default function ProjectCard({ imgSrc, imgAlt, title, description, links, isShortImage = false, extraClass = '' }) {
    return (
        <Card className="flex flex-col">
            <CardMedia className={`${isShortImage ? 'h-[225px] py-[45px]' : 'h-[260px] md:h-[300px] lg:h-[320px]'} group`}> 
                <img
                    src={imgSrc}
                    alt={imgAlt}
                    className={`transition-transform duration-500 ease-out will-change-transform ${
                        isShortImage ? 'h-[225px] mx-[100px] py-[45px] object-contain' : 'w-full h-full object-cover'
                    } ${extraClass === 'project-card__image--vento' ? 'scale-[1.2] group-hover:scale-[1.35]' : 'group-hover:scale-[1.08]'} ${extraClass}`}
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
