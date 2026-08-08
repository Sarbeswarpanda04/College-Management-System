/* =========================
    CAROUSEL JAVASCRIPT
========================== */
let currentIndex = 0;

const slides = document.querySelectorAll(".slide");

const dots = document.querySelectorAll(".dot");

function showSlide(index) {
  if (index >= slides.length) {
    currentIndex = 0;
  } else if (index < 0) {
    currentIndex = slides.length - 1;
  } else {
    currentIndex = index;
  }

  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === currentIndex);
  });

  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === currentIndex);
  });
}

function changeSlide(direction) {
  showSlide(currentIndex + direction);
}

function currentSlide(index) {
  showSlide(index);
}

/* Automatic carousel */

setInterval(() => {
  changeSlide(1);
}, 5000);
