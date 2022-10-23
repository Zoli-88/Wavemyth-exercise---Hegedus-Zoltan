"use strict";

// SwiperJS initialization and properties
// URL--> https://swiperjs.com/get-started
// API documenation --> https://swiperjs.com/swiper-api

const swiper = new Swiper(".swiper", {
  // Loop
  loop: true,

  // Pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // Scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

// Added current year to the footer section
const year = new Date().getFullYear();
const paragraph = document.querySelector("footer>p:first-child");
paragraph.innerHTML = `Copyright COSMOS ${year}. All rights reserved.`;

// Added a confirmation modal to the checkout button to simulate a purchase
const openModal = function () {
  document.querySelector("div.modal--overlay").classList.remove("hidden");
};

const closeModal = function () {
  document.querySelector("div.modal--overlay").classList.add("hidden");
};

const checkoutButton = document.querySelector(
  "section.text--content--container > button"
);
checkoutButton.addEventListener("click", openModal);

const confirmButton = document.querySelector(
  "div.modal--btn--wrapper>button:first-child"
);
const cancelButton = document.querySelector(
  "div.modal--btn--wrapper>button:last-child"
);
confirmButton.addEventListener("click", closeModal);
cancelButton.addEventListener("click", closeModal);
