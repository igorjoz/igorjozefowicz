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



<section class="home__bio-section">
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
</section>




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


{{-- @include('components.main.footer') --}}

@endsection
