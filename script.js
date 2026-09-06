document.addEventListener("DOMContentLoaded", () => {
    // Current year
    document.querySelectorAll("#current-year").forEach((element) => {
        element.textContent = new Date().getFullYear();
    });

    // Persistent light/dark theme
    const themeToggle = document.getElementById("theme-toggle");
    const savedTheme = localStorage.getItem("portfolio-theme");

    if (savedTheme === "dark") {
        document.body.classList.add("dark-theme");
    }

    const updateThemeButton = () => {
        if (!themeToggle) return;
        const dark = document.body.classList.contains("dark-theme");
        themeToggle.textContent = dark ? "☀️" : "🌙";
        themeToggle.setAttribute(
            "aria-label",
            dark ? "Switch to light theme" : "Switch to dark theme"
        );
    };

    updateThemeButton();

    themeToggle?.addEventListener("click", () => {
        document.body.classList.toggle("dark-theme");
        localStorage.setItem(
            "portfolio-theme",
            document.body.classList.contains("dark-theme") ? "dark" : "light"
        );
        updateThemeButton();
    });

    // Responsive mobile navigation
    const menuToggle = document.querySelector(".menu-toggle");
    const navigation = document.getElementById("primary-navigation");

    menuToggle?.addEventListener("click", () => {
        const open = navigation.classList.toggle("open");
        menuToggle.setAttribute("aria-expanded", String(open));
        menuToggle.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
    });

    // Accessible contact form validation and status message
    const contactForm = document.getElementById("contact-form");
    const formStatus = document.getElementById("form-status");

    contactForm?.addEventListener("submit", (event) => {
        event.preventDefault();

        if (!contactForm.checkValidity()) {
            formStatus.textContent = "Please correct the required fields before submitting the form.";
            contactForm.reportValidity();
            return;
        }

        formStatus.textContent = "Thank you! Your message has been successfully submitted.";
        contactForm.reset();
    });
});
