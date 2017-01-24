import { map,sum,flow,filter,sortBy,reduce,groupBy,reverse,isEqual } from 'lodash/fp'

const sumNumbers = value => reduce((sum, dice) => sum + (dice === value ? dice : 0), 0)

const sumEquals = (groupCount, groupSize = 2) => flow(
  groupBy(die => die),
  filter(groups => groups.length >= groupSize),
  map(groups => sum(groups.slice(0, groupSize))),
  sortBy(n => n),
  reverse,
  pairs => pairs.length >= groupCount ? sum(pairs.slice(0, groupCount)) : 0
)

const straight = expected => die => isEqual(expected, die) ? sum(die) : 0

export const ones = sumNumbers(1)
export const twos = sumNumbers(2)
export const threes = sumNumbers(3)
export const fours = sumNumbers(4)
export const fives = sumNumbers(5)
export const sixes = sumNumbers(6)
export const onePair = sumEquals(1)
export const twoPairs = sumEquals(2)
export const threeOfAKind = sumEquals(1, 3)
export const fourOfAKind = sumEquals(1, 4)
export const yatzy = die => sumEquals(1, 5)(die) && 50
export const smallStraight = straight([1,2,3,4,5])
export const largeStraight = straight([2,3,4,5,6])
export const fullHouse = die => {
  const triplet = threeOfAKind(die)
  const pair = onePair(filter(dice => dice !== triplet / 3, die))
  return pair && triplet && pair / 2 !== triplet / 3 ? pair + triplet : 0
}
export const chance = sum
