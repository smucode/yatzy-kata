import * as scores from './scoring'
import { map,sum,flow,keyBy,filter,sortBy,reduce,groupBy,reverse,isEqual } from 'lodash/fp'

const BONUS_THRESHOLD = 63
const BONUS_SCORES = ['ones','twos','threes','fours','fives','sixes']
const DEFAULT_SCORES = BONUS_SCORES.concat(['onePair','twoPairs','threeOfAKind','fourOfAKind','smallStraight','largeStraight','fullHouse','chance','yatzy'])

const createCard = flow(
  map(score => ({ key: score, fn: scores[score] })),
  keyBy('key')
)

const getAvail = filter(score => isNaN(score.val))

const getTotal = card => {
  const total = reduce((sum, score) => sum += score.val || 0, 0, card)
  const aboveTheLine = filter(score => ~BONUS_SCORES.indexOf(score.key), card)
  const sumAboveTheLine = reduce((sum, score) => sum += score.val || 0, 0, aboveTheLine)
  const bonus = sumAboveTheLine >= BONUS_THRESHOLD ? 50 : 0
  return total + bonus;
}

export default (scores = DEFAULT_SCORES) => {
  const card = createCard(scores)
  return {
    remainder(){
      return getAvail(card)
    },
    register(die, score){
      const sum = card[score].fn(die)
      card[score].val = sum
    },
    total(){
      return getTotal(card)
    }
  }
}
