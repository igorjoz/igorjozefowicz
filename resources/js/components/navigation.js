document.addEventListener('DOMContentLoaded', function () {
    const navCheckbox = document.getElementById('nav-checkbox');
    const menuItems = document.querySelector('.menu-items');

    // Check if elements exist before adding event listener
    if (navCheckbox && menuItems) {
        navCheckbox.addEventListener('change', function () {
            menuItems.classList.toggle('active');
        });
    }
});
