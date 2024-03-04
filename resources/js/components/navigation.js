document.addEventListener('DOMContentLoaded', function () {
    const navCheckbox = document.getElementById('nav-checkbox');
    const menuItems = document.querySelector('.menu-items');

    navCheckbox.addEventListener('change', function () {
        menuItems.classList.toggle('active');
    });
});
