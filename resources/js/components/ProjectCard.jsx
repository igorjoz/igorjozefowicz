import React from 'react';

// ProjectCard component
export default function ProjectCard({ imgSrc, imgAlt, title, description, links, isShortImage = false, extraClass = '' }) {
    return (
        <div className="w-full mx-auto bg-white border border-[#ddd] rounded-lg overflow-hidden shadow-[0_2px_4px_rgba(0,0,0,0.1)] hover:shadow-[0_10px_40px_rgba(255,147,165,0.4)] transition-all duration-300 flex flex-col">
            <div className={`w-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 to-white ${isShortImage ? 'h-[225px] py-[45px]' : 'h-[260px] md:h-[300px] lg:h-[320px]'}`}>
                <img 
                    src={imgSrc} 
                    alt={imgAlt} 
                    className={`transition-transform duration-300 ease-in-out ${
                        isShortImage ? 'h-[225px] mx-[100px] py-[45px] object-contain' : 'w-full h-full object-cover'
                    } ${extraClass === 'project-card__image--vento' ? 'scale-[1.3]' : ''} ${extraClass}`}
                    onMouseOver={(e) => {
                        if (extraClass === 'project-card__image--vento') {
                            e.currentTarget.style.transform = 'scale(1.5)';
                        } else {
                            e.currentTarget.style.transform = 'scale(1.1)';
                        }
                    }}
                    onMouseOut={(e) => {
                        if (extraClass === 'project-card__image--vento') {
                            e.currentTarget.style.transform = 'scale(1.3)';
                        } else {
                            e.currentTarget.style.transform = 'scale(1)';
                        }
                    }}
                />
            </div>
            <div className="p-7 flex flex-col flex-grow">
                <h3 className="text-[2.6rem] font-semibold mb-3 text-[#666] text-center">
                    {title}
                </h3>
                <p className="text-[1.7rem] text-[#666] mb-4 flex-grow">
                    {description}
                </p>
                <div className="flex flex-col gap-3 mt-auto">
                    {links && links.map((link, index) => (
                        <a 
                            key={index}
                            href={link.url} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="inline-block py-3 px-4 text-[1.6rem] rounded-md text-white text-center no-underline transition-all duration-300 font-semibold shadow-md hover:shadow-lg"
                            style={{ backgroundColor: 'rgb(255, 147, 165)' }}
                            onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'rgb(204, 98, 118)'}
                            onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'rgb(255, 147, 165)'}
                        >
                            {link.text}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}
