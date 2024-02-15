@extends('layouts.main')

@section('content')

{{-- Emojis:
    🐍
    🤖
    📱
--}}

<div class="home__work-section">
    <h1 class="home__header-name home__work-header">
        {{-- 🤖<span class="pulsate">Sztuczna inteligencja i AppInventor</span>  03.01.2023 --}}
        🌐<span class="">Strony internetowe</span>  12.02.2024
    </h1>

    <h2 class="home__subheader">
        Kliknij link poniżej
    </h2>

    <div class="home__links-wrapper">
        {{-- <a href="{{ Storage::url('public/gp/Gigxby_asystent_glosowy_starter_3.aia') }}" --}}
        {{-- <a href="https://quiz.giganciprogramowania.edu.pl/pigk2-q3" --}}
        {{-- class="home__link home__work-link" target="_blank" rel="noopener noreferrer">
            📱Gigxby asystent glosowy starter 3.aia
        </a> --}}
    </div>

    <div class="home__links-wrapper">
        <a href="https://www.giganciprogramowania.edu.pl/kursy/39-strony-internetowe-czesc-1"
        class="home__link home__work-link" target="_blank" rel="noopener noreferrer">
            📖Lista i opis lekcji
        </a>
    </div>

    <div class="home__links-wrapper">
        <a href="https://igorjoz.com" class="home__link home__work-link" target="_blank" rel="noopener noreferrer">
            👨‍🚀O mnie
        </a>
    </div>

    <div class="home__links-wrapper">
        <a href="https://whois.domaintools.com/" class="home__link home__work-link" target="_blank" rel="noopener noreferrer">
            🔍Whois
        </a>
    </div>

    <div class="home__links-wrapper">
        <a href="https://notepad-plus-plus.org/" class="home__link home__work-link" target="_blank" rel="noopener noreferrer">
            📝Notepad++
        </a>
    </div>

    {{-- <div class="home__links-wrapper">
        <a href="https://glitch.com/" class="home__link home__work-link" target="_blank" rel="noopener noreferrer">
            👾Glitch
        </a>
    </div> --}}

    <div class="home__links-wrapper">
        <a href="https://glitch.com/edit/#!/starter-gp" class="home__link home__work-link" target="_blank" rel="noopener noreferrer">
            👋Starter
        </a>
    </div>
</div>

@include('components.main.footer')

@endsection
