window.onscroll = function() {navScroll()};

let navBar = document.getElementById('landing_page--nav');
let menuPicker = document.querySelector('.menus__picker--container');

function navScroll() {

  if (document.body.scrollTo > 150 || document.documentElement.scrollTop > 150) {
    navBar.className = 'nav_blur';
  }
  
  else {
    navBar.classList.remove('nav_blur');
  }
}

