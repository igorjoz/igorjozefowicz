@extends('layouts.main')

@section('content')

{{-- @include('components.main.navigation') --}}

<div class="home__header-wrapper">
    <h1 class="home__header-name">
        {{-- 🤖<span class="pulsate">Sztuczna inteligencja i AppInventor</span>  03.01.2023 --}}
        🤖<span class="">Sztuczna inteligencja i AppInventor</span>  03.01.2023
    </h1>

    <h2 class="home__subheader">
        Kliknij link poniżej
    </h2>

    <div class="home__links-wrapper">
        <a href="{{ Storage::url('public/gp/rozpoznawanie_obrazu_starter.aia') }}"
        {{-- <a href="https://quiz.giganciprogramowania.edu.pl/pigk2-q3" --}}
        class="home__link home__link--big" target="_blank" rel="noopener noreferrer">
            📱Starter projektu - rozpoznawanie_obrazu_starter.aia
        </a>
    </div>
</div>

{{-- @include('components.main.footer') --}}

@endsection
