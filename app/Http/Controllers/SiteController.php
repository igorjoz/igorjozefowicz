<?php

namespace App\Http\Controllers;

use Illuminate\Support\Str;
use Inertia\Inertia;

class SiteController extends Controller
{
    public static function articles(string $locale): array
    {
        $articles = [];
        foreach (glob(resource_path("content/articles/$locale/*.md")) as $file) {
            $raw = file_get_contents($file);
            [$header, $body] = explode("\n---\n", $raw, 2);
            $meta = json_decode($header, true, 512, JSON_THROW_ON_ERROR);
            if ($meta['status'] !== 'published') {
                continue;
            }
            // Publish translations together so every language link has a public target.
            $otherLocale = $locale === 'pl' ? 'en' : 'pl';
            $otherFile = resource_path("content/articles/$otherLocale/".basename($file));
            if (! is_file($otherFile)) {
                continue;
            }
            [$otherHeader] = explode("\n---\n", file_get_contents($otherFile), 2);
            $otherMeta = json_decode($otherHeader, true, 512, JSON_THROW_ON_ERROR);
            if ($otherMeta['status'] !== 'published' || $otherMeta['slug'] !== $meta['slug']) {
                continue;
            }
            $articles[] = [...$meta, 'html' => Str::markdown($body, ['html_input' => 'strip', 'allow_unsafe_links' => false])];
        }

        return $articles;
    }

    public function show(string $locale, string $section = '', ?string $slug = null)
    {
        $data = json_decode(file_get_contents(resource_path("content/$locale.json")), true, 512, JSON_THROW_ON_ERROR);
        $ui = $data['ui'];
        $articles = self::articles($locale);
        $nav = ['', 'services', 'projects', 'about', 'articles', 'contact'];
        abort_unless(in_array($section, $nav, true), 404);
        $title = $section === '' ? $ui['hero'] : $ui['nav'][array_search($section, $nav)];
        $sections = [];
        $add = function ($id, $heading, $paragraphs = [], $items = [], $links = [], $image = null, $imageAlt = null) use (&$sections) {
            $sections[] = compact('id', 'heading', 'paragraphs', 'items', 'links', 'image', 'imageAlt');
        };
        if ($section === '' || $section === 'services') {
            $services = $data['services'];
            if ($slug) {
                $services = array_values(array_filter($services, fn ($s) => $s['slug'] === $slug));
                abort_if(! $services, 404);
                $title = $services[0]['title'];
            }
            foreach ($services as $service) {
                $add($service['slug'], $service['title'], [$service['intro']], $service['items'], [['label' => $ui['more'], 'href' => "/$locale/services/{$service['slug']}"]]);
            }
        }
        if ($section === '' || $section === 'projects') {
            $projects = $data['projects'];
            if ($slug) {
                $projects = array_values(array_filter($projects, fn ($p) => $p['slug'] === $slug));
                abort_if(! $projects, 404);
                $project = $projects[0];
                $title = $project['title'];
                foreach ($project['paragraphs'] as $i => $paragraph) {
                    $add('detail-'.$i, $ui['labels'][$i], [$paragraph]);
                }
                $add('technologies', $ui['labels'][5], [$project['technologies']], [], [['label' => $ui['labels'][6], 'href' => $project['url']]]);
            } else {
                foreach ($projects as $project) {
                    $add($project['slug'], $project['title'], [$project['paragraphs'][0]], [], [['label' => $ui['more'], 'href' => "/$locale/projects/{$project['slug']}"]], $project['image'], $project['imageAlt']);
                }
                if ($section === 'projects') {
                    $add('portfolio', $ui['portfolio'], [], [], $this->portfolio());
                }
            }
        }
        if ($section === '' || $section === 'about') {
            $add('about', $ui['bio'], [$ui['bioText']], [], [['label' => 'GitHub', 'href' => 'https://github.com/igorjoz'], ['label' => 'LinkedIn', 'href' => 'https://www.linkedin.com/in/igor-jozefowicz/']]);
        }
        if ($section === '' || $section === 'services') {
            $add('process', $ui['process'], [], $ui['steps']);
        }
        $articleHtml = null;
        if ($section === '' || $section === 'articles') {
            if ($slug) {
                $article = collect($articles)->firstWhere('slug', $slug);
                abort_if(! $article, 404);
                $title = $article['title'];
                $articleHtml = $article['html'];
            } else {
                $add('articles', $ui['articles'], [], [], array_map(fn ($a) => ['label' => $a['title'], 'href' => "/$locale/articles/{$a['slug']}"], $articles));
            }
        }
        if ($slug && ! in_array($section, ['services', 'projects', 'articles'])) {
            abort(404);
        }
        $add('contact', $ui['contact'], [$ui['contactText']], [], [['label' => $ui['cta'], 'href' => 'mailto:igor@jozefowicz.pl']]);
        $path = $section ? "/$section".($slug ? "/$slug" : '') : '';
        $description = $section === '' ? $ui['intro'] : ($sections[0]['paragraphs'][0] ?? $ui['intro']);
        if ($articleHtml && preg_match('/<p>(.*?)<\/p>/s', $articleHtml, $matches)) {
            $description = html_entity_decode(strip_tags($matches[1]));
        }
        $description = Str::limit($description, 170);

        return Inertia::render('Site', [
            'locale' => $locale, 'section' => $section, 'title' => $title, 'description' => $description,
            'ui' => $ui, 'sections' => $sections, 'articleHtml' => $articleHtml,
            'canonical' => url("/$locale$path"),
            'alternates' => ['pl' => url("/pl$path"), 'en' => url("/en$path")],
        ])->withViewData(['site' => true]);
    }

    private function portfolio(): array
    {
        return array_map(fn ($p) => ['label' => $p[0], 'href' => 'https://github.com/igorjoz/'.$p[1]], [
            ['Tytani BI', 'tytani-bi-online-school-system'], ['Monsteriada', 'monsteriada-prestashop-clone'],
            ['Driving Course for AI', 'driving-course-for-ai'], ['Vulnerability Vault', 'vulnerability-vault'],
            ['Employees Directory', 'employees-directory'], ['Anonymous Surveys', 'anon-surv'],
            ['Game of Life — Python', 'game-of-life-python'], ['Game of Life — Java', 'game-of-life-java'],
            ['Finance and Investing', 'finance-and-investing'], ['Matura', 'matura-informatyka'],
        ]);
    }

    public function sitemap()
    {
        $paths = ['', '/services', '/services/custom-applications', '/services/ai-integrations', '/projects', '/projects/vento', '/projects/forcen', '/projects/larynxai', '/about', '/articles', '/contact'];
        foreach (self::articles('pl') as $article) {
            $paths[] = '/articles/'.$article['slug'];
        }

        return response()->view('sitemap', compact('paths'))->header('Content-Type', 'application/xml');
    }
}
