@extends('layouts.main')

@section('content')

<section class="home__header-section">
    <h1 class="home__header-name">
        Need a website?
    </h1>

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

@endsection
