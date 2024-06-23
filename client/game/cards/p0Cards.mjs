// Entire "Group" Cards (include everyone from 1-10 players)
export const p0Cards = [
  {
    type: 'rule',
    title: 'Little Man',
    description: 'Every time you drink you must remove the "little man"!',
    penalty: 1,
  },
  {
    type: 'rule',
    title: 'Hops and Dreams',
    description: 'Everyone only use one foot to get around.',
    penalty: 2,
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
    laterCard: {
      type: 'rule',
      title: 'Swear Jar End!',
      description: 'Whoevers turn it is, you down the glass in the middle! If no one has sworn, then down your own drink for being so PC.',
      penalty: 2,
    },
  },
  {
    type: 'rule',
    title: 'TikTok Brain',
    description: 'Next player to look at their phone takes 10 penalties (except the game player)',
    penalty: 1,
  },

  // Describe
  {
    type: 'describe',
    title: 'Describe the Film!',
    description: 'Without using the name of the film or any characters, describe a film. Player to guess it correctly gives a penalty',
    penalty: 1,
  },
  {
    type: 'describe',
    title: 'Describe the Music!',
    description: 'Hum a song (no lyrics). Player to guess it correctly gives a penalty',
    penalty: 1,
  },

  // Most Likely To Challenges
  {
    type: 'mostLikelyTo',
    title: 'Most Likely To',
    description: 'Everyone point to the person most likely to eat food off of the floor. Do 2 penalties',
    penalty: 1,
  },
  {
    type: 'mostLikelyTo',
    title: 'Most Likely To',
    description: 'Everyone point to the person most likely to not bee seen for weeks at a time. Drink 4.',
    penalty: 1,
  },
  {
    type: 'mostLikelyTo',
    title: 'Most Likely To',
    description: 'Everyone point to the person most likely to be an old person in disguiese 🤔. Take one old sip of your drink',
    penalty: 1,
  },
  {
    type: 'mostLikelyTo',
    title: 'Most Likely To',
    description: 'Everyone point to the person most likely to be arrested. They take 2 penalties',
    penalty: 1,
  },
  {
    type: 'mostLikelyTo',
    title: 'Most Likely To',
    description: 'Everyone point to the person most likely to be arrested for selling organs on the black market. They take 1 penalty',
    penalty: 1,
  },
  {
    type: 'mostLikelyTo',
    title: 'Most Likely To',
    description: 'Everyone point to the person most likely to sell feet pics. Take 4 penalties',
    penalty: 1,
  },
  {
    type: 'mostLikelyTo',
    title: 'Most Likely To',
    description: 'Everyone point to the person most likely to buy feet pics. Person most likely to buy their photos takes 3 penalties.',
    penalty: 1,
  },
  {
    type: 'mostLikelyTo',
    title: 'Most Likely To',
    description: 'Everyone point to the person most likely to top. Bottom takes 2 penalties',
    penalty: 1,
  },
  {
    type: 'mostLikelyTo',
    title: 'Most Likely To',
    description: 'Everyone point to the person most likely to eat expired food. They take 2 penalties',
    penalty: 1,
  },
  {
    type: 'mostLikelyTo',
    title: 'Most Likely To',
    description: 'Everyone point to the person who is the subbiest slut. Sub, you take 3 penalties',
    penalty: 1,
  },
  {
    type: 'mostLikelyTo',
    title: 'No bitches',
    description: 'Everyone point to the person with the least bitches. They take 2 penalties',
    penalty: 1,
  },
  {
    type: 'mostLikelyTo',
    title: 'Pimp',
    description: 'Everyone point to the person most likely to pull tonight ;). Take 3 penalties.',
    penalty: 1,
  },
  {
    type: 'mostLikelyTo',
    title: 'Most Stinky ',
    description: 'Everyone point to the person most stinkey, stinkiest takes a penalty!',
    penalty: 1,
  },
  {
    type: 'mostLikelyTo',
    title: 'Coupling Season',
    description: 'Everyone point to the pair most likely to hook up. Both take 3 penalties form eachothers drink',
    penalty: 1,
  },
  {
    type: 'mostLikelyTo',
    title: 'Smarts',
    description: 'Everyone point to the smartest person. They take 2 penalties',
    penalty: 1,
  },
  {
    type: 'mostLikelyTo',
    title: 'Street Smarts',
    description: 'Everyone point to the most street smart person. They take 2 penalties',
    penalty: 1,
  },
  {
    type: 'mostLikelyTo',
    title: 'Scaredy Cat',
    description: 'Everyone point to the person most liekly to get scared. They take 2 penalties',
    penalty: 1,
  },

  // Misc special challnges
  {
    type: 'misc',
    title: 'Big Man',
    description: 'Big man. Everyone do 10 pressups. Down your drink if you can\'t or won\'t',
    penalty: 1,
  },
  {
    type: 'misc',
    title: 'Slitherin',
    description: 'Everyone with a "Q" in their First name, down your drink.',
    penalty: 1,
    followingCard: {
      type: 'misc',
      title: 'Don\'t Question The Question',
      description: 'If you said the last question was dumb, down your drink.',
      penalty: 0,
    },
  },
  {
    type: 'misc',
    title: 'Slitherin',
    description: 'Everyone with an "S" in their First name, down your drink.',
    penalty: 1,
  },
  {
    type: 'misc',
    title: 'Pub Golf',
    description: 'First player to down their drink can make someone else down their drink too!',
    penalty: 1,
  },

  // Vote
  {
    type: 'vote',
    title: 'Nailed it',
    description: 'Vote: Lose your big toe nail or your thumb nail. Losing side takes 2 penalties',
    penalty: 1,
  },
  {
    type: 'vote',
    title: 'Cheesey',
    description: 'Vote: Cheddar or Gouda? Losing side takes 2 penalties. (Never tried one? 4 penalties for you!)',
    penalty: 1,
  },
  {
    type: 'vote',
    title: 'Sunday Best',
    description: 'Vote: Roast Beef or Chicken? Losing side takes 2 penalties. (Veggie? 4 penalties for you!)',
    penalty: 1,
  },
  {
    type: 'vote',
    title: 'Cook or Sundar',
    description: 'Vote: iOS or Android? Losing side takes 2 penalties. (Windows? Give out 15, well done for percevering!)',
    penalty: 1,
  },
  {
    type: 'vote',
    title: 'Scaredy Cat',
    description: 'Vote: ',
    penalty: 1,
  },
  {
    type: 'vote',
    title: '',
    description: '',
    penalty: 1,
  },


  // Circumstantial Penalties
  {
    type: 'circumstantialPenalty',
    title: 'Penny Pincher',
    description: 'Anyone with a coin on their person, give one penalty for each!',
    penalty: 1,
  },
  {
    type: 'circumstantialPenalty',
    title: 'Curleys Wife',
    description: 'Give out a penalty for each item of red clothing you\'re wearing!',
    penalty: 1,
  },
  {
    type: 'circumstantialPenalty',
    title: 'Tiddies',
    description: 'Girls take a penalty for each bra size above an A. Boys you too. (A=0, B=1, etc)',
    penalty: 1,
  },
  {
    type: 'circumstantialPenalty',
    title: 'Host\'s Privilege',
    description: 'Person hosting this get-together gives out 4 penalties!',
    penalty: 1,
  },
  {
    type: 'circumstantialPenalty',
    title: 'Crash n Smash',
    description: 'Give out 4 penaties if you\'ve ever been in a car crash. 8 if it was your fault.',
    penalty: 1,
  },
  {
    type: 'circumstantialPenalty',
    title: '',
    description: '',
    penalty: 1,
  },
  {
    type: 'circumstantialPenalty',
    title: 'Donald',
    description: 'Player who has made the most sexest comments takes 3 penalties',
    penalty: 1,
  },
  {
    type: 'circumstantialPenalty',
    title: 'Delicious Flesh',
    description: 'Anyone bitten by a big in the last 24 hours gives out 1 penalty',
    penalty: 1,
  },
  {
    type: 'circumstantialPenalty',
    title: 'PP energy',
    description: 'Take a penalty if you\'ve ever measured yours or your partners pp 🍆',
    penalty: 1,
  },
  {
    type: 'circumstantialPenalty',
    title: 'Cool Kid',
    description: 'Everyone who would sit at the \'cool kids\' table in school takes a penalty',
    penalty: 1,
  },
  {
    type: 'circumstantialPenalty',
    title: 'In an Overcoat',
    description: 'If you\'ve ever pretended to be someone else, take a penalty',
    penalty: 1,
  },
  {
    type: 'circumstantialPenalty',
    title: 'Handsome Devils',
    description: 'Everyone into guys, take a penalty for each guy in the room you\'d bang. Make direct eye contact when you drink.',
    penalty: 1,
  },
  {
    type: 'circumstantialPenalty',
    title: 'Human Females',
    description: 'Everyone into wamen, take a penalty for each wamen in the room you\'d bang. Make direct eye contact when you drink.',
    penalty: 1,
  },
  {
    type: 'circumstantialPenalty',
    title: 'Bi-curious',
    description: 'Into guys? Take a penalty',
    penalty: 1,
  },
  {
    type: 'circumstantialPenalty',
    title: 'Bi-curious',
    description: 'Into women? Take a penalty',
    penalty: 1,
  },
  {
    type: 'circumstantialPenalty',
    title: 'Lips Stick',
    description: 'Girls wearing lipstick take a penalty',
    penalty: 1,
    followingCard: {
      type: 'circumstantialPenalty',
      title: 'Equality',
      description: 'Anyone else wearing lipstick give out a penalty',
      penalty: 0,
    },
  },
  {
    type: 'circumstantialPenalty',
    title: 'Elders',
    description: 'Youngest player give out 4 penalties.',
    penalty: 1,
  },
  {
    type: 'circumstantialPenalty',
    title: 'Age is just a number',
    description: 'Person with the youngest partner take 3 penalties.',
    penalty: 1,
  },
  {
    type: 'circumstantialPenalty',
    title: 'Eye of the beholder',
    description: 'Person with the oldest parnter take 3 penalties.',
    penalty: 1,
  },
  {
    type: 'circumstantialPenalty',
    title: 'Single Pringle',
    description: 'Take a penalty if you\'re single (bitchless)',
    penalty: 1,
  },
  {
    type: 'circumstantialPenalty',
    title: 'Bros before Hoes',
    description: 'Take 3 penalties if you\'ve ever ditched your friends to get some',
    penalty: 1,
  },
  {
    type: 'circumstantialPenalty',
    title: 'It\'s just a prank bro',
    description: 'Give out 3 penalties if you\'ve ever pranked someone',
    penalty: 1,
  },
  {
    type: 'circumstantialPenalty',
    title: '7 Dwarfs',
    description: 'If you\'ve ever had a scraggly beard, take a penalty',
    penalty: 1,
  },
  {
    type: 'circumstantialPenalty',
    title: 'Trim',
    description: 'Player with the shortest hair give out 1 penalty',
    penalty: 1,
  },
  {
    type: 'circumstantialPenalty',
    title: 'Repunzal',
    description: 'Player with the longest hair give out 1 penalty',
    penalty: 1,
  },
  {
    type: 'circumstantialPenalty',
    title: 'Silent but deadly',
    description: 'Take 5 penalties if you\'ve farted since the game started',
    penalty: 1,
  },
  {
    type: 'circumstantialPenalty',
    title: 'First Time',
    description: 'Players who passed their driving test first time, give out 2 penalties to people that didn\'t',
    penalty: 1,
  },
  {
    type: 'circumstantialPenalty',
    title: 'Younglings',
    description: 'Can\'t drink and drive if you can\t drive. Take 4 if you dont have a drivers license',
    penalty: 1,
  },
  {
    type: 'circumstantialPenalty',
    title: 'Bear',
    description: 'Take a penalty if you\'ve ever caught an animal with your bare hands',
    penalty: 1,
  },
  {
    type: 'circumstantialPenalty',
    title: 'Party Pooper',
    description: 'Anyone who didn\'t want to play this game take 2 penalties',
    penalty: 1,
  },
  {
    type: 'circumstantialPenalty',
    title: 'Sleepwalker',
    description: 'If you\'ve ever moaned in your sleep, take 1 penalties',
    penalty: 1,
  },
  {
    type: 'circumstantialPenalty',
    title: 'Rough Sleeper',
    description: 'Ever slept somewhere that isn\'t a bed? Take 2 penalties',
    penalty: 1,
  },
  {
    type: 'circumstantialPenalty',
    title: '',
    description: '',
    penalty: 1,
  },

  // Truth Penalties
  {
    type: 'truthPenalty',
    title: 'Party Animal',
    description: 'Take a penalty if you\'ve ever stayed out until the sun has risen the next morning!',
    penalty: 1,
  },

  // Challenges
  {
    type: 'challenge',
    title: 'Slut',
    description: 'Whoever takes off 2 items of clothes the fastest gives out 2 penalties',
    penalty: 1,
  },
  {
    type: 'challenge',
    title: '7 is Heaven',
    description: 'Last player with their hands in the air take 3 penalties',
    penalty: 1,
  },
  {
    type: 'challenge',
    title: 'Thumb Boy',
    description: 'Last player with their thumb on a table takes 2 penalties',
    penalty: 1,
  },
  {
    type: 'challenge',
    title: 'Pimpin\'',
    description: 'First player to pull out a condom give out 3 penalties. 6 if it\'s a red one >:)',
    penalty: 1,
  },
  {
    type: 'challenge',
    title: 'Drug Lotd',
    description: 'Player with the most Cash on hand give out 3 penalties',
    penalty: 1,
  },
  {
    type: 'challenge',
    title: 'Toe Skrunggler',
    description: 'All players who touche their toes without bending their legs, give out 1 penalty for each toe. (max 3 per foot)',
    penalty: 1,
  },
  {
    type: 'challenge',
    title: 'New vs Old',
    description: 'Oldest and youngest player play rock paper scissors. Loser takes 2 penalties',
    penalty: 1,
  },
  {
    type: 'challenge',
    title: 'One for the team',
    description: 'Who wants 4 penalties? No volunteers? Everyone take 5.',
    penalty: 1,
  },

];
