const menu__btn = document.querySelector('.menu__img');
const close__btn = document.querySelector('.close__img');
const menu = document.querySelector('.nav__list');
const nav = document.querySelector('.nav')
const list = document.querySelector('.sm-nav__list--positioned-center')

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

