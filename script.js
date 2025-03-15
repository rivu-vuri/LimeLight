// document.addEventListener("DOMContentLoaded", function () {
//     const menuToggle = document.querySelector(".menu-toggle");
//     const navLinks = document.querySelector(".nav_links ul");

//     menuToggle.addEventListener("click", function () {
//         navLinks.classList.toggle("active");
//     });
// });

document.querySelector(".menu-toggle").addEventListener("click", function () {
    document.querySelector(".nav_links").classList.toggle("active");
});
