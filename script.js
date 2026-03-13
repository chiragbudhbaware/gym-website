// Mobile menu toggle

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
navLinks.classList.toggle("active");
});



// Contact form alert

const form = document.querySelector(".contact-form form");

form.addEventListener("submit", function(e){

e.preventDefault();

alert("Thank you! Your message has been sent.");

form.reset();

});



// Scroll to top button

const scrollBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {

if(window.scrollY > 300){
scrollBtn.style.display = "block";
}else{
scrollBtn.style.display = "none";
}

});

scrollBtn.addEventListener("click", () => {
window.scrollTo({
top:0,
behavior:"smooth"
});
});



// Navbar shadow on scroll

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

if(window.scrollY > 50){
navbar.style.boxShadow = "0 2px 10px rgba(0,0,0,0.3)";
}else{
navbar.style.boxShadow = "none";
}

});