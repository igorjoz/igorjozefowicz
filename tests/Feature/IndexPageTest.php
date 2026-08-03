<?php

namespace Tests\Feature;

use Inertia\Testing\AssertableInertia as Assert;
use Tests\TestCase;

class IndexPageTest extends TestCase
{
    public function test_index_page_loads_correctly(): void
    {
        $this->withoutVite();

        $response = $this->get('/');

        $response->assertOk();
        $response->assertInertia(
            fn (Assert $page) => $page->component('Home/Index')
        );
    }
}
