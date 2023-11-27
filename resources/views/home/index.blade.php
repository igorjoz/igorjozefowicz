@extends('layouts.main')

@section('content')

{{-- @include('components.main.navigation') --}}

<div class="home__header-wrapper">
    <h1 class="home__header-name">
        Igor Józefowicz
    </h1>

    <h2 class="home__subheader">
        Software Engineer
    </h2>

    {{-- links wrapper --}}
    <div class="home__links-wrapper">
        <a href="https://github.com/igorjoz"
            class="home__link"
            target="_blank"
            rel="noopener noreferrer">
            Github
            {{-- <i class="fab fa-github"></i> --}}
        </a>

        <a href="https://www.linkedin.com/in/igor-jozefowicz/"
            class="home__link"
            target="_blank"
            rel="noopener noreferrer">
            LinkedIn
        </a>

        {{-- email --}}
        <a href="mailto:igor@jozefowicz.pl"
            class="home__link"
            target="_blank"
            rel="noopener noreferrer">
            Email
        </a>
    </div>
</div>

{{-- link to github --}}


{{-- @include('components.main.footer') --}}

@endsection
