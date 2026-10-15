@if(!empty($articleDates['publishedAt']))
<div class="article-dates">
    <span>{{ $studio['published'] }}: <time datetime="{{ $articleDates['publishedAt'] }}">{{ $articleDates['publishedDate'] }}</time></span>
    @if(!empty($articleDates['updatedAt']))<span>{{ $studio['updated'] }}: <time datetime="{{ $articleDates['updatedAt'] }}">{{ $articleDates['updatedDate'] }}</time></span>@endif
</div>
@endif
