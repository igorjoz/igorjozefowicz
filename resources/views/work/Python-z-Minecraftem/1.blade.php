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
        🐍<span class="">Python z Minecraftem</span>  14.02.2024
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
        <a href="https://www.giganciprogramowania.edu.pl/kursy/293-python-z-minecraftem"
        class="home__link home__work-link" target="_blank" rel="noopener noreferrer">
            🐍Lista i opis lekcji
        </a>
    </div>

    <div class="home__links-wrapper">
        <a href="https://onlinegdb.com/fPj18yRpi" class="home__link home__work-link" target="_blank" rel="noopener noreferrer">
            🐲Python - podstawy
        </a>
    </div>

    <div class="home__links-wrapper">
        <a href="https://onlinegdb.com/FTg1vUSK3" class="home__link home__work-link" target="_blank" rel="noopener noreferrer">
            🐛Python - bug search #1
        </a>
    </div>

    <div class="home__links-wrapper">
        <a href="https://onlinegdb.com/g2_TUV9ZM" class="home__link home__work-link" target="_blank" rel="noopener noreferrer">
            👾Python - bug search #2
        </a>
    </div>

    <div class="home__links-wrapper">
        <a href="https://drive.google.com/file/d/1bW9SRfwzItro_A1sF--GAqD3K55eDVsd/view?usp=drive_link" class="home__link home__work-link" target="_blank" rel="noopener noreferrer">
            ⛏Minecraft - koordynaty
        </a>
    </div>

    {{-- PROJEKT ZOMIBIEZZ --}}
    {{-- <div class="home__links-wrapper">
        <h2 class="home__subheader">
            🚀Minecraft - projekt - skopiuj link
        <br>
        https://makecode.com/_VhEex8WjkFKh
        <h2 class="home__subheader">
    </div> --}}
</div>

@include('components.main.footer')

@endsection
