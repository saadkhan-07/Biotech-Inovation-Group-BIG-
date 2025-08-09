// js/script.js
   // Toggle mobile menu functionality
    // document.addEventListener('DOMContentLoaded', function() {
    //   const navToggle = document.querySelector('.nav-toggle');
    //   const navMenu = document.querySelector('nav ul');
      
    //   if (navToggle && navMenu) {
    //     navToggle.addEventListener('click', function() {
    //       navMenu.classList.toggle('show');
    //     });
    //   }
    // });
    document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('nav-menu');

  hamburger.addEventListener('click', function () {
    navMenu.classList.toggle('show');
  });
});
