@extends('layouts.main')

@section('content')

{{-- @include('components.main.navigation') --}}

<div class="home__header-wrapper">
    <h1 class="home__header-name">
        App Inventor 06.12.2023
    </h1>

    <h2 class="home__subheader">
        Quiz Game część 1., kliknij link poniżej
    </h2>

    <div class="home__links-wrapper">
        {{-- <a href="https://drive.google.com/file/d/1M_HD4pG6krmgymNY6SXDZSHFJtiamRWi/view?usp=sharing"
            class="home__link"
            target="_blank"
            rel="noopener noreferrer">
            Projekt pek_kluczy_1.aia
        </a> --}}

        {{-- link to public storage - gp directory and pek_kluczy_1.aia file --}}
        <a href="{{ Storage::url('public/gp/Quiz_Game_starter.aia') }}"
            class="home__link"
            target="_blank"
            rel="noopener noreferrer">
            Plik Quiz_Game_starter.aia
        </a>
    </div>
</div>

{{-- @include('components.main.footer') --}}

@endsection
