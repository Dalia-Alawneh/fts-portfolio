const menu__btn = document.querySelector('.menu__img');
const close__btn = document.querySelector('.close__img');
const menu = document.querySelector('.nav__list');
const nav = document.querySelector('.nav')
const list = document.querySelector('.sm-nav__list--positioned-center')

const carousel = document.querySelector('.carousel')
let innerContainer = document.querySelector(".inner-container");

let pressed = false;
let startX;
let x;


menu__btn.addEventListener('click', () => {
  menu.classList.add('show')
  menu.classList.remove('hide')

  menu__btn.style.display = "none";
  close__btn.classList.remove('img--none')
})

close__btn.addEventListener('click', () => {
  menu.classList.remove('show')
  menu.classList.add('hide')

  menu__btn.style.display = "inline";
  close__btn.classList.add('img--none')
})

window.addEventListener("scroll", function () {
  if (window.scrollY > 10) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});



carousel.addEventListener('mousedown', (e) => {
  pressed = true;
  startX = e.offsetX - innerContainer.offsetLeft;
  carousel.style.cursor = 'grabbing'
})
carousel.addEventListener('mouseenter', (e) => {
  carousel.style.cursor = 'grab'
})
carousel.addEventListener('mouseup', (e) => {
  carousel.style.cursor = 'grab'
})
window.addEventListener('mouseup', (e) => {
  pressed = false
})
carousel.addEventListener('mousemove', (e) => {
  if (!pressed) return;
  e.preventDefault();
  x = e.offsetX
  innerContainer.style.left = `${x - startX}px`
  checkBoundary()
})

function checkBoundary() {
  let outer = carousel.getBoundingClientRect();
  let inner = innerContainer.getBoundingClientRect();


  // if (parseInt(innerContainer.style.left) > 0) {
  //   innerContainer.style.left = "0px";
  // }

  // if (inner.right < outer.right) {
  //   innerContainer.style.left = `${inner.width - outer.width}px`;
  // }
}
