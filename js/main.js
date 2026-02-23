const floating = document.getElementById("floatingContact");
const contactSection = document.getElementById("contact");

function checkFloatingVisibility() {
  const scrollY = window.scrollY;

  if (scrollY > 400) {
    floating.classList.add("is-visible");
  } else {
    floating.classList.remove("is-visible");
  }

  const rect = contactSection.getBoundingClientRect();

  const isInContactView = rect.top < window.innerHeight && rect.bottom > 0;

  if (isInContactView) {
    floating.classList.remove("is-visible");
  }
}

window.addEventListener("scroll", checkFloatingVisibility);

const scrollTopBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 500) {
    scrollTopBtn.classList.add("is-visible");
  } else {
    scrollTopBtn.classList.remove("is-visible");
  }
});

scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

const wrapper = document.querySelector(".wrapper");

function getInitialTheme() {
  if (document.documentElement.classList.contains("theme-dark")) return "dark";
  return "light";
}

function applyTheme(theme) {
  wrapper.classList.remove("light", "dark");
  wrapper.classList.add(theme);

  localStorage.setItem("theme", theme);
}

applyTheme(getInitialTheme());

const toggle = document.getElementById("themeToggle");

toggle.addEventListener("click", () => {
  const isDark = wrapper.classList.contains("dark");
  applyTheme(isDark ? "light" : "dark");
});

// animations

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
      }
    });
  },
  {
    threshold: 0.15,
  },
);

document.querySelectorAll(".reveal, .reveal-left, .reveal-right").forEach((el) => {
  observer.observe(el);
});
