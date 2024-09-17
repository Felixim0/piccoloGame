import { switchFromMainMenuTo, changeBackgroundColour, generateCards } from './game-helpers.mjs';
import { addCardElements, populateCard } from './card-helpers.mjs';
import { getNames, removeLastNameFromLocalStorage } from '../helpers/local-storage.mjs';
import { setScreenLockToLandscape } from '../helpers/screen-orientation.mjs';


export async function startGame() {
  // Rotate the screen to landscape if the device suports it
  setScreenLockToLandscape();

  // Switch from main menu to game
  switchFromMainMenuTo();

  // Generate Card Objects from Object File
  const cards = await generateCards();

  // Add the elements for header and desc and button
  addCardElements();

  // Populate Card Details
  populateCard(cards);

  // Set background colour
  changeBackgroundColour();

  document.addEventListener('click', () => {
    // Add event listener for next card
    cards.shift();
    populateCard(cards);
    changeBackgroundColour();
  });
}

export function removeLastName() {
  // Get the last name added
  const names = getNames();
  if (names.length !== 0) {
    const nameToRemove = names[names.length - 1];
    // Remove name label from dom
    const nameEl = document.querySelector('#' + nameToRemove);
    nameEl.remove();
    // Remove name from local storage
    removeLastNameFromLocalStorage();
  }
}
