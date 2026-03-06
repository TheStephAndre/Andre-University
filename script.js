/**
 * Andre University - UI Interactions
 * Optimized for performance, accessibility, and UX
 */

document.addEventListener('DOMContentLoaded', () => {
    const openMenuBtn = document.querySelector(".mobile-icon-open");
    const closeMenuBtn = document.querySelector(".mobile-icon-close");
    const navMenu = document.querySelector(".nav-menu-item");
    const body = document.body;

    // Helper to toggle state
    const setMenuState = (isOpen) => {
        navMenu.classList.toggle("active", isOpen);
        // Prevent background scrolling when menu is open
        body.style.overflow = isOpen ? "hidden" : "auto";
        
        if (openMenuBtn) {
            openMenuBtn.setAttribute("aria-expanded", isOpen);
        }
    };

    // Event Listeners
    if (openMenuBtn) {
        openMenuBtn.addEventListener("click", () => setMenuState(true));
    }

    if (closeMenuBtn) {
        closeMenuBtn.addEventListener("click", () => setMenuState(false));
    }

    // Close menu when clicking links (Standard for Single Page or Mobile Nav)
    document.querySelectorAll(".nav-link").forEach(link => {
        link.addEventListener("click", () => setMenuState(false));
    });

    // Close menu if user clicks outside the menu area
    document.addEventListener("click", (e) => {
        if (navMenu.classList.contains("active") && 
            !navMenu.contains(e.target) && 
            !openMenuBtn.contains(e.target)) {
            setMenuState(false);
        }
    });

    // Handle Escape key to close menu (Accessibility)
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") setMenuState(false);
    });
});
