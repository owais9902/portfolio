// ==========================================
// MAHALTHY MD OWAIS - PORTFOLIO JAVASCRIPT
// ==========================================


// ---------- Cursor Glow ----------
const glow = document.getElementById("cursor-glow");

if (glow) {
    document.addEventListener("mousemove", (event) => {
        glow.style.left = `${event.clientX}px`;
        glow.style.top = `${event.clientY}px`;
    });
}


// ---------- Scroll Reveal Animation ----------
const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    },
    {
        threshold: 0.12
    }
);

revealElements.forEach((element) => {
    revealObserver.observe(element);
});


// ---------- Mobile Menu ----------
const menuButton = document.querySelector(".menu-btn");
const navigation = document.querySelector("nav");

if (menuButton && navigation) {

    menuButton.addEventListener("click", () => {
        navigation.classList.toggle("open");

        // Change hamburger icon
        if (navigation.classList.contains("open")) {
            menuButton.textContent = "✕";
        } else {
            menuButton.textContent = "☰";
        }
    });

    // Close menu after clicking a navigation link
    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach((link) => {
        link.addEventListener("click", () => {
            navigation.classList.remove("open");
            menuButton.textContent = "☰";
        });
    });
}


// ---------- Dynamic Copyright Year ----------
const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}


// ---------- SVG Hero Parallax ----------
const heroSvg = document.querySelector(".hero-svg");

window.addEventListener("scroll", () => {

    if (!heroSvg) return;

    const scrollPosition = window.scrollY;

    heroSvg.style.transform =
        `translateY(${scrollPosition * 0.12}px)`;
});


// ---------- Active Navigation Link ----------
const sections = document.querySelectorAll("section[id]");
const navigationLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach((section) => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            currentSection = section.getAttribute("id");
        }
    });

    navigationLinks.forEach((link) => {

        link.classList.remove("active");

        if (link.getAttribute("href") === `#${currentSection}`) {
            link.classList.add("active");
        }
    });
});


// ---------- Smooth Scroll ----------
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {

    anchor.addEventListener("click", function (event) {

        const targetId = this.getAttribute("href");

        if (targetId === "#") return;

        const target = document.querySelector(targetId);

        if (target) {

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });
});


// ---------- Skill Card Hover Effect ----------
const skillCards = document.querySelectorAll(".skill-card");

skillCards.forEach((card) => {

    card.addEventListener("mousemove", (event) => {

        const rect = card.getBoundingClientRect();

        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        const rotateX =
            ((y / rect.height) - 0.5) * -8;

        const rotateY =
            ((x / rect.width) - 0.5) * 8;

        card.style.transform =
            `perspective(800px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             translateY(-8px)`;
    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =
            "perspective(800px) rotateX(0) rotateY(0) translateY(0)";
    });
});


// ---------- Contact Link Tracking ----------
const socialLinks = document.querySelectorAll(".contact-links a");

socialLinks.forEach((link) => {

    link.addEventListener("click", () => {

        const destination = link.textContent.trim();

        console.log(`Opening contact link: ${destination}`);
    });
});


// ---------- Keyboard Shortcut ----------
document.addEventListener("keydown", (event) => {

    // Press H to go Home
    if (
        event.key.toLowerCase() === "h" &&
        !event.target.matches("input, textarea")
    ) {
        window.location.href = "#home";
    }

    // Press C to go Contact
    if (
        event.key.toLowerCase() === "c" &&
        !event.target.matches("input, textarea")
    ) {
        window.location.href = "#contact";
    }
});


// ---------- Page Load Animation ----------
window.addEventListener("load", () => {

    document.body.classList.add("loaded");

    // Show hero elements immediately
    document
        .querySelectorAll("#home .reveal")
        .forEach((element, index) => {

            setTimeout(() => {
                element.classList.add("show");
            }, index * 200);

        });
});


// ---------- Console Branding ----------
console.log(
    "%c Mahalthy Md Owais ",
    "background:#00e5ff;color:#05060a;font-size:18px;font-weight:bold;padding:8px;"
);

console.log(
    "%c CSE • AI & ML • Web Technologies ",
    "color:#8b5cf6;font-size:14px;font-weight:bold;"
);