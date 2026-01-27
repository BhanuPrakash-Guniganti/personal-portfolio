// Typed Text Effect
const typedText = document.getElementById('typed-text');
const text = "Student & MERN Stack Developer | Building responsive web apps, working with APIs, adding secure features, and creating clean, user-friendly designs.";
let index = 0;

function type() {
  if(index < text.length) {
    typedText.innerHTML += text.charAt(index);
    index++;
    setTimeout(type, 50);
  }
}
window.onload = type;

// Smooth scroll navigation
document.querySelectorAll('nav ul li a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
