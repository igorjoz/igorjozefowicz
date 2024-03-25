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
        🌐<span class="">Strony internetowe</span>  04.03.2024
    </h1>

    <h2 class="home__subheader">
        Kliknij link poniżej
    </h2>

    <div class="home__links-wrapper">
        <a href="https://disqus.com/" class="home__link home__work-link" target="_blank" rel="noopener noreferrer">
            💬Disqus
        </a>
    </div>

    <div class="home__links-wrapper">
        <a href="https://glitch.com/edit/#!/ala-blog" class="home__link home__work-link" target="_blank" rel="noopener noreferrer">
            👧Strona Ali
        </a>
    </div>

    <div class="home__links-wrapper">
        <a href="https://glitch.com/edit/#!/kuba-blog" class="home__link home__work-link" target="_blank" rel="noopener noreferrer">
            👦Strona Kuby
        </a>
    </div>

    <div class="home__links-wrapper">
        <a href="https://www.flaticon.com/" class="home__link home__work-link" target="_blank" rel="noopener noreferrer">
            ✅Flaticon - ikony
        </a>
    </div>

    <div class="home__links-wrapper">
        <a href="https://symbl.cc/pl/html-entities/" class="home__link home__work-link" target="_blank" rel="noopener noreferrer">
            📖Encje HTML
        </a>
    </div>

</div>

@endsection
