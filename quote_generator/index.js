const buttonElement = document.querySelector('.generate-button');

const authorElement = document.querySelector('.author-content');
const quoteElement = document.querySelector('.quote-content');
const sourceElement = document.querySelector('.source-content');

buttonElement.addEventListener('click', () => {
  const url = 'https://type.fit/api/quotes';
  temporaryToggleClass(buttonElement, 'button-disabled', 500)
  temporaryToggleClass(buttonElement, 'button-active', 500)
  fetch(url)
    .then((response) => response.json())
    .then((response) => {
      const randomIndex = Math.floor(Math.random() * response.length);
      const selectedQuote = response[randomIndex];
      const quote = selectedQuote.text
      const [author, source] = selectedQuote.author.split(',');

      quoteElement.innerHTML = quote
      authorElement.innerHTML = author;
      sourceElement.innerHTML = source;

    });
});

function temporaryToggleClass(element, className, interval) {
  element.classList.add(className);
  setTimeout(() => element.classList.remove(className), interval);
}
