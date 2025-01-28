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

    <link rel="icon" href="{{ Storage::url('public/favicon.png') }}" type="image/x-icon">

    @vite(['resources/sass/index.scss', 'resources/js/app.js'])

    {{-- font awesome import --}}
    {{-- <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"> --}}

</head>

<body>
    {{-- @include('components.main.navigation') --}}

    @yield('content')

    @include('components.main.footer')

    @vite(['resources/js/font-awesome-icons.js'])
</body>

</html>
