window.onscroll = function() {navScroll()};

let navBar = document.querySelector('nav');

function navScroll() {
  let navWhiteElements = navBar.querySelectorAll('.nav_white');
  let menuText = navBar.querySelector('.menu_link');
  
  for( let i = 0; i < navWhiteElements.length; i++) {
    if (document.body.scrollTo > 150 || document.documentElement.scrollTop > 150) {
      navBar.classList.add('nav_change');
      navWhiteElements[i].classList.add('color_change');
      menuText.style.backgroundColor = '#fff';
    }
    else {
      navBar.classList.remove('nav_change');
      navWhiteElements[i].classList.remove('color_change');
      menuText.style.backgroundColor = '#E5D679';
    }

  }
  
}


let navBtn = document.getElementById('hamburger_menu');
let navModalList = document.querySelector('.nav_modal-list');

navBtn.addEventListener('click', function() {
  let navBarElement = navBar.querySelectorAll('.nav_white');
  
  navBar.classList.toggle('nav_view-change');
  navModalList.classList.toggle('text_appear');

  for( let i = 0; i < navBarElement.length; i++) {
    if (document.body.scrollTo > 150 || document.documentElement.scrollTop > 150) {
      navBarElement[i].classList.add('color_change');
    }   
    else {
      navBarElement[i].classList.toggle('color_change');
    }
  }
});

let offerBox = document.querySelector('.offering-wrapper');
let meatPopUp = document.querySelector('.offering-popup');
let overlayPopUp = document.querySelector('.offering_popup-overlay');
let exitBtn = document.querySelector('.exit_btn');

offerBox.addEventListener('click', function() {
  meatPopUp.classList.add('popup_appear');
  overlayPopUp.classList.add('overlay-popup');
});

exitBtn.addEventListener('click', function() {
  meatPopUp.classList.remove('popup_appear');
  overlayPopUp.classList.remove('overlay-popup');
})

overlayPopUp.addEventListener('click', function() {
  meatPopUp.classList.remove('popup_appear');
  overlayPopUp.classList.remove('overlay-popup');
})
