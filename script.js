window.onscroll = function() {navScroll()};

let navBar = document.getElementById('landing_page--nav');

function navScroll() {

  if (document.body.scrollTo > 150 || document.documentElement.scrollTop > 150) {
    navBar.className = 'nav_blur';
  }
  
  else {
    navBar.classList.remove('nav_blur');
  }
}

let porkBtn = document.querySelector('.type-pork--btn');
let beefBtn = document.querySelector('.type-beef--btn');
let chickenBtn = document.querySelector('.type-chicken--btn');
let seaFoodBtn = document.querySelector('.type-seafood--btn');

const porkContainer = document.querySelector('.pork_meat--container');
const beefContainer = document.querySelector('.beef_meat--container');
const chickenContainer = document.querySelector('.chicken_meat--container');
const seaFoodContainer = document.querySelector('.seafood_meat--container');



function displayPork() {
  porkContainer.style.display = 'flex';
  beefContainer.style.display = 'none';
  chickenContainer.style.display = 'none';
  seaFoodContainer.style.display = 'none';
  
  porkBtn.classList.add('button-hover--effect');
  beefBtn.classList.remove('button-hover--effect');
  chickenBtn.classList.remove('button-hover--effect');
  seaFoodBtn.classList.remove('button-hover--effect');
}

function displayBeef() {
  beefContainer.style.display = 'flex';
  porkContainer.style.display = 'none';
  chickenContainer.style.display = 'none';
  seaFoodContainer.style.display = 'none';
  
  beefBtn.classList.add('button-hover--effect');
  porkBtn.classList.remove('button-hover--effect');
  seaFoodBtn.classList.remove('button-hover--effect');
  chickenBtn.classList.remove('button-hover--effect');
  
}

function displayChicken() {
  chickenContainer.style.display = "flex";
  porkContainer.style.display = 'none';
  beefContainer.style.display = 'none'; 
  seaFoodContainer.style.display = 'none';
  
  chickenBtn.classList.add('button-hover--effect');
  porkBtn.classList.remove('button-hover--effect');
  seaFoodBtn.classList.remove('button-hover--effect');
  beefBtn.classList.remove('button-hover--effect');
}

function displaySeafood() {
  seaFoodContainer.style.display = 'flex';
  chickenContainer.style.display = "none";
  porkContainer.style.display = 'none';
  beefContainer.style.display = 'none'; 
  
  seaFoodBtn.classList.add('button-hover--effect');
  porkBtn.classList.remove('button-hover--effect');
  chickenBtn.classList.remove('button-hover--effect');
  beefBtn.classList.remove('button-hover--effect');
}


let meatImage = document.querySelector('.meat--box');
let bodyBackground = document.getElementById('meat_page--body');

function moreInfo() {
  meatImage.classList.add('more_info--effect');
  bodyBackground.style.filter = 'brightness(0.8)'
}