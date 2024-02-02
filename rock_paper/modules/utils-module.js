export function temporaryToggleClass(element, className, interval) {
  element.classList.add(className);

  setTimeout(() => element.classList.remove(className), interval);
}

export function getRandomNumberFromZeroTo(max) {
  return Math.floor(Math.random() * max);
}

export function createButtonNode(classNames, innerHtml) {
  const buttonElement = document.createElement("button");
  buttonElement.innerHTML = innerHtml;

  if (classNames) {
    buttonElement.classList.add(...classNames);
  }

  buttonElement.value;

  return buttonElement;
}

export function increaseScore(element, instance) {
  instance.value = instance.value + 1;
  element.innerHTML = instance.value;
}
