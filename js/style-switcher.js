// ===== toggle style swicher function =====
const styleSwitcherToggler = document.querySelector('.style-switcher-toggler');
styleSwitcherToggler.addEventListener('click', () => {
  document.querySelector('.style-switcher').classList.toggle('open');
})

// Hide style switcher on scroll function
window.addEventListener('scroll', () => {
  if(document.querySelector('.style-switcher').classList.contains('open'))
  {
    document.querySelector('.style-switcher').classList.remove('open');
  }
})

// ===== Theme colors function =====
const alternateStyle = document.querySelectorAll('.alternate-style');
function setActiveStyle(color)
{
  alternateStyle.forEach((style) => {
    if (color === style.getAttribute('title'))
    {
      style.removeAttribute('disabled');
    }
    else
    {
      style.setAttribute('disabled', 'true');
    }
  })
  // localStorage.setItem('color', color);
  // changeColor();
  }









function changeColor() {
  alternateStyle.forEach((style) => {
    if(localStorage.getItem('color') === style.getAttribute('title'))
    {
      style.removeAttribute('disabled');
    }
  })
}