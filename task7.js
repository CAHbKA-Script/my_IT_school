let credit = 2000000;
let years = 5;
let p = 10;
let Pereplata = 0;
let annualFee = credit / years;

for (let i = 0; i < years; i++) {
    Pereplata += credit * p / 100;
    credit -= annualFee;
}

console.log(`\nTask 7:
    Переплата: ${Pereplata} тыс.руб.`);