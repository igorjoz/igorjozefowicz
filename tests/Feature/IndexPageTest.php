<?php

namespace Tests\Feature;

use Inertia\Testing\AssertableInertia as Assert;
use Tests\TestCase;

class IndexPageTest extends TestCase
{
    public function test_legacy_addresses_redirect_permanently(): void
    {
        foreach (['/' => '/pl', '/home' => '/pl', '/index' => '/pl', '/strona-glowna' => '/pl', '/about-me' => '/pl/about', '/bio' => '/pl/about', '/services' => '/pl/services', '/uslugi' => '/pl/services', '/contact' => '/pl/contact', '/blog' => '/pl/articles'] as $old => $new) {
            $this->get($old)->assertStatus(301)->assertRedirect($new);
        }
    }

    public function test_home_has_server_rendered_content_and_localised_metadata(): void
    {
        $this->withoutVite();
        foreach (['pl', 'en'] as $locale) {
            $response = $this->get('/'.$locale);
            $response->assertOk()->assertSee('<html lang="'.$locale.'">', false)
                ->assertSee('<h1>'.($locale === 'pl' ? 'Aplikacje i automatyzacje' : 'Business applications and automation'), false)->assertSee('rel="canonical"', false)
                ->assertSee('hreflang="pl"', false)->assertSee('hreflang="en"', false)
                ->assertSee('mailto:igor@jozefowicz.pl', false);
            $response->assertInertia(fn (Assert $page) => $page->component('Site')->where('locale', $locale));
        }
    }

    public function test_home_explains_business_needs_before_showing_relevant_work(): void
    {
        $this->withoutVite();
        foreach (['pl', 'en'] as $locale) {
            $this->get('/'.$locale)->assertOk()
                ->assertSeeInOrder(['id="audience"', 'id="problems"', 'id="offerings"', 'id="vento"', 'id="forcen"', 'id="collaboration"', 'id="process"', 'id="about"', 'id="larynxai"', 'id="articles"', 'id="contact"'], false)
                ->assertDontSee('class="hero-mark"', false)
                ->assertSee('/images/igor-portrait-640.webp', false)
                ->assertDontSee('/images/sculpture.svg', false)
                ->assertInertia(fn (Assert $page) => $page->where('presentation.view', 'home')->where('sections.0.kind', 'cards')->where('sections.0.id', 'audience'));
            $this->get('/'.$locale.'/projects/forcen')->assertOk()
                ->assertInertia(fn (Assert $page) => $page->where('presentation.view', 'project-detail')->where('presentation.project.slug', 'forcen'));
        }
    }

    public function test_services_have_three_entry_points_and_substantial_details_without_self_links(): void
    {
        $this->withoutVite();
        foreach (['pl', 'en'] as $locale) {
            $this->get("/$locale/services")->assertOk()
                ->assertInertia(fn (Assert $page) => $page
                    ->has('sections.0.cards', 3)
                    ->where('sections.0.cards.1.href', "/$locale/services/custom-applications#automation-details"));
            foreach (['custom-applications', 'ai-integrations'] as $slug) {
                $this->get("/$locale/services/$slug")->assertOk()
                    ->assertDontSee('href="/'.$locale.'/services/'.$slug.'"', false)
                    ->assertSee('id="first-step"', false)
                    ->assertSee('id="process"', false)
                    ->assertSee('id="related-project"', false)
                    ->assertInertia(fn (Assert $page) => $page
                        ->has('sections', 9)
                        ->where('sections.8.items', json_decode(file_get_contents(resource_path("content/$locale.json")), true)['ui']['contactPrompts']));
            }
            $this->get("/$locale/services/custom-applications")->assertSee('id="automation-details"', false);
            $this->get("/$locale/services/ai-integrations")->assertSee('id="data-access"', false)->assertSee('id="quality"', false);
            $this->get("/$locale/projects/forcen")->assertSee('Matysart');
            $this->get("/$locale/projects/larynxai")->assertSee($locale === 'pl' ? 'klasyfikatorem' : 'classifier');
        }
    }

    public function test_all_public_pages_work_in_both_languages(): void
    {
        $this->withoutVite();
        foreach (['pl', 'en'] as $locale) {
            foreach (['services', 'services/custom-applications', 'services/ai-integrations', 'projects', 'projects/vento', 'projects/forcen', 'projects/larynxai', 'about', 'contact', 'articles', 'articles/custom-application', 'articles/business-system-integrations'] as $path) {
                $this->get("/$locale/$path")->assertOk()->assertSee("/$locale/services");
            }
        }
    }

    public function test_inertia_navigation_returns_page_data_instead_of_a_document(): void
    {
        $this->withoutVite();
        foreach (['pl', 'en'] as $locale) {
            $version = $this->get("/$locale")->viewData('page')['version'];
            $this->get("/$locale/projects/forcen", ['X-Inertia' => 'true', 'X-Requested-With' => 'XMLHttpRequest', 'X-Inertia-Version' => $version ?? ''])
                ->assertOk()
                ->assertHeader('X-Inertia', 'true')
                ->assertJsonPath('component', 'Site')
                ->assertJsonPath('props.locale', $locale)
                ->assertJsonPath('props.presentation.project.slug', 'forcen')
                ->assertDontSee('<!DOCTYPE html>', false);
        }
    }

    public function test_drafts_and_unknown_pages_are_not_public(): void
    {
        $this->withoutVite();
        foreach (['pl', 'en'] as $locale) {
            $this->get("/$locale/articles/company-ai-assistant")->assertNotFound();
            $this->get("/$locale/articles/first-ai-pilot")->assertNotFound();
            $this->get("/$locale/projects/unknown")->assertNotFound();
            $this->get("/$locale/about/unknown")->assertNotFound();
            $this->get("/$locale/services/unknown")->assertNotFound();
        }
        $this->get('/de')->assertNotFound();
    }

    public function test_sitemap_contains_public_translations_and_excludes_drafts(): void
    {
        $response = $this->get('/sitemap.xml');
        $response->assertOk()->assertHeader('Content-Type', 'application/xml')
            ->assertSee('/pl/projects/vento')->assertSee('/en/articles/custom-application')
            ->assertDontSee('company-ai-assistant')->assertDontSee('first-ai-pilot');
        $this->assertNotFalse(simplexml_load_string($response->getContent()));
    }
}
