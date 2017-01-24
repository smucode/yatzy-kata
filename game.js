import { flow, map, range, max } from 'lodash/fp'

import * as ais from './ai'

const playN = (n, ai) => flow(
  map(ai),
  max
)(range(0,n))

for (const ai of ['noob', 'noob2']) {
  for (const num of [10, 100, 1000]) {
    console.log(ai, '\tbest of ' + num + '\t', playN(num, ais[ai]))
  }
}
