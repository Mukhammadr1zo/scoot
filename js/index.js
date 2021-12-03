const elHamburgerBtn = document.querySelector(".header__hamburger");
const elHeader = document.querySelector(".header");

elHamburgerBtn.addEventListener('click', ()=> {
  elHeader.classList.toggle('header--open');
})