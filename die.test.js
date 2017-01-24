import { roll } from './die'

describe('die', () => {
  it('should roll', () => {
    const die = roll()
    expect(die.length).toBe(5)
    for (const dice of die) {
      expect(dice > 0 && dice < 7).toBe(true)
    }
  })
})
