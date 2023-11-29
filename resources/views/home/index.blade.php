@extends('layouts.main')

@section('content')

{{-- @include('components.main.navigation') --}}

<div class="home__header-wrapper">
    <div class="home__logo-wrapper">
        {{-- <div class="home__header-image-wrapper">
            <img src="{{ Storage::url('public/icon.png') }}" alt="Igor Józefowicz" class="home__header-image">
        </div> --}}

        <h1 class="home__header-name">
            Igor Józefowicz
        </h1>

        {{-- <div class="home__header-image-wrapper">
            <img src="{{ Storage::url('public/icon.png') }}" alt="Igor Józefowicz" class="home__header-image">
        </div> --}}
    </div>

    <div class="home__header-image-wrapper">
        <img src="{{ Storage::url('public/favicon.png') }}" alt="Igor Józefowicz" class="home__header-image">
    </div>

    <h2 class="home__subheader">
        Software Engineer
    </h2>

    {{-- links wrapper --}}
    <div class="home__links-wrapper">
        {{-- icon icons/github.png --}}

        <a href="https://github.com/igorjoz"
            class="home__link"
            target="_blank"
            rel="noopener noreferrer">
            <img src="{{ Storage::url('public/icons/github.png') }}" alt="Github" class="home__link-image home__link-image--github">

            Github
            {{-- <i class="fab fa-github"></i> --}}
        </a>

        <a href="https://www.linkedin.com/in/igor-jozefowicz/"
            class="home__link"
            target="_blank"
            rel="noopener noreferrer">
            <img src="{{ Storage::url('public/icons/linkedin.png') }}" alt="LinkedIn" class="home__link-image">

            LinkedIn
        </a>

        {{-- email --}}
        <a href="mailto:igor@jozefowicz.pl"
            class="home__link"
            target="_blank"
            rel="noopener noreferrer">
            <img src="{{ Storage::url('public/icons/email.png') }}" alt="Email" class="home__link-image">

            Email
        </a>
    </div>
</div>

{{-- link to github --}}


{{-- @include('components.main.footer') --}}

@endsection
