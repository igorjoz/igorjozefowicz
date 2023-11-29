<!DOCTYPE html>
<html lang="en">

<head>
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

    {{-- favicon favicon.png --}}
    <link rel="icon" href="{{ Storage::url('public/favicon.png') }}" type="image/x-icon">

    @vite(['resources/sass/index.scss', 'resources/js/app.js'])
</head>

<body>
    @yield('content')
</body>

</html>
