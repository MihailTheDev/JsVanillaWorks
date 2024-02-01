import { triggerConfetti } from "./confetti-module.js";
import { config } from './config-module.js';
// const signs = ["✊","✋", "✌️", "🖖", "🦎"];
const scoreboard = {
  player: {
    value: 0
  },
  computer: {
    value: 0 
  }
}
const playerOptionsElement = document.querySelector('.player-options');
const computerOptionsElement = document.querySelector('.computer-options');
const playerScoreElement = document.querySelector('#player-score');
const computerScoreElement = document.querySelector('#computer-score');
config.options
.map(sign => sign.key)
.forEach(signValue => {
  const playerSignNode = createButtonNode(['player-sign-item', 'sign-button'], signValue);
  playerOptionsElement.appendChild(playerSignNode);


  const computerSignNode = createButtonNode(['sign-button'], signValue)
  computerOptionsElement.appendChild(computerSignNode);
})
setDefaultScore();

playerOptionsElement.addEventListener('click', (event) => {

  // console.log(event.innerHTML)
  const playerSign =  config.options.find(option => option.key === event.target.innerHTML)
  if(!playerSign) {
    return;
  }

  const computerSignIndex = getRandomNumberFromZeroTo(config.options.length);
  const computerSign = config.options[computerSignIndex];
  const selectedSignElement = computerOptionsElement.childNodes[computerSignIndex];
  temporaryToggleClass(selectedSignElement, 'active', 500)


  if(playerSign.key === computerSign.key) {
    return;
  }

  if(playerSign.beats.includes(computerSign.key)) {
    triggerConfetti();
    increaseScore(playerScoreElement, scoreboard.player);
  } else {
    increaseScore(computerScoreElement, scoreboard.computer);
  }
})



function createButtonNode(classNames, innerHtml) {
  const spanElement = document.createElement('button');
  spanElement.innerHTML = innerHtml;

  if(classNames) {
    spanElement.classList.add(...classNames)
  }

  spanElement.value

  return spanElement;
}

function getRandomNumberFromZeroTo(max) {
  return Math.floor(Math.random() * max)
}

function increaseScore(element, instance) {
  instance.value = instance.value+1
  element.innerHTML = instance.value;
}

function setDefaultScore() {
  playerScoreElement.innerHTML = '0';
  computerScoreElement.innerHTML = '0'
}

function temporaryToggleClass(element, className, interval) {
  element.classList.add(className);

  setTimeout(() => element.classList.remove(className), interval);
}

// triggerConfetti();
// ########
