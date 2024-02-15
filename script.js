window.onscroll = function() {navScroll()};

let navBar = document.getElementById('landing_page--nav');
let card = document.querySelector('.meats__link');

function navScroll() {

  if (document.body.scrollTo > 150 || document.documentElement.scrollTop > 150) {
    navBar.className = 'nav_blur';
  }
  
  else {
    navBar.classList.remove('nav_blur');
  }
}


function flipCard() {
  card.style.transform = 'rotateY(180deg)';
  card.style.transition = 'transform 800ms ease';
}


function openMenu() {
  document.body.classList += " menu--open" 
}

function closeMenu() {
  document.body.classList.remove('menu--open')
}