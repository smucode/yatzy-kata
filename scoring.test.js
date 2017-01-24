import { ones, twos, threes, fours, fives, sixes, onePair, twoPairs, threeOfAKind, fourOfAKind, smallStraight, largeStraight, fullHouse, chance, yatzy } from './scoring'

describe('scoring', () => {
  describe('calculating ones', () => {
    it('should return 0 if none found', () => {
      expect(ones([2,2,2,2,2])).toEqual(0)
    })
    it('should return return the sum', () => {
      expect(ones([2,1,2,2,2])).toEqual(1)
    })
    it('should return return the sum', () => {
      expect(ones([1,1,1,1,1])).toEqual(5)
    })
  })
  describe('calculating twos to fives', () => {
    it('should calculate twos', () => {
      expect(twos([2,2])).toEqual(4)
    })
    it('should calculate threes', () => {
      expect(threes([3,3])).toEqual(6)
    })
    it('should calculate fours', () => {
      expect(fours([4,4])).toEqual(8)
    })
    it('should calculate fives', () => {
      expect(fives([5,5])).toEqual(10)
    })
  })
  describe('calculating sixes', () => {
    it('should return 0 if none found', () => {
      expect(sixes([2,2,2,2,2])).toEqual(0)
    })
    it('should return return the sum', () => {
      expect(sixes([2,6,2,2,2])).toEqual(6)
    })
    it('should return return the sum', () => {
      expect(sixes([6,6,6,6,6,6])).toEqual(36)
    })
  })

  describe('one pair', () => {
    it('returns 0 if no pairs', () => {
      expect(onePair([1,2,3,4,5])).toEqual(0)
    })
    it('returns the sum of the pair', () => {
      expect(onePair([5,5])).toEqual(10)
    })
    it('returns the sum of the pair, even if it is a triplet', () => {
      expect(onePair([5,5,5])).toEqual(10)
    })
    it('returns the sum of the largest pair', () => {
      expect(onePair([5,5,6,6,1,1])).toEqual(12)
    })
  })

  describe('two pairs', () => {
    it('returns 0 if no pairs', () => {
      expect(twoPairs([1,2,3,4,5])).toEqual(0)
    })
    it('returns 0 if not two distict pairs', () => {
      expect(twoPairs([1,1,1,1,2])).toEqual(0)
    })
    it('returns the sum of the pairs', () => {
      expect(twoPairs([5,5,1,1,6])).toEqual(12)
    })
    it('returns the sum of the largest pairs', () => {
      expect(twoPairs([5,5,6,6,1,1,2,2,3,3])).toEqual(22)
    })
  })

  describe('three of a kind', () => {
    it('returns 0 if no match', () => {
      expect(threeOfAKind([1,2,3,4,5])).toEqual(0)
    })
    it('returns the sum of the match', () => {
      expect(threeOfAKind([5,5,1,1,1])).toEqual(3)
    })
  })

  describe('four of a kind', () => {
    it('returns 0 if no match', () => {
      expect(fourOfAKind([1,2,3,4,5])).toEqual(0)
    })
    it('returns the sum of the match', () => {
      expect(fourOfAKind([5,1,1,1,1])).toEqual(4)
    })
  })

  describe('yatzy', () => {
    it('returns 0 if no match', () => {
      expect(yatzy([1,2,3,4,5])).toEqual(0)
    })
    it('returns 50 if match', () => {
      expect(yatzy([1,1,1,1,1])).toEqual(50)
    })
  })

  describe('small straight', () => {
    it('returns 0 if no match', () => {
      expect(smallStraight([1,2,3,4,4])).toEqual(0)
    })
    it('returns sum if match', () => {
      expect(smallStraight([1,2,3,4,5])).toEqual(15)
    })
  })

  describe('large straight', () => {
    it('returns 0 if no match', () => {
      expect(largeStraight([1,2,3,4,4])).toEqual(0)
    })
    it('returns sum if match', () => {
      expect(largeStraight([2,3,4,5,6])).toEqual(20)
    })
  })

  describe('full house', () => {
    it('returns 0 if no match', () => {
      expect(fullHouse([1,2,3,4,4])).toEqual(0)
    })
    it('returns 0 if all equal', () => {
      expect(fullHouse([2,2,2,2,2])).toEqual(0)
    })
    it('returns sum if match', () => {
      expect(fullHouse([2,2,1,1,1])).toEqual(7)
    })
    it('returns sum if full pot', () => {
      expect(fullHouse([6,6,6,5,5])).toEqual(28)
    })
  })

  describe('chance', () => {
    it('just sums', () => {
      expect(chance([2,2,1,1,1])).toEqual(7)
    })
  })
})
