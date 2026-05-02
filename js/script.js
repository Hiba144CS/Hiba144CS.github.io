// Smooth scrolling for navbar links
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (event) {
        event.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });
});

// Navbar shadow/background effect when scrolling
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    if (window.scrollY > 80) {
        navbar.style.background = "rgba(255, 255, 255, 0.98)";
        navbar.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.10)";
    } else {
        navbar.style.background = "rgba(255, 255, 255, 0.90)";
        navbar.style.boxShadow = "0 2px 15px rgba(0, 0, 0, 0.06)";
    }
});

console.log("Portfolio loaded successfully!");