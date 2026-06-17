(function () {
  "use strict";

  var prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  var yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  var ticking = false;

  function updateScroll() {
    var scrollTop = window.scrollY;
    var header = document.querySelector(".site-header");

    if (header) {
      header.classList.toggle("is-scrolled", scrollTop > 20);
    }

    ticking = false;
  }

  function onScroll() {
    if (!ticking) {
      requestAnimationFrame(updateScroll);
      ticking = true;
    }
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  updateScroll();

  /* Reveal on scroll — re-triggers when scrolling back into view */
  var revealEls = document.querySelectorAll(".reveal");

  if (prefersReducedMotion) {
    revealEls.forEach(function (el) {
      el.classList.add("is-visible");
    });
  } else {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          entry.target.classList.toggle("is-visible", entry.isIntersecting);
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
    );

    revealEls.forEach(function (el) {
      observer.observe(el);
    });
  }

  /* Active nav link */
  var navLinks = document.querySelectorAll(".nav a[data-section]");
  var sections = [];

  navLinks.forEach(function (link) {
    var id = link.getAttribute("data-section");
    var section = document.getElementById(id);
    if (section) sections.push({ id: id, el: section, link: link });
  });

  function updateActiveNav() {
    var scrollPos = window.scrollY + window.innerHeight * 0.35;
    var current = sections[0];

    sections.forEach(function (section) {
      if (section.el.offsetTop <= scrollPos) {
        current = section;
      }
    });

    navLinks.forEach(function (link) {
      link.classList.remove("is-active");
    });

    if (current) {
      current.link.classList.add("is-active");
    }
  }

  window.addEventListener("scroll", updateActiveNav, { passive: true });
  updateActiveNav();
})();
