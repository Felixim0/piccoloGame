import { generateCardElements } from '../helpers/element-creation.mjs';

function assignNamesToCards(cards, names) {
  // TODO replace "$name1" and "$name2" and "$name3" with names as appropriate

  // Array of name objects to track usage of names and make even
  const nameUsage = names.map(name => ({ name: name, usage: 0 }));

  for (const card of cards) {
    // TODO this bit
    console.log(card);
  }
  return cards;
}

export function populateCard(cards) {
  const cardElements = document.querySelector('#card-component-container');
  const cardTitle = cardElements.querySelector('#card-title');
  const cardDesc = cardElements.querySelector('#card-description');

  const topCard = cards[0];
  cardTitle.textContent = topCard.title;
  cardDesc.textContent = topCard.description;
}

export function addCardElements() {
  const mainPage = document.querySelector('main');
  const containedElements = generateCardElements();
  mainPage.append(containedElements);
}

function shuffleCards(cards) {
  for (let i = cards.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [cards[i], cards[j]] = [cards[j], cards[i]];
  }
  return cards;
}

function getDecksToAdd(names) {
  console.log(names);
  return ['p0Cards', 'p1Cards', 'p2Cards'];
}

export async function getMergedCardDeck(names) {
  // Add appropriate card deck names
  const decksToAdd = getDecksToAdd(names);

  // Setup workingDeck to update with decks from decksToAdd
  const workingDeck = [];

  // Load and merge the decks asynchronously
  for (const deckToAdd of decksToAdd) {
    try {
      const module = await import(`/game/cards/${deckToAdd}.mjs`);

      // Verify the expected property is in the module
      if (module[deckToAdd]) {
        mergeDecks(workingDeck, module[deckToAdd]);
      } else {
        console.error(`Expected property ${deckToAdd} not found in module`);
      }
    } catch (error) {
      console.error(`Failed to load deck ${deckToAdd}:`, error);
    }
  }
  return workingDeck;
}

function cherryPickCards(deck) {
  // Now make sure there's a good mix of cards
  const cherryPickedDeck = [];
  const deckMakeup = [
    { cardType: 'rule', numberOfCards: 4 },
    { cardType: 'describe', numberOfCards: 2 },
    { cardType: 'misc', numberOfCards: 1 },
    { cardType: 'challenge', numberOfCards: 2 },
    { cardType: 'truthOrDare', numberOfCards: 1 },
    { cardType: 'rockPaperScisors', numberOfCards: 1 },
  ];


  return deck;
}

function mergeDecks(targetDeck, sourceDeck) {
  targetDeck.push(...sourceDeck);
}

export async function getCardDeck(names) {
  // Merge appropriate decks (Includes all cards)
  const mergedDeck = getMergedCardDeck(names);

  const cherryPickedDeck = cherryPickCards(mergedDeck);

  const shuffledDeck = await shuffleCards(cherryPickedDeck);

  const nameAssigned = assignNamesToCards(shuffledDeck, names);

  return nameAssigned;
}
