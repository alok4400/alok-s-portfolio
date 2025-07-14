// Responsive Navbar Toggle for Mobile

document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.querySelector(".navbar");

  if (navbar) {
    // Create hamburger icon
    const hamburger = document.createElement("div");
    hamburger.classList.add("hamburger");
    hamburger.innerHTML = `
      <span></span>
      <span></span>
      <span></span>
    `;

    // Insert hamburger before nav links
    const navLinks = document.querySelector(".nav-links");
    navbar.insertBefore(hamburger, navLinks);

    // Toggle active class
    hamburger.addEventListener("click", function () {
      navLinks.classList.toggle("nav-active");
      hamburger.classList.toggle("toggle");
    });
  }
});
