@extends('layouts.main')

@section('content')

<section class="home__header-section">
    <h1 class="home__header-name about__header">
        About me
    </h1>

    <div class="home__header-image-wrapper">
        <img src="{{ Storage::url('public/home/Igor.jpg') }}" alt="Igor Józefowicz" class="about__photo">
    </div>

    <h2 class="home__subheader-role about__subheader">
        Igor Józefowicz
    </h2>
</section>

@endsection
