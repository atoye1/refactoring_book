import { statement, htmlStatement } from './statement';
import { writeFileSync } from 'fs';
import invoices from './invoices.json';
import plays from './plays.json';

const result = statement(invoices[0], plays);
console.log(result);

const html = htmlStatement(invoices[0], plays);
writeFileSync('result.html', html);
