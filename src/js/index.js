const menu__btn = document.querySelector('.menu__img');
const close__btn = document.querySelector('.close__img');
const menu = document.querySelector('.nav__list');
const nav = document.querySelector('.nav')
const list = document.querySelector('.sm-nav__list--positioned-center')
const contact = document.querySelector('.contact')

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


document.addEventListener("mousemove", (e) => {
  const glow = document.querySelector(".glow");
  glow.style.left = `${e.clientX}px`;
  glow.style.top = `${e.clientY}px`;
});


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

