import { Head } from '@inertiajs/react';
import Layout from '@/Layouts/Layout';
import SocialLink from '@/Components/SocialLink';
import ScrollArrow from '@/Components/ScrollArrow';
import ProjectCard from '@/Components/ProjectCard';
import { storageUrl } from '@/utils/assets';

export default function Index() {
    const projects = [
        {
            imgSrc: storageUrl('public/projects/larynxai.png'),
            imgAlt: 'LarynxAI',
            title: 'LarynxAI',
            description: 'A system for dataset management and photo tagging; my part focused on building a classifier for laryngeal diseases.',
            links: [
                { text: 'View organization', url: 'https://github.com/LarynxAI' }
            ],
            year: '2025'
        },
        {
            imgSrc: storageUrl('public/projects/logo-forcen.svg'),
            imgAlt: 'Forcen',
            title: 'Forcen',
            description: 'Business website with AI features. Implemented chatbot integration with an LLM API provider and a RAG (Retrieval-Augmented Generation) system to ground answers in company data.',
            links: [
                { text: 'Visit website', url: 'https://forcen.pl/' }
            ],
            isShortImage: true,
            extraClass: 'project-card__image--forcen',
            year: '2025'
        },
        {
            imgSrc: storageUrl('public/projects/vento-logo.svg'),
            imgAlt: 'Vento Website',
            title: 'Vento Kominki Website & Online Shop',
            description: 'A comprehensive Laravel web application for Vento, focusing on heating and ventilation solutions. Developed in 2020-2021.',
            links: [
                { text: 'Visit website', url: 'https://www.e-kominki.com/' }
            ],
            isShortImage: true,
            extraClass: 'project-card__image--vento',
            year: '2020'
        },
        {
            imgSrc: storageUrl('public/projects/employees_directory.webp'),
            imgAlt: 'Employees Directory',
            title: 'Employees Directory',
            description: 'A Laravel app for managing employees and departments.',
            links: [
                { text: 'View repository', url: 'https://github.com/igorjoz/employees_directory' }
            ],
            year: '2022'
        },
        {
            imgSrc: storageUrl('public/projects/anonymous-surveys.webp'),
            imgAlt: 'Anonymous Surveys',
            title: 'Anonymous Surveys',
            description: 'A Laravel app that allows users to create anonymous surveys.',
            links: [
                { text: 'View repository', url: 'https://github.com/igorjoz/anon-surv' }
            ],
            year: '2022'
        },
                {
                    imgSrc: storageUrl('public/projects/driving-course-for-ai.webp'),
                    imgAlt: 'Driving Course for AI',
                    title: 'Driving Course for AI',
                    description: 'Machine learning project made with Unity. And a bit of love!',
                    links: [
                        { text: 'View documentation', url: 'https://docs.google.com/document/d/1jKZnomEy_Bo613_xQswbK1qzhcIcbXEKB5TfghTAJYg/edit?usp=sharing' },
                        { text: 'View repository', url: 'https://github.com/igorjoz/driving-course-for-ai' }
                    ],
                    year: '2024'
                },
        {
            imgSrc: storageUrl('public/projects/vulnerability-vault.webp'),
            imgAlt: 'Vulnerability Vault',
            title: 'Vulnerability Vault',
            description: 'Do you want to learn hacking? Check out my cybersec project.',
            links: [
                { text: 'View website', url: 'https://igorjozefowicz.com/' },
                { text: 'View repository', url: 'https://github.com/igorjoz/vulnerability-vault' }
            ],
            year: '2024'
        },
        {
            imgSrc: storageUrl('public/projects/game-of-life.webp'),
            imgAlt: 'Game of Life',
            title: 'Game of Life',
            description: 'A turn-based game written in Python, pygame and Java, Spring.',
            links: [
                { text: 'View Python repository', url: 'https://github.com/igorjoz/game-of-life-python' },
                { text: 'View Java repository', url: 'https://github.com/igorjoz/game-of-life-java' }
            ],
            year: '2023'
        },
        {
            imgSrc: storageUrl('public/projects/finance-and-investing.webp'),
            imgAlt: 'Finance and Investing',
            title: 'Finance and Investing',
            description: 'A PHP application created without backend framework.',
            links: [
                { text: 'View repository', url: 'https://github.com/igorjoz/finance-and-investing/tree/main/src' }
            ],
            year: '2022'
        },
        {
            imgSrc: storageUrl('public/projects/matura.webp'),
            imgAlt: 'Matura Exam Solutions',
            title: 'Matura Exam Solutions',
            description: 'Solutions for 2014-2022 Polish Matura exam sheets.',
            links: [
                { text: 'View repository', url: 'https://github.com/igorjoz/matura' }
            ],
            year: '2021'
        }
    ];

    return (
        <Layout>
            <Head title="Home" />

            {/* Hero Section */}
            <section className="min-h-screen flex flex-col items-center justify-center text-white px-4" id="hero-section">
                <h1 className="hero-name text-6xl xs:text-7xl sm:text-8xl md:text-9xl font-bold mb-36 text-center" style={{ textShadow: '4px 4px 0px rgba(255, 192, 203, 0.8)' }}>
                    Igor Józefowicz
                </h1>

                <h2 className="hero-title text-5xl xs:text-6xl sm:text-7xl md:text-8xl text-white mb-36 text-center font-bold">
                    Software Engineer
                </h2>

                <div className="flex flex-col sm:flex-row flex-wrap gap-8 sm:gap-12 justify-center mb-16">
                    <SocialLink
                        href="https://github.com/igorjoz"
                        imgSrc={storageUrl('public/icons/github.png')}
                        imgAlt="Github"
                        text="Github"
                        title="@igorjoz"
                    />
                    <SocialLink
                        href="https://www.linkedin.com/in/igor-jozefowicz/"
                        imgSrc={storageUrl('public/icons/linkedin.png')}
                        imgAlt="LinkedIn"
                        text="LinkedIn"
                        title="/in/igor-jozefowicz/"
                    />
                    <SocialLink
                        href="mailto:igor@jozefowicz.pl"
                        imgSrc={storageUrl('public/icons/email.png')}
                        imgAlt="Email"
                        text="Email"
                        title="igor@jozefowicz.pl"
                    />
                </div>

                <ScrollArrow targetId="bio-section" />
            </section>

            {/* Bio Section */}
            <section className="min-h-[90vh] flex items-center justify-center py-20 px-4" id="bio-section">
                <div className="max-w-7xl mx-auto w-full">
                    <h2 className="text-5xl xs:text-6xl sm:text-7xl md:text-8xl font-bold mb-20 text-white text-center underline decoration-white decoration-2 underline-offset-8">
                        About me
                    </h2>

                    <div className="space-y-8 text-white text-xl sm:text-2xl md:text-3xl leading-relaxed">
                        <p>
                            Hello there! I'm Igor Józefowicz — also known as <a href="https://github.com/igorjoz" target="_blank" rel="noopener noreferrer" className="text-pink-300 hover:text-pink-200 underline decoration-wavy transition-all inline-block font-semibold">@igorjoz</a>. Since 2018, I’ve been developing web and AI-powered applications using PHP, Laravel, and React. I currently work as a Full Stack Developer at Matysart, creating modern, scalable digital solutions.
                        </p>

                        <p>
                            I study Computer Science at the <a href="https://pg.edu.pl/" target="_blank" rel="noopener noreferrer" className="text-pink-300 hover:text-pink-200 underline decoration-wavy transition-all inline-block font-semibold">Gdańsk University of Technology</a>, focusing on machine learning, deep learning models, and software architecture. I enjoy turning complex ideas into practical, intelligent software.
                        </p>

                        <p>
                            As an educator, I teach an Artificial Intelligence course at <a href="https://www.giganciprogramowania.edu.pl/" target="_blank" rel="noopener noreferrer" className="text-pink-300 hover:text-pink-200 underline decoration-wavy transition-all inline-block font-semibold">Coding Giants</a>, guiding students through neural networks, computer vision, and Python-based AI projects while inspiring curiosity about modern technology.
                        </p>

                        <p>
                            I’m always excited to connect with fellow tech enthusiasts and professionals. Explore my website to learn more about my work or reach out on <a href="https://www.linkedin.com/in/igor-jozefowicz/" target="_blank" rel="noopener noreferrer" className="text-pink-300 hover:text-pink-200 underline decoration-wavy transition-all inline-block font-semibold">LinkedIn</a>. For collaborations or inquiries, email me at <a href="mailto:igor@jozefowicz.pl" className="text-pink-300 hover:text-pink-200 underline decoration-wavy transition-all inline-block font-semibold">igor@jozefowicz.pl</a>.
                        </p>
                    </div>

                    {/* Arrow to projects with extra spacing */}
                    <ScrollArrow targetId="projects-section" className="mt-20 sm:mt-24 md:mt-28" />
                </div>
            </section>

            {/* Projects Intro Section */}
            <section className="min-h-[90vh] flex items-center justify-center py-20 px-4" id="projects-section">
                <div className="max-w-7xl mx-auto w-full">
                    <h2 className="text-5xl xs:text-6xl sm:text-7xl md:text-8xl font-bold mb-20 text-white text-center underline decoration-white decoration-2 underline-offset-8">
                        Projects
                    </h2>

                    <div className="space-y-8 text-white text-xl sm:text-2xl md:text-3xl leading-relaxed">
                        <p>
                            🏆 Highlights include <a href="https://github.com/LarynxAI" target="_blank" rel="noopener noreferrer" className="text-pink-300 hover:text-pink-200 underline decoration-wavy transition-all inline-block font-semibold">LarynxAI</a> (dataset management, photo tagging, and my classifier for laryngeal diseases) and the <a href="https://www.e-kominki.com/" target="_blank" rel="noopener noreferrer" className="text-pink-300 hover:text-pink-200 underline decoration-wavy transition-all inline-block font-semibold">Vento website & online shop</a> for a Polish heating and ventilation company (2020–2021).
                        </p>

                        <p>
                            ⭐ I’ve also built practical Laravel apps such as the <a href="https://github.com/igorjoz/employees_directory" target="_blank" rel="noopener noreferrer" className="text-pink-300 hover:text-pink-200 underline decoration-wavy transition-all inline-block font-semibold">Employees Directory</a> and <a href="https://github.com/igorjoz/anon-surv" target="_blank" rel="noopener noreferrer" className="text-pink-300 hover:text-pink-200 underline decoration-wavy transition-all inline-block font-semibold">Anonymous Surveys</a>.
                        </p>

                        <p>
                            🎯 Other notable work: <a href="https://forcen.pl/" target="_blank" rel="noopener noreferrer" className="text-pink-300 hover:text-pink-200 underline decoration-wavy transition-all inline-block font-semibold">Forcen</a> (LLM chatbot integration + RAG grounded in company data) and the <span className="text-pink-300 font-semibold">Driving Course for AI</span> project (Unity + ML).
                        </p>
                    </div>

                    {/* Arrow to project cards (lowered) */}
                    <ScrollArrow targetId="project-cards" className="mt-24 sm:mt-28 md:mt-32" />
                </div>
            </section>

            {/* Project Cards Section */}
            {/* Reduced top padding to pull cards closer to arrow */}
            <section className="pt-6 pb-20 px-4" id="project-cards">
                <div className="max-w-7xl 2xl:max-w-[1500px] mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 2xl:gap-10">
                        {projects.map((project, index) => (
                            <ProjectCard
                                key={index}
                                imgSrc={project.imgSrc}
                                imgAlt={project.imgAlt}
                                title={project.title}
                                description={project.description}
                                links={project.links}
                                isShortImage={project.isShortImage}
                                extraClass={project.extraClass}
                                year={project.year}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </Layout>
    );
}
