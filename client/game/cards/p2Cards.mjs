// Cards that are for one person (I.e. it's their go, "Put a hand up or take a drink")


export const p2Cards = [
  {
    type: 'contest',
    title: 'Staring Contest!',
    description: '$name1 and $name2 have a staring contest! Loser sniffs the others shoe.',
    usedAlready: false,
    assignedTo: [],
  },
  {
    type: 'contest',
    title: 'Arm Wrestling',
    description: '$name1 wrestle $name2\'s arm, loser drinks the other persons drink!',
    usedAlready: false,
    assignedTo: [],
  },
  {
    type: 'contest',
    title: 'Thumb War',
    description: '$name1 and $name2 hold hands. Then do a thmb wrestle.',
    penalty: 1,
    usedAlready: false,
    assignedTo: [],
  },
  {
    type: 'contest',
    title: 'Rock Paper Scissors Showdown',
    description: '$name1 and $name2 best of one. Unless $name2 loses the first round. Then it\'s best of 3.',
    penalty: 2,
    usedAlready: false,
    assignedTo: [],
  },
  {
    type: 'contest',
    title: 'Stone, cardboard, knife',
    description: 'Forget it\'s not \'rock paper scisors\' do an extra penalty. $name1 and $name2 good luck!',
    usedAlready: false,
    assignedTo: [],
  },
  // Most Likely To Challenges
  {
    type: 'mostLikelyTo',
    title: 'Most Likely To',
    description: 'Between $name1 and $name2 who would win in a fight?',
    penalty: 1,
    usedAlready: false,
    assignedTo: [],
  },
  {
    type: 'mostLikelyTo',
    title: 'Most Likely To',
    description: 'Between $name1 and $name2 which one is the most attractive',
    penalty: 1,
    usedAlready: false,
    assignedTo: [],
  },
  // 2 Player Challenges
  {
    type: 'challenge',
    title: 'Swapsies!',
    description: '$name1 and $name2 swap drinks!',
    penalty: 1,
    usedAlready: false,
    assignedTo: [],
  },
  {
    type: 'challenge',
    title: 'Toes!',
    description: '$name1 and $name2 swap socks (or one item of clothing if one of you is less than 6 foot)!',
    penalty: 1,
    usedAlready: false,
    assignedTo: [],
  },


];
