<!DOCTYPE html>
<html lang="en">

<head>
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-LMN39KC4VT"></script>
    <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'G-LMN39KC4VT');
    </script>

    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <title>
        @hasSection("title")
        Igor Józefowicz | @yield('title')
        @else
        Igor Józefowicz
        @endif
    </title>

    <meta name="description" content="Igor Józefowicz - web developer & IT passionate - personal website - blog, contact">
    <meta name="keywords"
    content="Igor Józefowicz, Igor, Józefowicz, igorjoz, igorjozef, igorjozefowicz, personal website, blog, contact">
    <meta name="author" content="Igor Józefowicz">

    <link rel="icon" href="{{ asset('favicon.ico') }}" sizes="16x16 32x32 48x48">
    <link rel="icon" href="{{ asset('favicon.svg') }}" type="image/svg+xml" sizes="any">
    <link rel="icon" href="{{ asset('favicon-32x32.png') }}" type="image/png" sizes="32x32">
    <link rel="icon" href="{{ asset('favicon-16x16.png') }}" type="image/png" sizes="16x16">
    <link rel="apple-touch-icon" href="{{ asset('apple-touch-icon.png') }}" sizes="180x180">
    <link rel="manifest" href="{{ asset('site.webmanifest') }}">

    @vite(['resources/sass/index.scss', 'resources/js/app.js'])
</head>

<body>
    {{-- @include('components.main.navigation') --}}

    @yield('content')

    @include('components.main.footer')
</body>

</html>
