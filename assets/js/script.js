// JavaScript for adding interactivity or more animations in the future

// Fading in effect on scroll
document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll(".intro, .about-ai");
    const options = {
        threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("fade-in");
                observer.unobserve(entry.target);
            }
        });
    }, options);

    elements.forEach(element => {
        observer.observe(element);
    });
});
