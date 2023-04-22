import { statement, htmlStatement } from './statement';
import { writeFileSync } from 'fs';
import invoices from './data/invoices.json';
import plays from './data/plays.json';

const result = statement(invoices[0], plays);
console.log(result);

const html = htmlStatement(invoices[0], plays);
writeFileSync('result.html', html);
