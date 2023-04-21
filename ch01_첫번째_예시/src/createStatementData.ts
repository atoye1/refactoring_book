import {
  Invoice,
  Play,
  Performance,
  Plays,
  StatementData,
  EnrichedPerformance,
} from './types';

class performanceCalculator {
  performance: Performance;
  play: Play;
  constructor(aPerformance: Performance, aPlay: Play) {
    this.performance = aPerformance;
    this.play = aPlay;
  }
}

export default function createStatementData(invoice: Invoice, plays: Plays) {
  const result = {} as StatementData;
  result.customer = invoice.customer;
  result.performances = invoice.performances.map(enrichPerformance);
  result.totalAmount = totalAmount(result);
  result.totalVolumeCredits = totalVolumeCredits(result);
  return result;

  function enrichPerformance(aPerformance: Performance) {
    const calculator = new performanceCalculator(
      aPerformance,
      playFor(aPerformance)
    );
    const result = Object.assign({}, aPerformance) as EnrichedPerformance;
    result.play = calculator.play;
    result.amount = amountFor(result);
    result.volumsCredits = volumeCreditsFor(result);
    return result;
  }

  function playFor(aPerformance: Performance): Play {
    return plays[aPerformance.playID];
  }

  function amountFor(aPerformance: EnrichedPerformance): number {
    let result = 0;

    switch (aPerformance.play.type) {
      case 'tragedy':
        result = 40000;
        if (aPerformance.audience > 30) {
          result += 1000 * (aPerformance.audience - 30);
        }
        break;
      case 'comedy':
        result = 30000;
        if (aPerformance.audience > 20) {
          result += 10000 + 500 * (aPerformance.audience - 20);
        }
        result += 300 * aPerformance.audience;
        break;
      default:
        throw new Error(`알 수 없는 장르: ${aPerformance.play.type}`);
    }
    return result;
  }

  function volumeCreditsFor(aPerformance: EnrichedPerformance): number {
    let result = 0;
    result += Math.max(aPerformance.audience - 30, 0);
    if ('comedy' == aPerformance.play.type)
      result += Math.floor(aPerformance.audience / 5);
    return result;
  }

  function totalAmount(data: StatementData) {
    return data.performances.reduce((total, p) => total + p.amount, 0);
  }

  function totalVolumeCredits(data: StatementData) {
    return data.performances.reduce((total, p) => total + p.volumsCredits, 0);
  }
}
