/**
 * Andre University - UI Interactions
 * Handling mobile navigation and accessibility
 */

document.addEventListener('DOMContentLoaded', () => {
    const openMenuBtn = document.querySelector(".mobile-icon-open");
    const closeMenuBtn = document.querySelector(".mobile-icon-close");
    const navMenu = document.querySelector(".nav-menu-item");

    // Toggle Menu Function
    const toggleMenu = () => {
        const isActive = navMenu.classList.toggle("active");
        // Accessibility: update aria-expanded if you use it
        openMenuBtn.setAttribute("aria-expanded", isActive);
    };

    // Open listener
    if (openMenuBtn) {
        openMenuBtn.addEventListener("click", toggleMenu);
    }

    // Close listener
    if (closeMenuBtn) {
        closeMenuBtn.addEventListener("click", () => {
            navMenu.classList.remove("active");
        });
    }

    // Close menu when clicking on a link (better UX for mobile)
    const navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            navMenu.classList.remove("active");
        });
    });
});
