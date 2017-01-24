import scorecard from './scorecard'

describe('scorecard', () => {

  describe('scorecard with only one score', () => {
    const card = scorecard(['ones'])
    it('should initially have no score', () => {
      expect(card.total()).toBe(0)
    })
    it('should have one available score', () => {
      expect(card.remainder().length).toBe(1)
    })
    it('should register score and update', () => {
      card.register([1,1,1,1,1,2], 'ones')
      expect(card.remainder().length).toBe(0)
      expect(card.total()).toBe(5)
    })
  })

  describe('scorecard with a perfect score', () => {
    const perf = {
      'ones':           [1,1,1,1,1],
      'twos':           [2,2,2,2,2],
      'threes':         [3,3,3,3,3],
      'fours':          [4,4,4,4,4],
      'fives':          [5,5,5,5,5],
      'sixes':          [6,6,6,6,6],
      'onePair':        [6,6,6,6,6],
      'twoPairs':       [6,6,6,5,5],
      'threeOfAKind':   [6,6,6,6,6],
      'fourOfAKind':    [6,6,6,6,6],
      'smallStraight':  [1,2,3,4,5],
      'largeStraight':  [2,3,4,5,6],
      'fullHouse':      [5,5,6,6,6],
      'chance':         [6,6,6,6,6],
      'yatzy':          [6,6,6,6,6]
    }

    it('should add up', () => {
      const card = scorecard()
      card.remainder().forEach(score => card.register(perf[score.key], score.key))
      expect(card.total()).toBe(374)
    })
  })

  describe('bonus', () => {
    it('three of each should constitute bonus', () => {
      const bonus = {
        'ones':   [1,1,1,2,2],
        'twos':   [2,2,2,3,3],
        'threes': [3,3,3,4,4],
        'fours':  [4,4,4,5,5],
        'fives':  [5,5,5,6,6],
        'sixes':  [6,6,6,1,1],
      }
      const card = scorecard()
      card.remainder().forEach(score => card.register(bonus[score.key] || [], score.key))
      expect(card.total()).toBe(113)
    }),
    it('almost does not shoot anyone of the pony', () => {
      const bonus = {
        'ones':   [1,1,2,2,2],
        'twos':   [2,2,2,3,3],
        'threes': [3,3,3,4,4],
        'fours':  [4,4,4,5,5],
        'fives':  [5,5,5,6,6],
        'sixes':  [6,6,6,1,1],
      }
      const card = scorecard()
      card.remainder().forEach(score => card.register(bonus[score.key] || [], score.key))
      expect(card.total()).toBe(62)
    })
  })

})
