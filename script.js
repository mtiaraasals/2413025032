// Sticky Navigation Menu
let nav = document.querySelector("nav");
let scrollBtn = document.querySelector(".scroll-button a");
// Show/hide sticky navigation and scroll button based on scroll position
window.onscroll = function () {
  if (document.documentElement.scrollTop > 20) {
    nav.classList.add("sticky");
    scrollBtn.style.display = "block";
  } else {
    nav.classList.remove("sticky");
    scrollBtn.style.display = "none";
  }
};
// Side Navigation Menu
let body = document.querySelector("body");
let navBar = document.querySelector(".navbar");
let menuBtn = document.querySelector(".menu-btn");
let cancelBtn = document.querySelector(".cancel-btn");
// Open side navigation
menuBtn.onclick = function () {
  navBar.classList.add("active");
  menuBtn.style.opacity = "0";
  menuBtn.style.pointerEvents = "none";
  body.style.overflow = "hidden";
  scrollBtn.style.pointerEvents = "none";
};
const hideNavMenu = () => {
  navBar.classList.remove("active");
  menuBtn.style.opacity = "1";
  menuBtn.style.pointerEvents = "auto";
  body.style.overflow = "auto";
  scrollBtn.style.pointerEvents = "auto";
};
// Close side navigation
cancelBtn.onclick = hideNavMenu;
// Close side navigation when a menu link is clicked
let navLinks = document.querySelectorAll(".menu li a");
navLinks.forEach((link) => {
  link.addEventListener("click", hideNavMenu);
});

var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

// Menghitung posisi tengah
var centerX = canvas.width / 2; // X tengah canvas
var centerY = canvas.height / 2; // Y tengah canvas

// Menggambar garis dari tengah canvas ke titik (300, 100)
ctx.beginPath(); // Memulai jalur baru
ctx.moveTo(0, 0); // Titik awal garis di tengah canvas
ctx.lineTo(300, 100); // Titik akhir garis (x, y)
ctx.strokeStyle = 'black'; // Warna garis
ctx.lineWidth = 2; // Ketebalan garis
ctx.stroke(); // Menggambar garis
