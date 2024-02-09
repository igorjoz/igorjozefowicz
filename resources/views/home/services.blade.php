@extends('layouts.main')

@section('content')

{{-- @include('components.main.navigation') --}}

<section class="home__header-section">
    <h1 class="home__header-name">
        Need a website?
    </h1>

    {{-- <div class="home__header-image-wrapper">
        <img src="{{ Storage::url('public/favicon.png') }}" alt="Igor Józefowicz" class="home__header-image">
    </div> --}}

    <h2 class="home__subheader-role">
        We will make it happen!
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

    {{-- scroll arrow --}}

</section>

<section class="home__bio-section">
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
</section>

@include('components.main.footer')

@endsection
