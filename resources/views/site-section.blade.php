@if($s['kind'] === 'cards')
<section class="studio-section business-section section-{{ $s['id'] }}" id="{{ $s['id'] }}">
    <h2>{{ $s['heading'] }}</h2>
    @foreach($s['paragraphs'] as $p)<p>{{ $p }}</p>@endforeach
    <div class="business-cards">@foreach($s['cards'] as $card)<div class="business-card">
        <h3>{{ $card['heading'] }}</h3><p>{{ $card['text'] }}</p>
        @if(isset($card['solution']))<dl><dt>{{ $ui['businessLabels']['solution'] }}</dt><dd>{{ $card['solution'] }}</dd><dt>{{ $ui['businessLabels']['benefit'] }}</dt><dd>{{ $card['benefit'] }}</dd></dl>@endif
        @if(isset($card['href']))<a class="text-link" href="{{ $card['href'] }}">{{ $card['linkLabel'] }} <span class="link-arrow" aria-hidden="true">↗</span></a>@endif
    </div>@endforeach</div>
</section>
@elseif($s['id'] === 'about')
<section class="studio-section section-about" id="about">
    <header class="about-heading"><p class="site-eyebrow">{{ $ui['bio'] }}</p><h2>{{ $studio['aboutTitle'] }}</h2><p class="section-lead">{{ $studio['aboutNote'] }}</p></header>
    <div class="about-portrait"><img src="/images/igor-portrait-640.webp" srcset="/images/igor-portrait-320.webp 320w, /images/igor-portrait-640.webp 640w, /images/igor-portrait-960.webp 960w" sizes="(max-width: 800px) 200px, (max-width: 1100px) 260px, {{ $props['section'] === 'about' ? 360 : 320 }}px" width="640" height="800" loading="lazy" decoding="async" alt="{{ $studio['portraitAlt'] }}"></div>
    <div class="about-copy">
        @foreach($s['paragraphs'] as $p)<p>{{ $p }}</p>@endforeach
        <div class="expertise-list">@foreach($studio['expertise'] as $i => $label)<span><small>0{{ $i + 1 }}</small>{{ $label }}</span>@endforeach</div>
        <div class="site-links">@foreach($s['links'] as $link)<a href="{{ $link['href'] }}">{{ $link['label'] }} <span class="link-arrow" aria-hidden="true">↗</span></a>@endforeach</div>
    </div>
</section>
@elseif($s['id'] === 'contact')
<section class="studio-contact" id="contact">
    <p class="site-eyebrow">{{ $ui['contact'] }}</p><h2>{{ $studio['contactTitle'] }}</h2>
    <a class="contact-email" href="mailto:igor@jozefowicz.pl">igor@jozefowicz.pl <span class="link-arrow" aria-hidden="true">↗</span></a>
    <div class="copy-email server-copy-placeholder" aria-hidden="true"><span>{{ $studio['copy'] }} ⧉</span></div>
    @foreach($s['paragraphs'] as $p)<p class="contact-note">{{ $p }}</p>@endforeach
    @if(count($s['items']))<div class="contact-prompts"><h3>{{ $ui['contactPromptsTitle'] }}</h3><ul>@foreach($s['items'] as $item)<li>{{ $item }}</li>@endforeach</ul></div>@endif
    <div class="site-links" aria-label="{{ $studio['elsewhere'] }}"><a href="https://github.com/igorjoz">GitHub <span class="link-arrow" aria-hidden="true">↗</span></a><a href="https://www.linkedin.com/in/igor-jozefowicz/">LinkedIn <span class="link-arrow" aria-hidden="true">↗</span></a></div>
</section>
@else
<section class="studio-section section-{{ $s['id'] }} {{ $s['kind'] === 'service' ? 'service-section' : '' }}" id="{{ $s['id'] }}">
    @if(in_array($s['id'], ['process', 'articles']))<p class="site-eyebrow">{{ $s['id'] === 'process' ? $studio['processNote'] : $studio['articlesNote'] }}</p>@endif
    <h2>{{ $s['heading'] }}</h2>
    @foreach($s['paragraphs'] as $p)<p>{{ $p }}</p>@endforeach
    @if(count($s['items']))
        @if($s['id'] === 'process')<ol class="process-list">@foreach($s['items'] as $i => $item)<li><span>0{{ $i + 1 }}</span><p>{{ $item }}</p></li>@endforeach</ol>
        @else<ul>@foreach($s['items'] as $item)<li>{{ $item }}</li>@endforeach</ul>@endif
    @endif
    <div class="site-links {{ in_array($s['id'], ['articles', 'portfolio']) ? 'editorial-links' : '' }}">@foreach($s['links'] as $link)
        @if($s['id'] === 'articles')<div class="article-list-item">@endif
        <a href="{{ $link['href'] }}">{{ $link['label'] }} <span class="link-arrow" aria-hidden="true">↗</span></a>
        @if($s['id'] === 'articles')@include('article-dates', ['articleDates' => $link])</div>@endif
    @endforeach</div>
</section>
@endif
