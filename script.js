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

// nav change when using hamburger menu


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


// offering section for pop ups
let meatBox = document.querySelector('.meat-wrapper');
let meatPopUp = document.querySelector('.meat-popup');

let appBox = document.querySelector('.app-wrapper');
let appPopUp = document.querySelector('.app-popup');

let drinkBox = document.querySelector('.drink-wrapper');
let drinkPopUp = document.querySelector('.drink-popup');

let genPopUp = document.querySelectorAll('.offering-popup');

let overlayPopUp = document.querySelector('.offering_popup-overlay');
let exitBtn = document.querySelector('.exit_btn');

meatBox.addEventListener('click', function() {
  meatPopUp.classList.add('popup_appear');
  overlayPopUp.classList.add('overlay-popup');
});

appBox.addEventListener('click', function() {
  appPopUp.classList.add('popup_appear');
  overlayPopUp.classList.add('overlay-popup');
})

drinkBox.addEventListener('click', function() {
  drinkPopUp.classList.add('popup_appear');
  overlayPopUp.classList.add('overlay-popup');
})

exitBtn.addEventListener('click', function() {
  exitPopUp();
});

overlayPopUp.addEventListener('click', function() {
  exitPopUp();
});

function exitPopUp() {
  for (let i = 0; i < genPopUp.length; i++) {
    if (genPopUp[i].classList.contains('meat-popup')) {
      meatPopUp.classList.remove('popup_appear');
    }
    else if (genPopUp[i].classList.contains('app-popup')) {
      appPopUp.classList.remove('popup_appear');
    }
    else if (genPopUp[i].classList.contains('drink-popup')) {
      drinkPopUp.classList.remove('popup_appear');
    }
    else return 0;
  }
  overlayPopUp.classList.remove('overlay-popup');
}

let modalLinks = document.querySelectorAll('.nav_modal-link');

for (let i = 0; i < modalLinks.length; i++) {
  modalLinks[i].addEventListener('click', function() {
    navBar.classList.remove('nav_view-change');
    navModalList.classList.remove('text_appear');
    
  })
}