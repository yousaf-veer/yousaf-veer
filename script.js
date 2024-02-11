  /* ============ toggle icon navbar ============ */
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
}
  /* ============ scroll section active link ============ */
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('nav a');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if(top >= offset && top < offset + height){
      navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('nav a[href*=' + id + ']').classList.add('active');
      });
    };
  });
  /* ============ sticky navbar ============ */
let header = document.querySelector('header');

header.classList.toggle('sticky', window.scrollY > 100);
  /* ============ remove toggle icon and navbar when click navbar link (scroll) ============ */
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};
  /* ============ scroll reveal ============ */
ScrollReveal({
  distance:'8rem',
  duration: 2000,
  delay:200
});
ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });


$(document).ready(function(){
  $(window).scroll(function(){
  /* ============ scroll-up button show/hide script ============ */
      if(this.scrollY > 500){
          $('.scroll-up-btn').addClass("show");
      }else{
          $('.scroll-up-btn').removeClass("show");
      }
  });
  /* ============ slide-up script ============ */
  $('.scroll-up-btn').click(function(){
      $('html').animate({scrollTop: 0});
       /* ============ removing smooth scroll on slide-up button click ============ */
      $('html').css("scrollBehavior", "auto");
  });
});