import {
  Invoice,
  Play,
  Performance,
  Plays,
  StatementData,
  EnrichedPerformance,
} from './types';

import { createPerformanceCalculator } from './calculators';

export default function createStatementData(invoice: Invoice, plays: Plays) {
  const result = {} as StatementData;
  result.customer = invoice.customer;
  result.performances = invoice.performances.map(enrichPerformance);
  result.totalAmount = totalAmount(result);
  result.totalVolumeCredits = totalVolumeCredits(result);
  return result;

  function enrichPerformance(aPerformance: Performance) {
    const calculator = createPerformanceCalculator(
      aPerformance,
      playFor(aPerformance)
    );
    const result = Object.assign({}, aPerformance) as EnrichedPerformance;
    result.play = calculator.play;
    result.amount = calculator.amount;
    result.volumsCredits = calculator.volumeCredits;
    return result;
  }

  function playFor(aPerformance: Performance): Play {
    return plays[aPerformance.playID];
  }

  function totalAmount(data: StatementData) {
    return data.performances.reduce((total, p) => total + p.amount, 0);
  }

  function totalVolumeCredits(data: StatementData) {
    return data.performances.reduce((total, p) => total + p.volumsCredits, 0);
  }
}
