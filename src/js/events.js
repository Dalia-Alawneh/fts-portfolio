const openMenu = (menu, menu__btn, close__btn) => {
  menu.classList.add('show')
  menu.classList.remove('hide')
  menu__btn.style.display = "none";
  close__btn.classList.remove('img--none')
}

const closeMenu = (menu, menu__btn, close__btn) => {
  menu.classList.remove('show')
  menu.classList.add('hide')
  menu__btn.style.display = "inline";
  close__btn.classList.add('img--none')
}

const handleSectionBgOnScroll = (section) => {
  if (window.scrollY > 10) {
    section.classList.add("scrolled");
  } else {
    section.classList.remove("scrolled");
  }
}

const followMouseGlow = (e) => {
  const glow = document.querySelector(".glow");
  glow.style.left = `${e.clientX}px`;
  glow.style.top = `${e.clientY}px`;
}