@extends('layouts.main')

@section('content')

<section class="home__header-section" id="hero-section">
    <h1 class="home__header-name">
        Igor Józefowicz
    </h1>

    {{-- <div class="home__header-image-wrapper">
        <img src="{{ Storage::url('public/favicon.png') }}" alt="Igor Józefowicz" class="home__header-image">
    </div> --}}

    <h2 class="home__subheader-role">
        Software Engineer
    </h2>

    <div class="home__links-wrapper">
        <div class="home__link-wrapper">
            <a href="https://github.com/igorjoz" class="home__image-wrapper-link" target="_blank" rel="noopener noreferrer" title="&commat;igorjoz">
                <img src="{{ Storage::url('public/icons/github.png') }}" alt="Github" class="home__link-image home__link-image">
            </a>

            <a href="https://github.com/igorjoz" class="home__contact-link" target="_blank" rel="noopener noreferrer" title="&commat;igorjoz">
                Github
            </a>
        </div>

        <div class="home__link-wrapper">
            <a href="https://www.linkedin.com/in/igor-jozefowicz/" class="home__image-wrapper-link" target="_blank" rel="noopener noreferrer" title="/in/igor-jozefowicz/">
                <img src="{{ Storage::url('public/icons/linkedin.png') }}" alt="LinkedIn" class="home__link-image">
            </a>

            <a href="https://www.linkedin.com/in/igor-jozefowicz/" class="home__contact-link" target="_blank" rel="noopener noreferrer" title="/in/igor-jozefowicz/">
                LinkedIn
            </a>
        </div>

        <div class="home__link-wrapper">
            <a href="mailto:igor@jozefowicz.pl" class="home__image-wrapper-link" rel="noopener noreferrer" title="igor@jozefowicz.pl">
                <img src="{{ Storage::url('public/icons/email.png') }}" alt="Email" class="home__link-image">
            </a>

            <a href="mailto:igor@jozefowicz.pl" class="home__contact-link" rel="noopener noreferrer" title="igor@jozefowicz.pl">
                Email
            </a>
        </div>
    </div>

    <div class="scroll-arrow">
        <a href="#bio-section">
            <i class="fa-solid fa-chevron-down" aria-hidden="true"></i>
        </a>
    </div>
</section>

<section class="home__bio-section" id="bio-section">
    <div class="home__bio-text-wrapper">
        <h2 class="home__bio-header">
            About me
        </h2>

        <p class="home__bio-text">
            Hello there! I'm Igor Józefowicz, also known as <a href="https://github.com/igorjoz" target="_blank" rel="noopener noreferrer" class="home__link">&commat;igorjoz</a>. Since 2018, I've&nbsp;been immersed in web development, focusing on PHP & Laravel to&nbsp;create impactful digital solutions. I&nbsp;complement my technical endeavors with academic studies in Computer Science at Gdańsk University of Technology.
        </p>

        <p class="home__bio-text">
            As a&nbsp;passionate educator, I&nbsp;teach programming at Giganci Programowania, covering topics from Hacking & Cybersecurity to Python and C++. When not teaching, I&nbsp;enjoy challenging myself with Competitive Programming contests and deepening my&nbsp;understanding of Computer Architecture & Assembly, alongside Database Design.
        </p>

        <p class="home__bio-text">
            I'm excited to connect with fellow tech enthusiasts and professionals. Explore my website to learn more about my work or reach out on <a href="https://www.linkedin.com/in/igor-jozefowicz/" target="_blank" rel="noopener noreferrer" class="home__link">LinkedIn</a>. For collaborations or inquiries, don't hesitate to send me an email: <a href="mailto:igor@jozefowicz.pl" target="_blank" rel="noopener noreferrer" class="home__link">igor@jozefowicz.pl</a>.
        </p>
    </div>

    {{-- <div style="height: 50px;"></div> <!-- Adjust height as necessary --> --}}

    {{-- <div class="scroll-arrow" style="position: relative;">
        <a href="#projects-section" style="text-align: center;">
            <i class="fa fa-chevron-down" aria-hidden="true" style="text-align: center;"></i>
        </a>
    </div> --}}
</section>


<section class="home__projects-section" id="projects-section">
    <div class="home__projects-text-wrapper">
        <h2 class="home__projects-header">
            Projects
        </h2>

        <p class="home__projects-text">
            🏆 My major achievement in web development is the <a href="https://www.e-kominki.com/" target="_blank" rel="noopener noreferrer" class="home__link">Vento website & online shop</a>, created in&nbsp;2020-2021 for a&nbsp;Polish company specializing in heating and ventilation.
        </p>

        <p class="home__projects-text">
            ⭐ I've&nbsp;also developed several Laravel applications, such as the <a href="https://github.com/igorjoz/employees_directory" target="_blank" rel="noopener noreferrer" class="home__link">Employees&nbsp;Directory</a>, a&nbsp;database management software for employees and departments, and the <a href="https://github.com/igorjoz/anon-surv" target="_blank" rel="noopener noreferrer" class="home__link">Anonymous&nbsp;Surveys</a> app, allowing users to create and analyze anonymous surveys.
        </p>

        <p class="home__projects-text">
            🎯 Some other notable projects include the <a href="https://github.com/igorjoz/spy-hunter-game" target="_blank" rel="noopener noreferrer" class="home__link">Spy&nbsp;Hunter&nbsp;Game</a>, an&nbsp;Atari 2600-styled game, the&nbsp;Python-based <a href="https://github.com/igorjoz/game-of-life-python" target="_blank" rel="noopener noreferrer" class="home__link">Game&nbsp;of&nbsp;Life</a>, and the <a href="https://github.com/igorjoz/css-processor" target="_blank" rel="noopener noreferrer" class="home__link">CSS&nbsp;Processor</a> for Algorithms & Data Structures course.
        </p>
    </div>
</section>


<section class="home__project-cards-section">
    <div class="project-card">
        <div class="project-card__image-wrapper">
            <img src="{{ Storage::url('public/projects/vento-logo.svg') }}" alt="Vento Website" class="project-card__image project-card__image--short project-card__image--vento">
        </div>
        <div class="project-card__content">
            <h3 class="project-card__title">Vento Kominki Website&nbsp;& Online Shop</h3>
            <p class="project-card__description">A comprehensive Laravel web application for Vento, focusing on heating and ventilation solutions. Developed in 2020-2021.</p>
            <a href="https://www.e-kominki.com/" target="_blank" rel="noopener noreferrer" class="project-card__link">Visit website</a>
        </div>
    </div>

    <div class="project-card">
        <div class="project-card__image-wrapper">
            <img src="{{ Storage::url('public/projects/employees_directory.webp') }}" alt="Employees Directory" class="project-card__image">
        </div>
        <div class="project-card__content">
            <h3 class="project-card__title">Employees Directory</h3>
            <p class="project-card__description">A Laravel app for managing employees and departments.</p>
            <a href="https://github.com/igorjoz/employees_directory" target="_blank" rel="noopener noreferrer" class="project-card__link">View repository</a>
        </div>
    </div>

    <div class="project-card">
        <div class="project-card__image-wrapper">
            <img src="{{ Storage::url('public/projects/anonymous-surveys.webp') }}" alt="Anonymous Surveys" class="project-card__image">
        </div>
        <div class="project-card__content">
            <h3 class="project-card__title">Anonymous Surveys</h3>
            <p class="project-card__description">A Laravel app that allows users to create anonymous surveys.</p>
            <a href="https://github.com/igorjoz/anon-surv" target="_blank" rel="noopener noreferrer" class="project-card__link">View repository</a>
        </div>
    </div>

    <div class="project-card">
        <div class="project-card__image-wrapper">
            <img src="{{ Storage::url('public/projects/driving-course-for-ai.webp') }}" alt="Anonymous Surveys" class="project-card__image">
        </div>

        <div class="project-card__content">
            <h3 class="project-card__title">Driving Course for AI</h3>

            <p class="project-card__description">Machine learning project made with Unity. And a bit of love!</p>

            <a href="https://docs.google.com/document/d/1jKZnomEy_Bo613_xQswbK1qzhcIcbXEKB5TfghTAJYg/edit?usp=sharing" target="_blank" rel="noopener noreferrer" class="project-card__link">View documentation</a>

            <a href="https://github.com/igorjoz/anon-surv" target="_blank" rel="noopener noreferrer" class="project-card__link">View repository</a>
        </div>
    </div>

    <div class="project-card">
        <div class="project-card__image-wrapper">
            <img src="{{ Storage::url('public/projects/vulnerability-vault.webp') }}" alt="Anonymous Surveys" class="project-card__image">
        </div>
        <div class="project-card__content">
            <h3 class="project-card__title">Vulnerability Vault</h3>
            <p class="project-card__description">Do you want to learn hacking? Check out my cybersec project.</p>
            <a href="https://igorjozefowicz.com/" target="_blank" rel="noopener noreferrer" class="project-card__link">View website</a>
            <a href="https://github.com/igorjoz/vulnerability-vault" target="_blank" rel="noopener noreferrer" class="project-card__link">View repository</a>
        </div>
    </div>

    <div class="project-card">
        <div class="project-card__image-wrapper">
            <img src="{{ Storage::url('public/projects/game-of-life.webp') }}" alt="Game of Life" class="project-card__image">
        </div>

        <div class="project-card__content">
            <h3 class="project-card__title">Game of Life</h3>

            <p class="project-card__description">A turn-based game written in Python, pygame and Java, Spring</p>

            <a href="https://github.com/igorjoz/game-of-life-python" target="_blank" rel="noopener noreferrer" class="project-card__link">View Python repository</a>

            <a href="https://github.com/igorjoz/game-of-life-java" target="_blank" rel="noopener noreferrer" class="project-card__link">View Java repository</a>
        </div>
    </div>

    <div class="project-card">
        <div class="project-card__image-wrapper">
            <img src="{{ Storage::url('public/projects/spy-hunter-crop.png') }}" alt="Spy Hunter Game" class="project-card__image">
        </div>
        <div class="project-card__content">
            <h3 class="project-card__title">Spy Hunter Game</h3>
            <p class="project-card__description">An Atari 2600-styled game created with C++ & SDL library.</p>
            <a href="https://github.com/igorjoz/spy-hunter-game" target="_blank" rel="noopener noreferrer" class="project-card__link">View Repository</a>
        </div>
    </div>

    <div class="project-card">
        <div class="project-card__image-wrapper">
            <img src="{{ Storage::url('public/projects/finance-and-investing.webp') }}" alt="Finance and Investing" class="project-card__image">
        </div>
        <div class="project-card__content">
            <h3 class="project-card__title">Finance and Investing</h3>
            <p class="project-card__description">A PHP application created without backend framework.</p>
            <a href="https://github.com/igorjoz/finance-and-investing/tree/main/src" target="_blank" rel="noopener noreferrer" class="project-card__link">View repository</a>
        </div>
    </div>

    <div class="project-card">
        <div class="project-card__image-wrapper">
            <img src="{{ Storage::url('public/projects/matura.webp') }}" alt="Matura Exam Solutions" class="project-card__image">
        </div>
        <div class="project-card__content">
            <h3 class="project-card__title">Matura Exam Solutions</h3>
            <p class="project-card__description">Solutions for 2014-2022 Polish Matura exam sheets.</p>
            <a href="https://github.com/igorjoz/matura" target="_blank" rel="noopener noreferrer" class="project-card__link">View repository</a>
        </div>
    </div>
</section>

@endsection
