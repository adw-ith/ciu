// Mobile Menu Toggle
const menuButton = document.getElementById("menu-button");
const mobileMenu = document.getElementById("mobile-menu");

menuButton.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.getElementById("carousel");
  const dotsContainer = document.getElementById("dots-container");
  const dots = dotsContainer.children;
  const slides = carousel.children;
  const totalSlides = slides.length;
  let currentSlide = 0;

  function showSlide(index) {
    const offset = -index * 100;
    carousel.style.transform = `translateX(${offset}%)`;

    for (let i = 0; i < totalSlides; i++) {
      dots[i].classList.toggle("opacity-100", i === index);
      dots[i].classList.toggle("opacity-30", i !== index);
    }
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
  }

  setInterval(nextSlide, 3000);

  showSlide(currentSlide);
});

document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-link");

  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const id = entry.target.getAttribute("id");
      if (entry.isIntersecting) {
        navLinks.forEach((link) => {
          link.classList.toggle("active", link.getAttribute("data-id") === id);
        });
      }
    });
  }, observerOptions);

  sections.forEach((section) => {
    observer.observe(section);
  });
});

function setLoading(button, isLoading) {
  const loadingIcon = button.querySelector("[data-loading-icon]");
  const loadingIcon2 = button.querySelector("[data-loading-icon2]");

  if (isLoading) {
    loadingIcon.src = button.getAttribute("data-loading-icon");
    loadingIcon.classList.remove("hidden");
    if (loadingIcon2) loadingIcon2.classList.add("hidden");

    button.classList.add("bg-shade_2");
  } else {
    loadingIcon.classList.add("hidden");
    if (loadingIcon2) loadingIcon2.classList.remove("hidden");

    button.classList.remove("bg-shade_2");
  }
}
function setLoading2(button, isLoading) {
  const loadingIcon = button.querySelector("[data-loading-icon]");
  const loadingIcon2 = button.querySelector("[data-loading-icon2]");

  if (isLoading) {
    loadingIcon.src = button.getAttribute("data-loading-icon");
    if (loadingIcon2) loadingIcon2.classList.add("hidden");
    loadingIcon.classList.remove("hidden");
    button.classList.add("bg-silver");
    button.classList.remove("border");
  } else {
    loadingIcon.classList.add("hidden");
    if (loadingIcon2) loadingIcon2.classList.remove("hidden");
    button.classList.remove("bg-silver");
    button.classList.add("border");
  }
}

document.querySelectorAll("[data-loading-button]").forEach((button) => {
  button.onclick = function () {
    setLoading(button, true);
    setTimeout(() => setLoading(button, false), 3000);
  };
});

document.querySelectorAll("[data-loading-button2]").forEach((button) => {
  button.onclick = function () {
    setLoading2(button, true);
    setTimeout(() => setLoading2(button, false), 3000);
  };
});

function countUp(element) {
  const target = parseInt(element.getAttribute("data-target"), 10);
  const countElement = element.querySelector(".count");

  console.log("Target:", target);
  console.log("Count Element:", countElement);

  if (!countElement) {
    console.error("Count element not found.");
    return;
  }

  let count = 0;
  const increment = Math.ceil(target / 100);
  const intervalTime = 1;

  function updateCount() {
    count += increment;
    if (count >= target) {
      count = target;
      clearInterval(intervalId);
    }
    countElement.textContent = count.toLocaleString();
  }

  const intervalId = setInterval(updateCount, intervalTime);
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".count-up").forEach(countUp);
});
