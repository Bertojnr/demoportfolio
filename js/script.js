// Script to toggle mobile menu
//  finds the element with the ID menu-btn which is the button element
const menuBtn = document.getElementById("menu-btn");

// finds the div that contains the mobile navigation links
const mobileMenu = document.getElementById("mobile-menu");
// When someone clicks the hamburger button, run the code inside this function
menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});
