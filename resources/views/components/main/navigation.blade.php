{{-- <nav class="navigation">
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
</nav> --}}








{{-- <nav class="navigation">
    <div class="navigation__hamburger">
        <span class="navigation__hamburger-line"></span>
        <span class="navigation__hamburger-line"></span>
        <span class="navigation__hamburger-line"></span>
    </div>

    <ul class="navigation__links-list" id="navigationLinks">
        <li class="nabigation__list-item">
            <a href="/about" class="navigation__link">About Me</a>
        </li>

        <li class="nabigation__list-item">
            <a href="/projects" class="navigation__link">Projects</a>
        </li>

        <li class="nabigation__list-item">
            <a href="mailto:igor@jozefowicz.pl" class="navigation__link">Email</a>
        </li>

        <li class="nabigation__list-item">
            <a href="https://github.com/igorjoz" target="_blank" rel="noopener noreferrer" class="navigation__link">Github</a>
        </li>

        <li class="nabigation__list-item">
            <a href="https://www.linkedin.com/in/igor-jozefowicz/" target="_blank" rel="noopener noreferrer" class="navigation__link">LinkedIn</a>
        </li>
    </ul>
</nav>


<script>
    document.addEventListener('DOMContentLoaded', function() {
        const hamburger = document.querySelector('.navigation__hamburger');
        const navbarLinks = document.getElementById('navigationLinks');

        hamburger.addEventListener('click', function() {
            navbarLinks.style.display = navbarLinks.style.display === 'block' ? 'none' : 'block';
        });
    });
</script> --}}








<nav>
    <div class="navbar">
        <div class="container nav-container">
            <input class="checkbox" type="checkbox" name="" id="" />
            <div class="hamburger-lines">
                <span class="line line1"></span>
                <span class="line line2"></span>
                <span class="line line3"></span>
            </div>

            <div class="logo">
                {{-- <h1>igorjoz</h1> --}}
            </div>

            <div class="menu-items">
                <li><a href="#">Home</a></li>
                {{-- <li><a href="#">Blog</a></li> --}}
                <li><a href="#">Services</a></li>
                <li><a href="#">Contact</a></li>
            </div>
        </div>
    </div>
</nav>
