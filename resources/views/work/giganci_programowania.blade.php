@extends('layouts.main')

@section('content')

{{-- @include('components.main.navigation') --}}

<div class="home__header-wrapper">
    <h1 class="home__header-name">
        {{-- 🤖<span class="pulsate">Sztuczna inteligencja i AppInventor</span>  03.01.2023 --}}
        🤖<span class="">Gixby</span>  17.01.2024
    </h1>

    <h2 class="home__subheader">
        Kliknij link poniżej
    </h2>

    <div class="home__links-wrapper">
        <a href="{{ Storage::url('public/gp/Gigxby_asystent_glosowy_starter_3.aia') }}"
        {{-- <a href="https://quiz.giganciprogramowania.edu.pl/pigk2-q3" --}}
        class="home__link home__link--big" target="_blank" rel="noopener noreferrer">
            📱DLA WŁADKA I IGORA - Gigxby_asystent_glosowy_starter_3.aia
        </a>
    </div>

    <div class="home__links-wrapper">
        <a href="https://www.giganciprogramowania.edu.pl/kursy/293-python-z-minecraftem"
        class="home__link home__link--big" target="_blank" rel="noopener noreferrer">
            🐍Python z Minecraftem - start kursu 14.02
        </a>
    </div>
</div>

{{-- @include('components.main.footer') --}}

@endsection
