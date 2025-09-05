/* eslint-disable no-plusplus */
/* eslint-disable no-restricted-syntax */
const { DiceRoll } = require('@dice-roller/rpg-dice-roller');

// -----------[HELPERS]-----------

// sample rolls data: 2d10, 1d8, 3d6, 2d20, 2d%
const testRolls = ['d10', 'd10', 'd8', 'd6', 'd6', 'd6', 'd20', 'd20', 'd%', 'd%'];

// uses DiceRolls library with array of parsed rolls from diceParsing
const rollDice = (rolls) => {
  // holder for all rolls as tuples with associated die
  const rolledDice = [];

  // iterate through rolls and roll each die and add to array
  for (let i = 0; i < rolls.length; i++) {
    const currentRoll = new DiceRoll(rolls[i]);
    rolledDice.push([rolls[i], currentRoll.total]);
  }

  return rolledDice;
};

console.log(rollDice(testRolls));

module.exports = {
  rollDice,
};
