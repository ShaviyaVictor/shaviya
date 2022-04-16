// Toggler button animation
const menuBtn = document.querySelector('.menuBtn');
let menuOpen = false;

menuBtn.addEventListener('click', () => {
  if (menuOpen) {
    menuBtn.classList.add('open');
    menuOpen = false;
  }
  else 
  {
    menuBtn.classList.remove('open');
    menuOpen = true;
  }
});

// NavBar onClick display functionality
const toggleBtn = document.querySelector('.nav-toggler');
const navAside = document.querySelector('.aside');

toggleBtn.addEventListener('click', () => {
  if (navAside.style.display === 'none')
  {
    navAside.style.display = 'flex';
  }
  else
  {
    navAside.style.display = 'none'
  }
})

// ==== typing script ====
var typed = new Typed('.typing', {
  strings:[' ', 'Town Planner', 'Graphic Designer', 'Web Designer', 'Full Stack Developer.'],
  typeSpeed: 100,
  BackSpeed: 60,
  loop: true 

})