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




// const menuBtn = document.getElementById("menuBtn");
// const nav = document.querySelector("nav");
// menuBtn.addEventListener("click", () => {
//   const isOpen = nav.classList.toggle("active");
//   menuBtn.classList.toggle("active", isOpen);
//   menuBtn.setAttribute("aria-expanded", isOpen);
//   menuBtn.setAttribute(
//     "aria-label",
//     isOpen ? "Close navigation menu" : "Open navigation menu",
//   );
// });
// /* Close menu after clicking a link */ document
//   .querySelectorAll(".nav-links a")
//   .forEach((link) => {
//     link.addEventListener("click", () => {
//       nav.classList.remove("active");
//       menuBtn.classList.remove("active");
//       menuBtn.setAttribute("aria-expanded", "false");
//     });
//   });
// /* Close menu when resizing to desktop */ window.addEventListener(
//   "resize",
//   () => {
//     if (window.innerWidth > 850) {
//       nav.classList.remove("active");
//       menuBtn.classList.remove("active");
//       menuBtn.setAttribute("aria-expanded", "false");
//     }
//   },
// );
// const menuBtn = document.getElementById("menuBtn");
// const nav = document.querySelector("nav");
// menuBtn.addEventListener("click", () => {
//   const isOpen = nav.classList.toggle("active");
//   menuBtn.classList.toggle("active", isOpen);
//   menuBtn.setAttribute("aria-expanded", isOpen);
//   menuBtn.setAttribute(
//     "aria-label",
//     isOpen ? "Close navigation menu" : "Open navigation menu",
//   );
// });
// /* Close menu after clicking a link */ document
//   .querySelectorAll(".nav-links a")
//   .forEach((link) => {
//     link.addEventListener("click", () => {
//       nav.classList.remove("active");
//       menuBtn.classList.remove("active");
//       menuBtn.setAttribute("aria-expanded", "false");
//     });
//   });
// /* Close menu when resizing to desktop */ window.addEventListener(
//   "resize",
//   () => {
//     if (window.innerWidth > 850) {
//       nav.classList.remove("active");
//       menuBtn.classList.remove("active");
//       menuBtn.setAttribute("aria-expanded", "false");
//     }
//   },
// );
