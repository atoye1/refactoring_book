import { performanceCalculator } from './performanceCalculator';

export class TragedyCalculator extends performanceCalculator {
  get amount() {
    let result = 40000;
    if (this.performance.audience > 30) {
      result += 1000 * (this.performance.audience - 30);
    }
    return result;
  }
  get volumeCredits(): number {
    let result = 0;
    result += Math.max(this.performance.audience - 30, 0);
    return result;
  }
}
