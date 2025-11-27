// Toggle mobile navigation
const navToggle = document.querySelector(".nav-toggle");
const header = document.querySelector(".site-header");

if (navToggle && header) {
  navToggle.addEventListener("click", () => {
    header.classList.toggle("nav-open");
  });
}

// Smooth scroll for same page links
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", event => {
    const targetId = link.getAttribute("href").slice(1);
    const target = document.getElementById(targetId);
    if (target) {
      event.preventDefault();
      header.classList.remove("nav-open");
      const offsetTop = target.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
    }
  });
});

// Simple fake submit for now
