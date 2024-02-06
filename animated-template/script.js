const burgerElement = document.querySelector('.burger-menu');

burgerElement.addEventListener('click', () => {
  const overlayPanelElement = document.querySelector('.overlay-panel');

  toggleClass(overlayPanelElement, 'active')
})


function toggleClass (element, className) {
  if(element.classList.contains(className)) {
    element.classList.remove(className);
  } else {
    element.classList.add(className);
  }
}