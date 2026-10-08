<!DOCTYPE html>
<html lang="{{ $page['props']['locale'] ?? 'en' }}">

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
    <meta name="theme-color" content="#ff69b4">

    @if(isset($site))
        @php($meta = $page['props'])
        <title inertia>{{ $meta['title'] }} | Igor Józefowicz</title>
        <meta name="description" content="{{ $meta['description'] }}" inertia="description">
        <link rel="canonical" href="{{ $meta['canonical'] }}" inertia="canonical">
        @foreach($meta['alternates'] as $lang => $href)
            <link rel="alternate" hreflang="{{ $lang }}" href="{{ $href }}" inertia="alternate-{{ $lang }}">
        @endforeach
        <link rel="alternate" hreflang="x-default" href="{{ $meta['alternates']['pl'] }}" inertia="alternate-default">
        <meta property="og:title" content="{{ $meta['title'] }} | Igor Józefowicz" inertia="og-title">
        <meta property="og:description" content="{{ $meta['description'] }}" inertia="og-description">
        <meta property="og:url" content="{{ $meta['canonical'] }}" inertia="og-url">
        <meta property="og:type" content="{{ $meta['articleHtml'] ? 'article' : 'website' }}" inertia="og-type">
        <meta property="og:locale" content="{{ $meta['locale'] === 'pl' ? 'pl_PL' : 'en_GB' }}" inertia="og-locale">
        <meta property="og:image" content="{{ url('/storage/home/Igor.jpg') }}" inertia="og-image">
        <meta property="og:image:alt" content="Igor Józefowicz" inertia="og-image-alt">
        <meta name="twitter:card" content="summary" inertia="twitter-card">
    @else
        <title inertia>{{ config('app.name', 'Igor Józefowicz') }}</title>
        <meta name="description" content="Igor Józefowicz — Software Engineer">
    @endif
    <meta name="author" content="Igor Józefowicz">

    <link rel="icon" href="{{ Storage::url('public/favicon.png') }}" type="image/x-icon">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Space+Grotesk:wght@400;600;700&family=Ubuntu:wght@300;400;500;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossorigin="anonymous" referrerpolicy="no-referrer" />

    {{-- Inject React Fast Refresh preamble for Vite dev server --}}
    @viteReactRefresh
    @vite(['resources/css/app.css', 'resources/js/app.jsx'])
    @inertiaHead
</head>

<body>
    @if(isset($site))
        {{-- Laravel supplies readable HTML; React mounts the same data after loading. --}}
        <div id="app" data-page="{{ json_encode($page) }}">@include('site-content')</div>
    @else
        @inertia
    @endif
</body>

</html>
