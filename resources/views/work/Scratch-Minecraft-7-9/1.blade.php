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
        🎮<span class="">Podstawy tworzenia gier</span>  26.02.2024
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
        <a href="https://scratch.mit.edu/projects/646022432"
        class="home__link home__work-link" target="_blank" rel="noopener noreferrer">
            🔗Starter - Angry Birds cz. 1
        </a>
    </div>

</div>

@include('components.main.footer')

@endsection
