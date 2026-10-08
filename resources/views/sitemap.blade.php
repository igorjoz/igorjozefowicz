<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
@foreach($paths as $path)
@foreach(['pl', 'en'] as $locale)
<url><loc>{{ url('/'.$locale.$path) }}</loc>@foreach(['pl', 'en'] as $lang)<xhtml:link rel="alternate" hreflang="{{ $lang }}" href="{{ url('/'.$lang.$path) }}"/>@endforeach</url>
@endforeach
@endforeach
</urlset>
