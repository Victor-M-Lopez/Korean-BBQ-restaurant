window.onscroll = function() {navScroll()};

let navBar = document.querySelector('nav');

function navScroll() {

  if (document.body.scrollTo > 150 || document.documentElement.scrollTop > 150) {
    navBar.classList.add('nav_change');
  }
  
  else {
    navBar.classList.remove('nav_change');
  }
}

