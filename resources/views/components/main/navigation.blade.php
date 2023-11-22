<nav class="navigation">
    <ul class="navigation__list">
        <li class="navigation__list-item">
            <a href="{{ route('home.index') }}" title="Home page">
            Home
            </a>
        </li>

        <li class="navigation__list-item">
            <a href="{{ route('home.about_me') }}" title="Let's get to know each other!">
                About me
            </a>
        </li>

        <li class="navigation__list-item">
            <a href="{{ route('blog.index') }}" title="My articles about Computer Science & IT industry">
                Blog
            </a>
        </li>

        <li class="navigation__list-item">
            <a href="{{ route('home.contact') }}" title="Send me a message, let's talk!">
                Contact
            </a>
        </li>
    </ul>
</nav>
