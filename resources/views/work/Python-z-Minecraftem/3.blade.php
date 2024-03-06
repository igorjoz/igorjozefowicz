@extends('layouts.main')

@section('content')

{{-- Emojis:
    Python:
    🐍🐲
    🐛
    ⛏

    AppInventor:
    📱

    Other:
    🤖💀
--}}

<div class="home__work-section">
    <h1 class="home__header-name home__work-header">
        🐍<span class="">Python z Minecraftem</span>  28.02.2024
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
        <a href="https://drive.google.com/file/d/1d0ZXmscpDNQ_kvuGdv-YNgECbnII9gEb/view?usp=drive_link" class="home__link home__work-link" target="_blank" rel="noopener noreferrer">
            🐲Lekcja 2. - materiały powtórzeniowe
        </a>
    </div>

    <div class="home__links-wrapper">
        <a href="https://drive.google.com/file/d/1_kZygEt-OUz2Z3ofdhPgN4hemjb1DN-E/view?usp=drive_link"
        class="home__link home__work-link" target="_blank" rel="noopener noreferrer">
            🐍Ściąga - Python i MakeCode
        </a>
    </div>



    <div class="home__links-wrapper">
        <a href="https://onlinegdb.com/709T3CgjPl" class="home__link home__work-link" target="_blank" rel="noopener noreferrer">
            🐛Bug search
        </a>
    </div>

    {{-- <div class="home__code-snippet"> --}}
        {{-- <script src="//onlinegdb.com/embed/js/CqtkbrH91?theme=dark"></script> --}}
    {{-- </div> --}}

    <div class="home__links-wrapper">
        <a href="https://onlinegdb.com/CqtkbrH91" class="home__link home__work-link" target="_blank" rel="noopener noreferrer">
            💀
        </a>
    </div>

    <div class="home__links-wrapper">
        <a href="https://drive.google.com/file/d/1bW9SRfwzItro_A1sF--GAqD3K55eDVsd/view?usp=drive_link" class="home__link home__work-link" target="_blank" rel="noopener noreferrer">
            ⛏Minecraft - koordynaty
        </a>
    </div>
</div>

@endsection
