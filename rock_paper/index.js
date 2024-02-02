import { triggerConfetti } from "./modules/confetti-module.js";
import { config } from "./modules/config-module.js";
import {
  createButtonNode,
  getRandomNumberFromZeroTo,
  increaseScore,
  temporaryToggleClass,
} from "./modules/utils-module.js";

const scoreboard = {
  player: {
    value: 0,
  },
  computer: {
    value: 0,
  },
};

const playerOptionsElement = document.querySelector(".player-options");
const computerOptionsElement = document.querySelector(".computer-options");
const playerScoreElement = document.querySelector("#player-score");
const computerScoreElement = document.querySelector("#computer-score");

setDefaultScore();
config.options
  .map((sign) => sign.key)
  .forEach((signValue) => {
    const playerSignNode = createButtonNode(
      ["player-sign-item", "sign-button"],
      signValue
    );
    playerOptionsElement.appendChild(playerSignNode);

    const computerSignNode = createButtonNode(["sign-button"], signValue);
    computerOptionsElement.appendChild(computerSignNode);
  });

playerOptionsElement.addEventListener("click", (event) => {
  const playerSign = config.options.find(
    (option) => option.key === event.target.innerHTML
  );
  if (!playerSign) {
    return;
  }

  const computerSignIndex = getRandomNumberFromZeroTo(config.options.length);
  const computerSign = config.options[computerSignIndex];
  const selectedSignElement =
    computerOptionsElement.childNodes[computerSignIndex];
  temporaryToggleClass(selectedSignElement, "active", 500);

  if (playerSign.key === computerSign.key) {
    return;
  }

  if (playerSign.beats.includes(computerSign.key)) {
    triggerConfetti();
    increaseScore(playerScoreElement, scoreboard.player);
  } else {
    increaseScore(computerScoreElement, scoreboard.computer);
  }
});

function setDefaultScore() {
  playerScoreElement.innerHTML = "0";
  computerScoreElement.innerHTML = "0";
}
