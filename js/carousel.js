
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