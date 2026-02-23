document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".header");
  const burger = document.querySelector(".header__burger");
  const nav = document.querySelector(".header__navigation");
  const navLinks = document.querySelectorAll(".header__navigation a");

  if (!header || !burger || !nav) return;

  // Accessibility
  burger.setAttribute("aria-expanded", "false");
  burger.setAttribute("aria-controls", "site-navigation");
  nav.setAttribute("id", "site-navigation");

  const lockScroll = () => {
    document.documentElement.style.overflow = "hidden";
  };

  const unlockScroll = () => {
    document.documentElement.style.overflow = "";
  };

  const openMenu = () => {
    header.classList.add("header--open");
    burger.setAttribute("aria-expanded", "true");
    lockScroll();
  };

  const closeMenu = () => {
    header.classList.remove("header--open");
    burger.setAttribute("aria-expanded", "false");
    unlockScroll();
  };

  const toggleMenu = () => {
    header.classList.contains("header--open") ? closeMenu() : openMenu();
  };

  burger.addEventListener("click", (e) => {
    e.stopPropagation();
    toggleMenu();
  });

  header.addEventListener("click", (e) => {
    const clickedInsideNav = nav.contains(e.target);
    const clickedBurger = burger.contains(e.target);

    if (!clickedBurger && header.classList.contains("header--open")) {
      closeMenu();
    }
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (header.classList.contains("header--open")) closeMenu();
    });
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && header.classList.contains("header--open")) {
      closeMenu();
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 900 && header.classList.contains("header--open")) {
      closeMenu();
    }
  });
});
