@extends('layouts.main')

@section('content')

{{-- @include('components.main.navigation') --}}

<div class="home__header-wrapper">
    <h1 class="home__header-name">
        🐍 <span class="pulsate">Python z Minecraftem</span>  20.12.2023
    </h1>

    {{-- <h2 class="home__subheader">
        Quiz #3 z AppInventora, kliknij link poniżej
    </h2> --}}

    <div class="home__links-wrapper">
        {{-- <a href="{{ Storage::url('public/gp/Quiz_Game_starter.aia') }}" --}}
        <a href="https://quiz.giganciprogramowania.edu.pl/pigk2-q3" class="home__link home__link--big" target="_blank" rel="noopener noreferrer">
            📱AppInventor - Quiz #3
        </a>
    </div>

    <div class="home__links-wrapper">
        <a href="https://onlinegdb.com/fPj18yRpi" class="home__link home__link--big" target="_blank" rel="noopener noreferrer">
            🐲Python - podstawy
        </a>
    </div>

    {{-- <div class="home__links-wrapper">
        <a href="https://onlinegdb.com/FTg1vUSK3" class="home__link home__link--big" target="_blank" rel="noopener noreferrer">
            🐛Python - bug search #1
        </a>
    </div> --}}

    {{-- <div class="home__links-wrapper">
        <a href="https://onlinegdb.com/g2_TUV9ZM" class="home__link home__link--big" target="_blank" rel="noopener noreferrer">
            👾Python - bug search #2
        </a>
    </div> --}}

    {{-- <div class="home__links-wrapper">
        <a href="https://drive.google.com/file/d/1bW9SRfwzItro_A1sF--GAqD3K55eDVsd/view?usp=drive_link" class="home__link home__link--big" target="_blank" rel="noopener noreferrer">
            ⛏Minecraft - koordynaty
        </a>
    </div> --}}

    {{-- PROJEKT ZOMIBIEZZ --}}
    {{-- <div class="home__links-wrapper">
        <h2 class="home__subheader">
            🚀Minecraft - projekt - skopiuj link
        <br>
        https://makecode.com/_VhEex8WjkFKh
        <h2 class="home__subheader">
    </div> --}}
</div>

{{-- @include('components.main.footer') --}}

@endsection
