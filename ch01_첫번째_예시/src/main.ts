import { statement } from './statement';
import invoices from './invoices.json';
import plays from './plays.json';

const result = statement(invoices[0], plays);
console.log(result);
