import { Play, Performance } from '../types';

export abstract class performanceCalculator {
  performance: Performance;
  play: Play;
  constructor(aPerformance: Performance, aPlay: Play) {
    this.performance = aPerformance;
    this.play = aPlay;
  }

  get amount(): number {
    throw new Error('서브클래스에서 처리하도록 설계되었습니다.');
  }

  get volumeCredits(): number {
    return Math.max(this.performance.audience - 30, 0);
  }
}
