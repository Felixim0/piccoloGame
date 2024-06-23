import { placeNewName } from './helpers/element-creation.mjs';
import { addName, clearNames } from './helpers/local-storage.mjs';
import { startGame, removeLastName } from './game/setup.mjs';

function setupEventListeners() {
  const addNameButton = document.querySelector('#add-name-button');
  addNameButton.addEventListener('click', () => {
    const nameInput = document.querySelector('input');
    const nameValue = nameInput.value;
    if (nameValue !== '') {
      addName(nameInput.value);
      nameInput.value = '';
      placeNewName(nameValue);
    }
  });

  const playButton = document.querySelector('#play-button2');
  // const randomPlayButton = playButtons[Math.floor(Math.random() * playButtons.length)];
  playButton.addEventListener('click', () => {
    startGame();
  });

  // Remove the last name button
  const removeLastNameButton = document.querySelector('#remove-name-button');
  removeLastNameButton.addEventListener('click', () => {
    // Get the last name added
    removeLastName();
  });
}


function init() {
  clearNames();
  setupEventListeners();
}

window.addEventListener('load', init);
