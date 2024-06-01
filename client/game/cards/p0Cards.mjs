// Entire "Group" Cards (include everyone from 1-10 players)
export const p0Cards = [
  {
    type: 'rule',
    title: 'Little Man',
    description: 'Every time you drink you must remove the "little man"!',
    penalty: 1,
    usedAlready: false,
    assignedTo: [],
  },
  {
    type: 'rule',
    title: 'Hops and Dreams',
    description: 'Everyone only use one foot to get around.',
    penalty: 2,
    usedAlready: false,
    assignedTo: [],
    laterCard: {
      type: 'rule',
      title: 'Two Legs!',
      description: 'You can return to using both legs. Anyone who broke the hopping rule gets slapped by anyone who didn\'t break it',
      penalty: 0,
    },
  },
  {
    type: 'rule',
    title: 'Swear Jar',
    description: 'Put a glass in the middle. Everytime someone swears, they have to pour some of their drink into the cup.',
    penalty: 2,
    usedAlready: false,
    assignedTo: [],
    laterCard: {
      type: 'rule',
      title: 'Swear Jar End!',
      description: 'Whoevers turn it is, you down the glass in the middle! If no one has sworn, then down your own drink for being so PC.',
      penalty: 2,
    },
  },
  // Describe
  {
    type: 'describe',
    title: 'Describe the Film!',
    description: 'Without using the name of the film or any characters, describe a film. Player to guess it correctly gives a penalty',
    penalty: 1,
    usedAlready: false,
    assignedTo: [],
  },
  {
    type: 'describe',
    title: 'Describe the Music!',
    description: 'Hum a song (no lyrics). Player to guess it correctly gives a penalty',
    penalty: 1,
    usedAlready: false,
    assignedTo: [],
  },
  // Most Likely To Challenges
  {
    type: 'mostLikelyTo',
    title: 'Most Likely To',
    description: 'Everyone point to the person most likely to eat food off of the floor',
    penalty: 1,
    usedAlready: false,
    assignedTo: [],
  },
  {
    type: 'mostLikelyTo',
    title: 'Most Likely To',
    description: 'Everyone point to the person most likely to not bee seen for weeks at a time',
    penalty: 1,
    usedAlready: false,
    assignedTo: [],
  },
  {
    type: 'mostLikelyTo',
    title: 'Most Likely To',
    description: 'Everyone point to the person most likely to be an old person in disguiese 🤔',
    penalty: 1,
    usedAlready: false,
    assignedTo: [],
  },
  {
    type: 'mostLikelyTo',
    title: 'Most Likely To',
    description: 'Everyone point to the person most likely to be arrested',
    penalty: 1,
    usedAlready: false,
    assignedTo: [],
  },
  {
    type: 'mostLikelyTo',
    title: 'Most Likely To',
    description: 'Everyone point to the person most likely to be arrested for selling organs on the black market',
    penalty: 1,
    usedAlready: false,
    assignedTo: [],
  },

  {
    type: 'mostLikelyTo',
    title: 'Most Likely To',
    description: 'Everyone point to the person most likely to sell feet pics',
    penalty: 1,
    usedAlready: false,
    assignedTo: [],
  },

  {
    type: 'mostLikelyTo',
    title: 'Most Likely To',
    description: 'Everyone point to the person most likely to buy feet pics',
    penalty: 1,
    usedAlready: false,
    assignedTo: [],
  },

  {
    type: 'mostLikelyTo',
    title: 'Most Likely To',
    description: 'Everyone point to the person most likely to top',
    penalty: 1,
    usedAlready: false,
    assignedTo: [],
  },

  {
    type: 'mostLikelyTo',
    title: 'Most Likely To',
    description: 'Everyone point to the person most likely to eat expired food',
    penalty: 1,
    usedAlready: false,
    assignedTo: [],
  },

  {
    type: 'mostLikelyTo',
    title: 'Most Likely To',
    description: 'Everyone point to the person who is the subbiest slut',
    penalty: 1,
    usedAlready: false,
    assignedTo: [],
  },

];
