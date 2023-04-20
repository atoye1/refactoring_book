import invoices from './invoices.json';
import plays from './plays.json';

import { statement } from './statement';
describe('statement test', () => {
  it('should print correct string', () => {
    const result = statement(invoices[0], plays);
    const correct_result = `청구 내역 ( 고객명 : BigCo)
 hamlet : $650.00 (55석)
 As You Like It : $580.00 (35석)
 Othello : $500.00 (40석)
총액: $1,730.00
적립 포인트: 47점`;
    expect(result.trim()).toBe(correct_result);
  });
});
