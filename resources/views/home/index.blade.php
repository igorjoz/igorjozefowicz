@extends('layouts.main')

@section('content')

{{-- @include('components.main.navigation') --}}

<section class="home__header-section">
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
            <a href="https://github.com/igorjoz" class="home__image-wrapper-link" target="_blank" rel="noopener noreferrer">
                <img src="{{ Storage::url('public/icons/github.png') }}" alt="Github" class="home__link-image home__link-image--github">
            </a>

            <a href="https://github.com/igorjoz" class="home__contact-link" target="_blank" rel="noopener noreferrer">
                Github
            </a>
        </div>

        <div class="home__link-wrapper">
            <a href="https://www.linkedin.com/in/igor-jozefowicz/" class="home__image-wrapper-link" target="_blank" rel="noopener noreferrer">
                <img src="{{ Storage::url('public/icons/linkedin.png') }}" alt="LinkedIn" class="home__link-image">
            </a>

            <a href="https://www.linkedin.com/in/igor-jozefowicz/" class="home__contact-link" target="_blank" rel="noopener noreferrer">
                LinkedIn
            </a>
        </div>

        <div class="home__link-wrapper">
            <a href="mailto:igor@jozefowicz.pl" class="home__image-wrapper-link" rel="noopener noreferrer">
                <img src="{{ Storage::url('public/icons/email.png') }}" alt="Email" class="home__link-image">
            </a>

            <a href="mailto:igor@jozefowicz.pl" class="home__contact-link" rel="noopener noreferrer">
                Email
            </a>
        </div>
    </div>

    {{-- scroll arrow --}}

</section>

{{-- bio section --}}
{{-- <section class="home__bio-section">
    <div class="home__bio-text-wrapper">
        <h2 class="home__bio-header">
            About me
        </h2>

        <p class="home__bio-text">
            Hello there! I'm Igor Józefowicz, also known as <a href="https://github.com/igorjoz" target="_blank" rel="noopener noreferrer" class="home__bio-link">@igorjoz</a> on GitHub. I've been on a programming journey since 2018, nurturing my skills as a web developer. With three years of professional experience under my belt, my tools of choice are PHP and Laravel, which I use to craft robust web solutions.
        </p>

        <p class="home__bio-text">
            My curiosity doesn't stop at web development; I'm also captivated by the intricacies of Algorithms & Data Structures, and I sometimes test my problem-solving abilities in Competitive Programming contests. My academic path is intertwined with my passion as I delve into Computer Science at the Gdańsk University of Technology.
        </p>

        <p class="home__bio-text">
            Educating the next generation of tech enthusiasts, I impart knowledge on a range of topics, from Hacking & Cybersecurity to Python and C++, as a programming teacher at Giganci Programowania. Keen to share more, I invite you to explore my <a href="https://igorjoz.com/" target="_blank" rel="noopener noreferrer" class="home__bio-link">personal website</a> and connect with me on <a href="https://www.linkedin.com/in/igor-jozefowicz/" target="_blank" rel="noopener noreferrer" class="home__bio-link">LinkedIn</a>. Feel free to drop me an email at <a href="mailto:igor@jozefowicz.pl" rel="noopener noreferrer" class="home__bio-link">igor@jozefowicz.pl</a> for any inquiries or collaborations.
        </p>

        <p class="home__bio-text">
            Beyond my current engagements, I'm also honing my skills in Computer Architecture & Assembly and Database Design. I have a penchant for sharing knowledge, which is why I'm building my own personal website to showcase my projects and share my thoughts through a blog.
        </p>
    </div>
</section> --}}



{{-- <section class="home__bio-section">
    <div class="home__bio-text-wrapper">
        <h2 class="home__bio-header">
            About me
        </h2>
        <p class="home__bio-text">
            Greetings! I’m Igor Józefowicz, a web enthusiast known as <a href="https://github.com/igorjoz" target="_blank" rel="noopener noreferrer" class="home__bio-link">@igorjoz</a> on GitHub. Since diving into programming in 2018, I've dedicated myself to crafting digital experiences with PHP & Laravel. Alongside web development, my passion for Algorithms & Data Structures often leads me to competitive programming arenas.
        </p>
        <p class="home__bio-text">
            As a Computer Science scholar at Gdańsk University of Technology and a programming instructor at Giganci Programowania, I share my knowledge across various domains, including Hacking & Cybersecurity and modern programming languages. Discover more about my journey on my <a href="https://igorjoz.com/" target="_blank" rel="noopener noreferrer" class="home__bio-link">website</a> or connect with me on <a href="https://www.linkedin.com/in/igor-jozefowicz/" target="_blank" rel="noopener noreferrer" class="home__bio-link">LinkedIn</a>. For collaborations, feel free to reach out via email.
        </p>
    </div>
</section> --}}


{{-- <section class="home__bio-section">
    <div class="home__bio-text-wrapper">
        <h2 class="home__bio-header">
            About me
        </h2>
        <p class="home__bio-text">
            👋 Hello there! I'm Igor Józefowicz, also known as <a href="https://github.com/igorjoz" target="_blank" rel="noopener noreferrer" class="home__bio-link">@igorjoz</a>. Starting my programming journey in 2018, I've been engrossed in web development, especially enjoying the creativity and functionality that PHP & Laravel offer. My academic pursuits in Computer Science at Gdańsk University of Technology complement my practical experience, as both realms drive my enthusiasm for Algorithms & Data Structures.
        </p>
        <p class="home__bio-text">
            My commitment to sharing knowledge has led me to a fulfilling role as a programming teacher at Giganci Programowania, where I cover an array of subjects including Hacking & Cybersecurity, Python, C++, and SQL. When I'm not in the classroom, you can find me deepening my understanding of Computer Architecture & Assembly, as well as Database Design. Visit my <a href="https://igorjoz.com/" target="_blank" rel="noopener noreferrer" class="home__bio-link">personal website</a> to get a glimpse of my projects or read my thoughts on the latest in tech. Connect with me on <a href="https://www.linkedin.com/in/igor-jozefowicz/" target="_blank" rel="noopener noreferrer" class="home__bio-link">LinkedIn</a>, or reach out via <a href="mailto:igor@jozefowicz.pl" rel="noopener noreferrer" class="home__bio-link">email</a> for any exciting collaboration opportunities.
        </p>
    </div>
</section> --}}




{{-- <section class="home__bio-section">
    <div class="home__bio-text-wrapper">
        <h2 class="home__bio-header">
            About me
        </h2>
        <p class="home__bio-text">
            Welcome! I'm Igor Józefowicz, affectionately known in the coding community as <a href="https://github.com/igorjoz" target="_blank" rel="noopener noreferrer" class="home__bio-link">@igorjoz</a>. Embarking on my programming voyage in 2018, I've since honed my skills in web development, predominantly with PHP & Laravel. My enthusiasm for creating dynamic web applications is matched by my fascination with Algorithms & Data Structures, which often sees me partaking in competitive programming challenges.
        </p>
        <p class="home__bio-text">
            I blend theory with practice as a Computer Science student at Gdańsk University of Technology, where I delve deep into the fabric of computing. Additionally, as an educator at Giganci Programowania, I mentor aspiring developers, covering a spectrum from Hacking & Cybersecurity to advanced programming languages like Python and C++.
        </p>
        <p class="home__bio-text">
            To know more about my professional exploits and personal projects, visit my <a href="https://igorjoz.com/" target="_blank" rel="noopener noreferrer" class="home__bio-link">personal website</a>, or let's get in touch on <a href="https://www.linkedin.com/in/igor-jozefowicz/" target="_blank" rel="noopener noreferrer" class="home__bio-link">LinkedIn</a>. If you're intrigued by my portfolio or have a collaborative idea, I'm always available at <a href="mailto:igor@jozefowicz.pl" rel="noopener noreferrer" class="home__bio-link">igor@jozefowicz.pl</a>.
        </p>
    </div>
</section> --}}

<section class="home__bio-section">
    <div class="home__bio-text-wrapper">
        <h2 class="home__bio-header">
            About me
        </h2>
        <p class="home__bio-text">
            Hello there! I'm Igor Józefowicz, also known as <a href="https://github.com/igorjoz" target="_blank" rel="noopener noreferrer" class="home__bio-link">@igorjoz</a>. Since 2018, I've been immersed in web development, focusing on PHP & Laravel to create impactful digital solutions. I complement my technical endeavors with academic studies in Computer Science at Gdańsk University of Technology.
        </p>
        <p class="home__bio-text">
            As a passionate educator, I teach programming at Giganci Programowania, covering topics from Hacking & Cybersecurity to Python and C++. When not teaching, I enjoy challenging myself with Competitive Programming contests and deepening my understanding of Computer Architecture & Assembly, alongside Database Design.
        </p>
        <p class="home__bio-text">
            I'm excited to connect with fellow tech enthusiasts and professionals. Explore my website to learn more about my work or reach out on <a href="https://www.linkedin.com/in/igor-jozefowicz/" target="_blank" rel="noopener noreferrer" class="home__bio-link">LinkedIn</a>. For collaborations or inquiries, don't hesitate to send me an email: <a href="mailto:igor@jozefowicz.pl" target="_blank" rel="noopener noreferrer" class="home__bio-link">igor@jozefowicz.pl</a>.
        </p>
    </div>
</section>


<section class="home__projects-section">
    <div class="home__projects-text-wrapper">
        <h2 class="home__projects-header">
            Projects
        </h2>

        <p class="home__projects-text">
            🏆 My major achievement in web development is the <a href="https://www.e-kominki.com/" target="_blank" rel="noopener noreferrer" class="home__projects-link">Vento website & online shop</a>, created in 2020-2021 for a Polish company specializing in heating and ventilation.
        </p>

        <p class="home__projects-text">
            ⭐ I've also developed several Laravel applications, such as the <a href="https://github.com/igorjoz/employees_directory" target="_blank" rel="noopener noreferrer" class="home__projects-link">Employees Directory</a>, a database management software for employees and departments, and the <a href="https://github.com/igorjoz/anon-surv" target="_blank" rel="noopener noreferrer" class="home__projects-link">Anonymous Surveys</a> app, allowing users to create and analyze anonymous surveys.
        </p>

        <p class="home__projects-text">
            🎯 Some other notable projects include the <a href="https://github.com/igorjoz/spy-hunter-game" target="_blank" rel="noopener noreferrer" class="home__projects-link">Spy Hunter Game</a>, an Atari 2600-styled game, the Python-based <a href="https://github.com/igorjoz/game-of-life-python" target="_blank" rel="noopener noreferrer" class="home__projects-link">Game of Life</a>, and the <a href="https://github.com/igorjoz/css-processor" target="_blank" rel="noopener noreferrer" class="home__projects-link">CSS Processor</a> for Algorithms & Data Structures course.
        </p>
    </div>
</section>


<section class="home__project-cards-section">
    <div class="project-card">
        <div class="project-card__image-wrapper">
            <img src="{{ Storage::url('public/projects/vento-logo.svg') }}" alt="Vento Website" class="project-card__image project-card__image--short">
        </div>
        <div class="project-card__content">
            <h3 class="project-card__title">Vento Website & Online Shop</h3>
            <p class="project-card__description">A comprehensive web application for Vento, focusing on heating and ventilation solutions. Developed in 2020-2021.</p>
            <a href="https://www.e-kominki.com/" target="_blank" rel="noopener noreferrer" class="project-card__link">Visit Website</a>
        </div>
    </div>

    <div class="project-card">
        <img src="{{ Storage::url('public/projects/employees_directory.png') }}" alt="Employees Directory" class="project-card__image">
        <div class="project-card__content">
            <h3 class="project-card__title">Employees Directory</h3>
            <p class="project-card__description">A Laravel application for managing employees and departments.</p>
            <a href="https://github.com/igorjoz/employees_directory" target="_blank" rel="noopener noreferrer" class="project-card__link">View Repository</a>
        </div>
    </div>

    <div class="project-card">
        <img src="{{ Storage::url('public/projects/anonymous-surveys.png') }}" alt="Anonymous Surveys" class="project-card__image">
        <div class="project-card__content">
            <h3 class="project-card__title">Anonymous Surveys Repository</h3>
            <p class="project-card__description">An application that allows users to create, collect, and analyze anonymous survey responses.</p>
            <a href="https://github.com/igorjoz/anon-surv" target="_blank" rel="noopener noreferrer" class="project-card__link">View Repository</a>
        </div>
    </div>

    <div class="project-card">
        <img src="{{ Storage::url('public/projects/spy-hunter.png') }}" alt="Spy Hunter Game" class="project-card__image">
        <div class="project-card__content">
            <h3 class="project-card__title">Spy Hunter Game</h3>
            <p class="project-card__description">An Atari 2600-styled game created with C++ & SDL library.</p>
            <a href="https://github.com/igorjoz/spy-hunter-game" target="_blank" rel="noopener noreferrer" class="project-card__link">View Repository</a>
        </div>
    </div>

    <div class="project-card">
        <img src="{{ Storage::url('public/projects/game-of-life.png') }}" alt="Game of Life" class="project-card__image">
        <div class="project-card__content">
            <h3 class="project-card__title">Game of Life</h3>
            <p class="project-card__description">A turn-based game written in Python using pygame.</p>
            <a href="https://github.com/igorjoz/game-of-life-python" target="_blank" rel="noopener noreferrer" class="project-card__link">View Repository</a>
        </div>
    </div>

    <div class="project-card">
        <img src="{{ Storage::url('public/projects/css-processor.png') }}" alt="CSS Processor" class="project-card__image">
        <div class="project-card__content">
            <h3 class="project-card__title">CSS Processor</h3>
            <p class="project-card__description">A project focused on Algorithms & Data Structures.</p>
            <a href="https://github.com/igorjoz/css-processor" target="_blank" rel="noopener noreferrer" class="project-card__link">View Repository</a>
        </div>
    </div>

    <div class="project-card">
        <img src="{{ Storage::url('public/projects/finance-and-investing.png') }}" alt="Finance and Investing" class="project-card__image">
        <div class="project-card__content">
            <h3 class="project-card__title">Finance and Investing</h3>
            <p class="project-card__description">A PHP application created without backend framework.</p>
            <a href="https://github.com/igorjoz/finance-and-investing/tree/main/src" target="_blank" rel="noopener noreferrer" class="project-card__link">View Repository</a>
        </div>
    </div>

    <div class="project-card">
        <img src="{{ Storage::url('public/projects/matura.png') }}" alt="Matura Exam Solutions" class="project-card__image">
        <div class="project-card__content">
            <h3 class="project-card__title">Matura Exam Solutions</h3>
            <p class="project-card__description">Solutions for 2014-2022 Polish Matura exam sheets.</p>
            <a href="https://github.com/igorjoz/matura" target="_blank" rel="noopener noreferrer" class="project-card__link">View Repository</a>
        </div>
    </div>
</section>


{{-- @include('components.main.footer') --}}

@endsection
