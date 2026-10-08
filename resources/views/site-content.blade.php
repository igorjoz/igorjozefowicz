@php($props = $page['props'])
<div class="site-shell">
    <a class="skip-link" href="#main">{{ $props['locale'] === 'pl' ? 'Przejdź do treści' : 'Skip to content' }}</a>
    <header class="site-header">
        <a class="site-brand" href="/{{ $props['locale'] }}">Igor Józefowicz<span>Software Engineer · Web & AI</span></a>
        <nav aria-label="{{ $props['locale'] === 'pl' ? 'Nawigacja główna' : 'Main navigation' }}">
            @foreach(['', 'services', 'projects', 'about', 'articles', 'contact'] as $index => $path)
                <a href="/{{ $props['locale'] }}{{ $path ? '/'.$path : '' }}" @if($props['section'] === $path) aria-current="page" @endif>{{ $props['ui']['nav'][$index] }}</a>
            @endforeach
        </nav>
        <div class="language-switch">@foreach($props['alternates'] as $lang => $href)<a href="{{ $href }}" hreflang="{{ $lang }}" lang="{{ $lang }}" @if($props['locale'] === $lang) aria-current="true" @endif>{{ strtoupper($lang) }}</a>@endforeach</div>
    </header>
    <main id="main">
        <section class="site-hero"><p class="site-eyebrow">Igor Józefowicz / Web & AI</p><h1>{{ $props['title'] }}</h1>
            @if(!$props['section'])<p>{{ $props['ui']['intro'] }}</p><div class="site-actions"><a class="site-button" href="#contact">{{ $props['ui']['cta'] }}</a><a href="/{{ $props['locale'] }}/projects">{{ $props['ui']['work'] }} →</a></div>@endif
        </section>
        @if($props['articleHtml'])<article class="site-article">{!! $props['articleHtml'] !!}</article>@endif
        <div class="site-sections">@foreach($props['sections'] as $section)
            <section class="site-panel {{ $section['id'] === 'contact' ? 'site-contact' : '' }}" id="{{ $section['id'] }}">@if($section['image'])<img class="site-project-image" src="{{ $section['image'] }}" alt="{{ $section['imageAlt'] }}" loading="lazy" width="640" height="260">@endif<h2>{{ $section['heading'] }}</h2>
                @foreach($section['paragraphs'] as $paragraph)<p>{{ $paragraph }}</p>@endforeach
                @if($section['items'])<ul>@foreach($section['items'] as $item)<li>{{ $item }}</li>@endforeach</ul>@endif
                <div class="site-links">@foreach($section['links'] as $link)<a href="{{ $link['href'] }}">{{ $link['label'] }} ↗</a>@endforeach</div>
            </section>
        @endforeach</div>
    </main>
    <footer class="site-footer">© {{ date('Y') }} Igor Józefowicz · <a href="mailto:igor@jozefowicz.pl">igor@jozefowicz.pl</a></footer>
</div>
