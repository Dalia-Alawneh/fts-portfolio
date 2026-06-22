const menu__btn = document.querySelector('.menu__img');
const close__btn = document.querySelector('.close__img');
const menu = document.querySelector('.nav__list');
const nav = document.querySelector('.nav')
const list = document.querySelector('.sm-nav__list--positioned-center')
const contact = document.querySelector('.contact')

menu__btn.addEventListener('click', () => openMenu(menu, menu__btn, close__btn))

close__btn.addEventListener('click', () => closeMenu(menu, menu__btn, close__btn))

window.addEventListener("scroll", () => handleSectionBgOnScroll(nav));

document.addEventListener("mousemove", followMouseGlow);


function createStars() {
  const starCount = 100;

  for (let i = 0; i < starCount; i++) {
    let star = document.createElement("div");
    star.classList.add("star");

    let x = Math.random() * window.innerWidth;
    let y = Math.random() * window.innerHeight;

    let size = Math.random() * 3 + 1;
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;

    let delay = Math.random() * 2;
    star.style.animationDelay = `${delay}s`;

    star.style.left = `${x}px`;
    star.style.top = `${y}px`;

    contact.appendChild(star);
  }
}

createStars();

document.getElementById("year").textContent = new Date().getFullYear();

