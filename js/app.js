(function() {
    let menuToggle = document.querySelector('.toggle');
    let mobileNav = document.querySelector('.mobile-nav');
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('animate');
        mobileNav.classList.toggle('slide');
    });
})();