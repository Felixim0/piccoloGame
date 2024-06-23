import { generateCardElements } from '../helpers/element-creation.mjs';

function getDecksToAdd(names) {
  console.log(names);
  return ['p0Cards', 'p1Cards', 'p2Cards'];
}

function mergeDecks(targetDeck, sourceDeck) {
  targetDeck.push(...sourceDeck);
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

  // Chance of picking is out of 100
  const deckMakeup = [
    { cardType: 'rule', chanceOfPicking: 50 },
    { cardType: 'describe', chanceOfPicking: 10 },
    { cardType: 'challenge', chanceOfPicking: 10 },
    { cardType: 'truthOrDare', chanceOfPicking: 10 },
    { cardType: 'rockPaperScisors', chanceOfPicking: 15 },

    // Cards that have max penalty!
    { cardType: 'misc', chanceOfPicking: 5 },
  ];

  console.log(deck);

  return deck;
}

function shuffleCards(cards) {
  for (let i = cards.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [cards[i], cards[j]] = [cards[j], cards[i]];
  }
  return cards;
}

function assignNamesToCards(cards, names) {
  // TODO replace "$name1" and "$name2" and "$name3" with names as appropriate

  // Array of name objects to track usage of names and make even
  const nameUsage = names.map(name => ({ name: name, usage: 0 }));

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


export async function getCardDeck(names) {
  // Merge appropriate decks (Includes all cards)
  const mergedDeck = getMergedCardDeck(names);

  // Pick "types" of cards (i.e. rules, challenges, etc.)
  const cherryPickedDeck = cherryPickCards(mergedDeck);

  // Randomize the deck order
  const shuffledDeck = await shuffleCards(cherryPickedDeck);

  // Expand cards that need names (i.e. $name1 becomes "felix" etc)
  const nameAssigned = assignNamesToCards(shuffledDeck, names);

  // Insert "later" or "after" cards (cards which require a 'stop that' or immedaite card afterwards)

  return nameAssigned;
}
