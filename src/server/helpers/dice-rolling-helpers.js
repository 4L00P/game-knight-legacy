/* eslint-disable no-plusplus */
/* eslint-disable no-restricted-syntax */
const { DiceRoll } = require('@dice-roller/rpg-dice-roller');

// -----------[HELPERS]-----------

// uses DiceRolls library with array of parsed rolls from diceParsing
const rollDice = (roll) => {
  // holder for all rolls as tuples with associated die
  const rolledDice = [];

  const currentRoll = new DiceRoll(roll);
  rolledDice.push(roll, currentRoll.total);

  return rolledDice;
};

module.exports = {
  rollDice,
};
