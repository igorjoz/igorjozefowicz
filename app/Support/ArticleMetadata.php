<?php

namespace App\Support;

use Carbon\CarbonImmutable;
use DateTimeImmutable;
use InvalidArgumentException;

class ArticleMetadata
{
    public static function dates(array $metadata, string $locale): array
    {
        $publishedAt = $metadata['publishedAt'] ?? null;
        $updatedAt = $metadata['updatedAt'] ?? null;
        foreach (['publishedAt' => $publishedAt, 'updatedAt' => $updatedAt] as $field => $value) {
            if ($field === 'updatedAt' && $value === null) {
                continue;
            }
            if (! is_string($value) || ! preg_match('/^\d{4}-\d{2}-\d{2}$/D', $value)
                || ! ($date = DateTimeImmutable::createFromFormat('!Y-m-d', $value))
                || $date->format('Y-m-d') !== $value) {
                throw new InvalidArgumentException("Invalid article $field; expected YYYY-MM-DD.");
            }
        }
        if ($updatedAt !== null && $updatedAt < $publishedAt) {
            throw new InvalidArgumentException('Article updatedAt cannot precede publishedAt.');
        }

        $format = fn ($value) => $value === null ? null : CarbonImmutable::parse($value)->locale($locale)->isoFormat('D MMMM YYYY');

        return [
            'publishedAt' => $publishedAt, 'updatedAt' => $updatedAt,
            'publishedDate' => $format($publishedAt), 'updatedDate' => $format($updatedAt),
        ];
    }

    public static function schema(array $article, string $locale, string $canonical): array
    {
        $schema = [
            '@context' => 'https://schema.org', '@type' => 'BlogPosting',
            'headline' => $article['title'], 'url' => $canonical,
            'mainEntityOfPage' => $canonical, 'inLanguage' => $locale,
            'author' => ['@type' => 'Person', 'name' => 'Igor Józefowicz', 'url' => url("/$locale/about")],
            'datePublished' => $article['publishedAt'],
        ];
        if ($article['updatedAt'] !== null) {
            $schema['dateModified'] = $article['updatedAt'];
        }

        return $schema;
    }
}
