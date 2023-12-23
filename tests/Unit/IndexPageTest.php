<?php

namespace Tests\Unit;

// use PHPUnit\Framework\TestCase;
use Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;

class IndexPageTest extends TestCase
{
    // use RefreshDatabase;

    /**
     * A basic unit test example.
     *
     * @return void
     */
    public function test_index_page_loads_correctly()
    {
        $response = $this->get('/');

        $response->assertStatus(200);
        $response->assertViewIs('home.index');
        $response->assertSee('Igor Józefowicz'); // Check for specific content in the view
    }
}
