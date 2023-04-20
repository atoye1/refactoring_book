import invoices from './invoices.json';
import plays from './plays.json';

import { statement } from './statement';
describe('statement test', () => {
  it('should print correct string', () => {
    const result = statement(invoices[0], plays);
    expect(result.trim()).toBe(
      `청구 내역 ( 고객명 : BigCo)
 hamlet : $400.00 (55석)
 As You Like It : $405.00 (35석)
 Othello : $420.00 (40석)
총액: $1,225.00
적립 포인트: 55점`.trim()
    );
  });
});
