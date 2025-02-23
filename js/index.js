const menu__btn = document.querySelector('.menu__img');
const close__btn = document.querySelector('.close__img');
const menu = document.querySelector('.list');

menu__btn.addEventListener('click', () => {
  menu.classList.toggle('show')
  menu.classList.remove('hide')
  close__btn.classList.add('sm-img--display')
  close__btn.classList.remove('img--none')
  menu__btn.classList.remove('sm-img--display')
  menu__btn.classList.add('img--none')
})

close__btn.addEventListener('click', () => {
  menu.classList.remove('show')
  menu.classList.toggle('hide')
  menu__btn.classList.add('sm-img--display')
  menu__btn.classList.remove('img--none')
  close__btn.classList.remove('sm-img--display')
  close__btn.classList.add('img--none')
})

