// Smooth Scrolling for Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
function toggleMenu() {
    const menu = document.querySelector(".mobile-menu");
    menu.style.right = (menu.style.right === "0px") ? "-100%" : "0px";
}

