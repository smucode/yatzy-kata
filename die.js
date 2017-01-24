import { range, sample, map } from 'lodash/fp'

const rollDice = () => sample(range(1,7))

export const roll = () => map(rollDice)(range(1,6))
