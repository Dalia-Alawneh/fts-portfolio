const headerImg = document.getElementById("headerImg");
const badges = document.querySelectorAll('badge');
const headerContent = document.querySelector('.header__content')
const aboutSection = document.getElementById('about')
const workSection = document.getElementById('work')
const projectsSection = document.getElementById('projects')
const cards = document.querySelectorAll('.card')
const timelineCards = document.querySelectorAll('.timeline__card')
const projects = document.querySelectorAll('.project')
const toTopbtn = document.querySelector('.to-top')

window.addEventListener('load', () => {
  headerImg.classList.add('show');
  headerImg.classList.remove('fade--out');
  headerContent.classList.add('show')
  headerContent.classList.remove('fade--out');

  badges.forEach(badge => {
    setTimeout(() => {
      badge.style.transform = 'translateX(0)';
      badge.style.opacity = 1;
    }, index * 500)
  })

  animateForSection(aboutSection, () => {
    cards.forEach((card, index) => {
      setTimeout(() => {
        card.style.transform = 'translate(0) rotate3d(0)';
        card.style.left = 0;
        card.style.opacity = 1;
      }, (index + 1) * 500)
    })
  })

  animateForSection(workSection, () => {
    timelineCards.forEach((card, index) => {
      setTimeout(() => {
        card.style.transform = 'translate(0) scale(1)';
        card.style.opacity = 1;
      }, (index + 1) * 500)
    })
  })

  animateForSection(projectsSection, () => {
    projects.forEach((card, index) => {
      setTimeout(() => {
        card.style.transform = 'scale(1)';
        card.style.opacity = 1;
      }, (index + 1) * 500)
    })
  })
})

window.addEventListener('scroll', (e) => {
  animateForSection(aboutSection, () => {
    cards.forEach((card, index) => {
      setTimeout(() => {
        card.style.transform = 'translate(0) rotate3d(0)';
        card.style.left = 0;
        card.style.opacity = 1;
      }, (index + 1) * 500)
    })
  })

  animateForSection(workSection, () => {
    timelineCards.forEach((card, index) => {
      setTimeout(() => {
        card.style.transform = 'translate(0) scale(1)';
        card.style.opacity = 1;
      }, (index + 1) * 500)
    })
  })

  animateForSection(projectsSection, () => {
    projects.forEach((card, index) => {
      setTimeout(() => {
        card.style.transform = 'scale(1)';
        card.style.opacity = 1;
      }, (index + 1) * 500)
    })
  })
})

const animateForSection = (section, animationFunc) => {

  scrollPosition = window.scrollY;
  if (scrollPosition >= section.offsetTop - window.innerHeight &&
    scrollPosition < section.offsetTop + section.offsetHeight) {
    animationFunc()
  }
}

window.addEventListener('scroll', () => {
  if (window.scrollY >= 200) {
    console.log(window.scrollY);
    toTopbtn.style.opacity = 1;
  } else {
    toTopbtn.style.opacity = 0;
  }
});

toTopbtn.addEventListener('click', ()=>{
  window.scroll({
    top:0,
    behavior: 'smooth'
  })
})