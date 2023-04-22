import { TragedyCalculator } from './tragedyCalculator';
import { ComedyCalculator } from './comedyCalculator';

import { Play, Performance } from '../types';

export function createPerformanceCalculator(
  aPerformance: Performance,
  aPlay: Play
) {
  switch (aPlay.type) {
    case 'tragedy':
      return new TragedyCalculator(aPerformance, aPlay);
    case 'comedy':
      return new ComedyCalculator(aPerformance, aPlay);
    default:
      throw new Error(`알 수 없는 장로: ${aPlay.type}`);
  }
}
