@extends('layouts.main')

@section('content')

{{-- Emojis:
    🐍
    🤖
    📱
--}}

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
        🐍<span class="">Python z Minecraftem</span>  20.03.2024
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

    {{-- <div class="home__links-wrapper">
        <a href="https://onlinegdb.com/FIis-Xze_-" class="home__link home__work-link" target="_blank" rel="noopener noreferrer">
            🐛Bug search - zgadnij liczbę
        </a>
    </div> --}}

    <div class="home__links-wrapper">
        <a href="http://tpcg.io/_VS9FCE" class="home__link home__work-link" target="_blank" rel="noopener noreferrer">
            ☢️Matplotlib - wykresy☢️
        </a>
    </div>

    <div class="home__links-wrapper">
        <a href="https://minecraft.makecode.com/39918-03759-27371-98980"
        class="home__link home__work-link" target="_blank" rel="noopener noreferrer">
            📖Starter projektu Death Run
        </a>
    </div>



    <div class="home__links-wrapper">
        <a href="https://drive.google.com/file/d/1_kZygEt-OUz2Z3ofdhPgN4hemjb1DN-E/view?usp=drive_link"
        class="home__link home__work-link" target="_blank" rel="noopener noreferrer">
            🐍Ściąga - Python i MakeCode
        </a>
    </div>

    <div class="home__links-wrapper">
        <a href="https://drive.google.com/file/d/15dyxmAHyJA3Rll6gJR1juBbA_xmvOcR8/view?usp=drive_link" class="home__link home__work-link" target="_blank" rel="noopener noreferrer">
            🐲Lekcja 4. - materiały powtórzeniowe
        </a>
    </div>

    {{-- <div class="home__code-snippet"> --}}
        {{-- <script src="//onlinegdb.com/embed/js/CqtkbrH91?theme=dark"></script> --}}
    {{-- </div> --}}

    <div class="home__links-wrapper">
        <a href="https://drive.google.com/file/d/1bW9SRfwzItro_A1sF--GAqD3K55eDVsd/view?usp=drive_link" class="home__link home__work-link" target="_blank" rel="noopener noreferrer">
            ⛏Minecraft - koordynaty
        </a>
    </div>
</div>

@endsection
