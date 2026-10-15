@php
    $props = $page['props'];
    $ui = $props['ui'];
    $studio = $ui['studio'];
    $home = $props['section'] === '';
    $projects = array_values(array_filter($props['sections'], fn ($s) => $s['kind'] === 'project'));
    $remaining = array_values(array_filter($props['sections'], fn ($s) => $s['kind'] !== 'project'));
    $leadIds = $home ? ['audience', 'problems', 'offerings'] : [];
    $lead = array_filter($remaining, fn ($s) => in_array($s['id'], $leadIds));
    $remaining = array_filter($remaining, fn ($s) => ! in_array($s['id'], $leadIds));
    $project = $props['presentation']['project'];
@endphp
<div class="studio-site {{ $props['section'] === 'about' ? 'about-page' : '' }}">
    <a class="skip-link" href="#main">{{ $studio['skip'] }}</a>
    <header class="site-header"><div class="site-shell header-inner">
        <a class="site-brand" href="/{{ $props['locale'] }}" aria-label="Igor Józefowicz"><img class="site-brand-logo" src="/images/logo-igorjoz.svg" alt="" width="32" height="32"><span>Igor Józefowicz<small>Software Engineer · Web & AI</small></span></a>
        <details class="server-mobile-menu"><summary>{{ $studio['menu'] }} <span aria-hidden="true">+</span></summary><nav aria-label="{{ $studio['navigation'] }}">
            @foreach(['', 'services', 'projects', 'about', 'articles', 'contact'] as $i => $path)
                <a href="/{{ $props['locale'] }}{{ $path ? '/'.$path : '' }}" @if($props['section'] === $path) aria-current="page" @endif>{{ $ui['nav'][$i] }}</a>
            @endforeach
        </nav></details>
        <nav class="server-desktop-nav" aria-label="{{ $studio['navigation'] }}">
            @foreach(['', 'services', 'projects', 'about', 'articles', 'contact'] as $i => $path)
                <a href="/{{ $props['locale'] }}{{ $path ? '/'.$path : '' }}" @if($props['section'] === $path) aria-current="page" @endif>{{ $ui['nav'][$i] }}</a>
            @endforeach
        </nav>
        <div class="language-switch" role="group" aria-label="{{ $studio['language'] }}">@foreach($props['alternates'] as $lang => $href)<a href="{{ $href }}" hreflang="{{ $lang }}" lang="{{ $lang }}" aria-label="{{ $lang === 'pl' ? 'Polski' : 'English' }}" title="{{ $lang === 'pl' ? 'Polski' : 'English' }}" @if($props['locale'] === $lang) aria-current="true" @endif><img src="/images/flag-{{ $lang === 'pl' ? 'pl' : 'gb' }}.svg" alt="" width="30" height="20"></a>@endforeach</div>
    </div></header>
    <main id="main" class="site-shell" tabindex="-1">
        @if($home)
        <section class="studio-hero">
            <div class="hero-copy">
                <h1>{{ $ui['hero'] }}</h1><p class="hero-intro">{{ $ui['intro'] }}</p>
                <div class="site-actions"><a class="site-button" href="#contact">{{ $ui['cta'] }}</a><a class="text-link" href="/{{ $props['locale'] }}/projects">{{ $ui['work'] }} <span class="link-arrow" aria-hidden="true">↗</span></a></div>
            </div>
        </section>
        @else
        <section class="page-hero {{ $project ? 'project-detail-hero' : '' }}"><div><p class="site-eyebrow">Igor Józefowicz / {{ $project ? $studio['project'] : 'Web & AI' }}</p><h1>{{ $props['title'] }}</h1>
            @if($props['presentation']['article'])@include('article-dates', ['articleDates' => $props['presentation']['article']])@endif
            @if($project)<p>{{ $project['paragraphs'][0] }}</p><a class="text-link" href="/{{ $props['locale'] }}/projects">← {{ $studio['backProjects'] }}</a>@endif</div>
            @if($project)<div class="project-detail-image project-{{ $project['slug'] }}"><img src="{{ $project['image'] }}" alt="{{ $project['imageAlt'] }}" width="640" height="360"></div>@endif
        </section>
        @endif
        @if($props['articleHtml'])<article class="site-article">{!! $props['articleHtml'] !!}</article>@endif
        @if(count($lead))<div class="studio-sections">@foreach($lead as $s)@include('site-section')@endforeach</div>@endif
        @if(count($projects))
        <div class="selected-work"><div class="section-heading"><div><p class="site-eyebrow">01 / {{ $studio['selected'] }}</p><h2>{{ $studio['selected'] }}</h2><p>{{ $studio['selectedNote'] }}</p></div>@if($home)<a class="text-link" href="/{{ $props['locale'] }}/projects">{{ $studio['allProjects'] }} <span class="link-arrow" aria-hidden="true">↗</span></a>@endif</div>
            @foreach($projects as $index => $s)
            <section class="project-scene project-{{ $s['id'] }}" id="{{ $s['id'] }}">
                <a class="project-visual" href="{{ $s['links'][0]['href'] }}" tabindex="-1" aria-hidden="true"><span class="project-visual-grid"></span><span class="project-number">0{{ $index + 1 }} / {{ $studio['project'] }}</span><img src="{{ $s['image'] }}" alt="" loading="lazy" width="640" height="360"><span class="project-visual-footer"><span>{{ implode(' / ', array_slice(explode(',', $s['project']['technologies']), 0, 3)) }}</span><span>↗</span></span></a>
                <div class="project-copy"><p class="site-eyebrow">0{{ $index + 1 }} — {{ $studio['project'] }}</p><h3><a href="{{ $s['links'][0]['href'] }}">{{ $s['heading'] }} <span class="link-arrow" aria-hidden="true">↗</span></a></h3>
                    @foreach($s['paragraphs'] as $p)<p>{{ $p }}</p>@endforeach
                    <div class="project-contribution"><h4>{{ $studio['contribution'] }}</h4><p>{{ $s['project']['paragraphs'][2] }}</p></div>
                    <div class="technology-list">@foreach(explode(',', $s['project']['technologies']) as $tech)<span>{{ trim($tech) }}</span>@endforeach</div>
                    <a class="text-link" href="{{ $s['links'][0]['href'] }}">{{ $studio['readCase'] }} <span class="link-arrow" aria-hidden="true">↗</span></a>
                </div>
            </section>
            @endforeach
        </div>
        @endif
        <div class="studio-sections {{ $project ? 'case-study' : '' }}">
            @foreach($remaining as $s)
                @include('site-section')
            @endforeach
        </div>
    </main>
    <footer class="site-shell site-footer"><a href="/{{ $props['locale'] }}">© {{ date('Y') }} Igor Józefowicz</a><span>{{ $studio['footer'] }}</span><a href="mailto:igor@jozefowicz.pl">igor@jozefowicz.pl <span class="link-arrow" aria-hidden="true">↗</span></a></footer>
</div>
