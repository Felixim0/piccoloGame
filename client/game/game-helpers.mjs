import { addMultipleStylesheets, removeClass, appendClass } from '../helpers/element-creation.mjs';
import { getNames } from '../helpers/local-storage.mjs';
import { getCardDeck } from './card-helpers.mjs';


export function switchFromMainMenuTo() {
  // Make the main menu invisible
  const mainMenu = document.querySelector('#title-and-options-container');
  appendClass([mainMenu], 'invisible');

  // Remove the main menu stylesheets
  const mainMenuStylesheets = document.querySelectorAll('.mainMenuStyleSheet');
  for (const styleSheet of mainMenuStylesheets) {
    styleSheet.remove();
  }

  // Add the game stylesheets
  const gameStylesheets = ['all', 'background', 'foreground'];
  addMultipleStylesheets('./css/game/', gameStylesheets, 'gameStyles');
}

function getRandomDifferentNumber(max, current) {
  let newNumber;
  do {
    newNumber = Math.floor(Math.random() * max);
  } while (newNumber === current);
  return newNumber;
}

const colourClasses = [
  'solidRed',
  'solidBlue',
  'solidGreen',
  'solidOrange',
  'solidPurple',
  'solidPink',
  'solidCyan',
  'solidMagenta',
  'solidLime',
  'solidTurquoise',
];

let currentColourIndex = getRandomDifferentNumber(colourClasses.length, -1);

export function changeBackgroundColour() {
  const mainPage = document.querySelector('main');

  const newColourIndex = getRandomDifferentNumber(colourClasses.length, currentColourIndex);

  const cssClass = colourClasses[newColourIndex];
  // Update the current color index
  currentColourIndex = newColourIndex;
  // Remove previous color classes
  for (const colour of colourClasses) {
    removeClass([mainPage], colour);
  }

  appendClass([mainPage], cssClass);
}

export async function generateCards() {
  // Get appropriate card deck (will add prefferences/other decks here)
  const names = getNames();
  const cardDeck = await getCardDeck(names);

  return cardDeck;
}
