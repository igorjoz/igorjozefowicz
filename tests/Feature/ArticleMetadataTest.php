<?php

namespace Tests\Feature;

use App\Http\Controllers\SiteController;
use App\Support\ArticleMetadata;
use Illuminate\Support\Facades\File;
use Inertia\Testing\AssertableInertia as Assert;
use InvalidArgumentException;
use PHPUnit\Framework\Attributes\DataProvider;
use Tests\TestCase;

class ArticleMetadataTest extends TestCase
{
    public static function invalidDates(): array
    {
        return [
            'missing publication' => [[]],
            'invalid calendar date' => [['publishedAt' => '2026-02-30']],
            'wrong format' => [['publishedAt' => '8.10.2026']],
            'numeric date' => [['publishedAt' => 20261008]],
            'invalid update' => [['publishedAt' => '2026-10-08', 'updatedAt' => '2026-13-01']],
            'update before publication' => [['publishedAt' => '2026-10-08', 'updatedAt' => '2026-10-07']],
        ];
    }

    #[DataProvider('invalidDates')]
    public function test_invalid_dates_are_rejected(array $metadata): void
    {
        $this->expectException(InvalidArgumentException::class);
        ArticleMetadata::dates($metadata, 'pl');
    }

    public function test_dates_are_localised_and_same_day_updates_are_supported(): void
    {
        $metadata = ['publishedAt' => '2026-10-08', 'updatedAt' => '2026-10-08'];
        $polish = ArticleMetadata::dates($metadata, 'pl');
        $english = ArticleMetadata::dates($metadata, 'en');
        $this->assertSame('8 października 2026', $polish['publishedDate']);
        $this->assertSame($polish['publishedDate'], $polish['updatedDate']);
        $this->assertSame('8 October 2026', $english['publishedDate']);
        $this->assertNull(ArticleMetadata::dates(['publishedAt' => '2026-10-08'], 'pl')['updatedAt']);
    }

    public function test_public_article_dates_and_schema_match_server_html_and_page_data(): void
    {
        $this->withoutVite();
        foreach (['pl', 'en'] as $locale) {
            $this->get("/$locale/articles/business-system-integrations")->assertOk()
                ->assertSee('<time datetime="2026-10-15">', false)
                ->assertSee('"@type":"BlogPosting"', false)
                ->assertDontSee('"dateModified"', false)
                ->assertInertia(fn (Assert $page) => $page
                    ->where('presentation.article.publishedAt', '2026-10-15')
                    ->where('presentation.article.updatedAt', null)
                    ->where('presentation.article.schema.datePublished', '2026-10-15')
                    ->where('presentation.article.schema.inLanguage', $locale)
                    ->where('presentation.article.schema.author.name', 'Igor Józefowicz'));
            foreach (['', '/articles'] as $path) {
                $this->get("/$locale$path")->assertOk()
                    ->assertSeeInOrder(["/$locale/articles/business-system-integrations", 'datetime="2026-10-15"', "/$locale/articles/custom-application", 'datetime="2026-10-08"'], false);
            }
        }
        $this->get('/sitemap.xml')->assertSee('/pl/articles/business-system-integrations')->assertSee('/en/articles/business-system-integrations');
    }

    public function test_server_dates_include_only_explicit_updates(): void
    {
        $studio = ['published' => 'Opublikowano', 'updated' => 'Zaktualizowano'];
        $this->view('article-dates', ['studio' => $studio, 'articleDates' => ArticleMetadata::dates(['publishedAt' => '2026-10-08'], 'pl')])
            ->assertSee('Opublikowano')->assertDontSee('Zaktualizowano');
        foreach (['2026-10-08', '2026-10-15'] as $updatedAt) {
            $dates = ArticleMetadata::dates(['publishedAt' => '2026-10-08', 'updatedAt' => $updatedAt], 'pl');
            $this->view('article-dates', ['studio' => $studio, 'articleDates' => $dates])
                ->assertSee('Zaktualizowano')->assertSee('datetime="'.$updatedAt.'"', false);
        }
    }

    public function test_sorting_ignores_updates_and_unpublished_translations_remain_hidden(): void
    {
        $originalBasePath = base_path();
        $temporaryPath = sys_get_temp_dir().'/portfolio-articles-'.bin2hex(random_bytes(8));
        try {
            foreach (['pl', 'en'] as $locale) {
                File::ensureDirectoryExists("$temporaryPath/resources/content/articles/$locale");
                foreach ([
                    ['slug' => 'z-older', 'status' => 'published', 'publishedAt' => '2026-10-08', 'updatedAt' => '2026-10-15'],
                    ['slug' => 'b-newer', 'status' => 'published', 'publishedAt' => '2026-10-15'],
                    ['slug' => 'a-newer', 'status' => 'published', 'publishedAt' => '2026-10-15'],
                    ['slug' => 'untranslated', 'status' => $locale === 'pl' ? 'published' : 'draft', 'publishedAt' => '2026-10-15'],
                ] as $metadata) {
                    File::put("$temporaryPath/resources/content/articles/$locale/{$metadata['slug']}.md", json_encode([...$metadata, 'title' => $metadata['slug']])."\n---\nExample text.");
                }
            }
            $this->app->setBasePath($temporaryPath);
            foreach (['pl', 'en'] as $locale) {
                $articles = SiteController::articles($locale);
                $this->assertSame(['a-newer', 'b-newer', 'z-older'], array_column($articles, 'slug'));
                $schema = ArticleMetadata::schema($articles[2], $locale, url("/$locale/articles/z-older"));
                $this->assertSame('2026-10-15', $schema['dateModified']);
            }
        } finally {
            $this->app->setBasePath($originalBasePath);
            File::deleteDirectory($temporaryPath);
        }
    }
}
