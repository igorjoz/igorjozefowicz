@extends('layouts.main')

@section('content')

{{-- @include('components.main.navigation') --}}

<div class="home__header-wrapper">
    <h1 class="home__header-name">
        App Inventor
    </h1>

    <h2 class="home__subheader">
        Pęk kluczy po 1. części, kliknij link poniżej
    </h2>

    <div class="home__links-wrapper">
        {{-- <a href="https://drive.google.com/file/d/1M_HD4pG6krmgymNY6SXDZSHFJtiamRWi/view?usp=sharing"
            class="home__link"
            target="_blank"
            rel="noopener noreferrer">
            Projekt pek_kluczy_1.aia
        </a> --}}

        {{-- link to public storage - gp directory and pek_kluczy_1.aia file --}}
        <a href="{{ Storage::url('public/gp/pek_kluczy_1.aia') }}"
            class="home__link"
            target="_blank"
            rel="noopener noreferrer">
            Plik pek_kluczy_1.aia
        </a>
    </div>
</div>

{{-- link to github --}}


{{-- @include('components.main.footer') --}}

@endsection
