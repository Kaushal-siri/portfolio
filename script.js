document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    const formData = new FormData(this);

    setTimeout(() => {
      alert("Thank you for your message! I'll get back to you soon.");
      this.reset();
    }, 500);
  });

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const skillBars = entry.target.querySelectorAll(".skill-bar");
        skillBars.forEach((bar) => {
          bar.style.width =
            bar.parentElement.nextElementSibling.querySelector(
              "span:last-child"
            ).textContent;
        });
      }
    });
  },
  { threshold: 0.5 }
);

observer.observe(document.getElementById("skills"));

document.getElementById("menu-btn").addEventListener("click", function () {
  const nav = document.querySelector(".hidden.md\\:flex");
  nav.classList.toggle("hidden");
  nav.classList.toggle("flex");
  nav.classList.toggle("flex-col");
  nav.classList.toggle("absolute");
  nav.classList.toggle("top-16");
  nav.classList.toggle("left-0");
  nav.classList.toggle("w-full");
  nav.classList.toggle("bg-white");
  nav.classList.toggle("p-4");
  nav.classList.toggle("shadow-md");
});
