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

function openMenu() {
  document.body.classList += " menu--open" 
  menuPicker.style.zIndex = '0';
  
}

function closeMenu() {
  document.body.classList.remove('menu--open')
  menuPicker.style.zIndex = '100';
}





let meatMenu = document.querySelector('.meat_offering');
let appMenu = document.querySelector('.app_offering');

let offeringContainer = document.querySelector('.offering_image--container');
let offeringContainer2 = document.querySelector('.offering_image--container--2');
let offeringContainer3 = document.querySelector('.offering_image--container--3');

function displaySides() {
  displayContainer2();
}

function displayMeats() {
  displayContainer();
}

function displayDrinks() {
  displayContainer3();
}

function displayContainer() {
  offeringContainer.style.display = 'block';
}

function closeDisplayContainer() {
  offeringContainer.style.display = 'none';
}

function displayContainer2() {
  offeringContainer2.style.display = 'block';
}

function closeDisplayContainer2() {
  offeringContainer2.style.display = 'none';
}

function displayContainer3() {
  offeringContainer3.style.display = 'block';
}

function closeDisplayContainer3() {
  offeringContainer3.style.display = 'none';
}

function closeOfferingMenu() {
  closeDisplayContainer();
}

function closeAppMenu() {
  closeDisplayContainer2();
}

function closeDrinkMenu() {
  closeDisplayContainer3();
}



// POP UP
let popUp = document.getElementById('pop_up--container');
let popUpImg = document.querySelector('.pop_up--img');

setTimeout(function() {
  popUp.style.visibility = 'visible';
}, 4000);

function closePopUp() {
  popUp.style.visibility = 'hidden';
  popUp.style.opacity = '0';
}