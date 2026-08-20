const glow = document.getElementById("cursor-glow");
document.addEventListener("mousemove", e => {
  glow.style.left = `${e.clientX}px`;
  glow.style.top = `${e.clientY}px`;
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("show");
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");
menuBtn.addEventListener("click", () => nav.classList.toggle("open"));
document.querySelectorAll("nav a").forEach(link =>
  link.addEventListener("click", () => nav.classList.remove("open"))
);

document.getElementById("year").textContent = new Date().getFullYear();

// Subtle parallax for the SVG background.
window.addEventListener("scroll", () => {
  const y = window.scrollY;
  document.querySelector(".hero-svg").style.transform = `translateY(${y * 0.12}px)`;
});
