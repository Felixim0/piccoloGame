import { placeNewName } from './helpers/element-creation.mjs';
import { addName, clearNames } from './helpers/local-storage.mjs';
import { startGame, removeLastName } from './game/setup.mjs';
import { setScreenLockToPortrait } from './helpers/screen-orientation.mjs';

function limitNameLength(newName) {
  // Truncate names to the first 10 characters
  let finalName = newName;
  if (newName.length > 10) {
    finalName = newName.substring(0, 10);
  }
  return finalName;
}

function setupEventListeners() {
  const addNameButton = document.querySelector('#add-name-button');
  addNameButton.addEventListener('click', () => {
    const nameInput = document.querySelector('input');
    const nameValue = nameInput.value;
    const nameLimited = limitNameLength(nameValue);
    if (nameValue !== '') {
      addName(nameLimited);
      nameInput.value = '';
      placeNewName(nameLimited);
    }
  });

  const playButton = document.querySelector('#play-button2');
  // const randomPlayButton = playButtons[Math.floor(Math.random() * playButtons.length)];
  playButton.addEventListener('click', () => {
    console.log('Starting game');
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
  console.log('Initialised start script');

  // Set the initial screenlock orientation to portrait-primary
  setScreenLockToPortrait();

  // Clear Previous Names
  clearNames();

  setupEventListeners();
}

window.addEventListener('load', init);
