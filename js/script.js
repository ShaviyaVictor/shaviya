// Email sending script
var sendBtn = document.getElementById('onClick');

sendBtn.addEventListener('click', function(e) {
  e.preventDefault()

  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var subject = document.getElementById('subject').value;
  var message = document.getElementById('message').value;

  alert('Hi ' + name + ', your message has been sent successfully. For prompt reply, reach me via LinkedIn link provided above. Thanks.')

  // var body = 'name: ' + name + '<br/> email: ' + email + '<br/> subject' + subject + '<br/> message' + message;

  // Email.send({

  //   From : "email",
  //   Subject : subject,
  //   Body : body
  // }).then(
  //   message => alert(message)
  // );

})

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
  strings:[' ', 'Town Planner', 'Graphic Designer', 'Web Designer', 'Full Stack Developer'],
  typeSpeed: 100,
  BackSpeed: 60,
  loop: true 

})

// Changing active buttons using JS
// var header = document.getElementById("myDIV");
// var btns = header.getElementsByClassName("bttn");

// for (var i = 0; i < btns.length; i++) {
//   btns[i].addEventListener("click", function() {
//   var current = document.getElementsByClassName("active");
//   current[0].className = current[0].className.replace(" active", "");
//   this.className += " active";
//   });
// }
