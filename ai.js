import { flow, map, maxBy } from 'lodash/fp'
import scorecard from './scorecard'
import { roll } from './die'

export const noob = () => {
  const card = scorecard()

  while(card.remainder().length) {
    const die = roll()
    const score = card.remainder()[0]
    card.register(die, score.key)
  }

  return card.total()
}

export const noob2 = () => {
  const maxScore = die => flow(
    map(score => Object.assign({}, score, { val: score.fn(die) })),
    maxBy(score => score.val)
  )

  const card = scorecard()

  while(card.remainder().length) {
    const die = roll()
    const score = maxScore(die)(card.remainder())
    card.register(die, score.key)
  }

  return card.total()
}
