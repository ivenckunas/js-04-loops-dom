"use strict";
console.group(`Debugger`);
let sum = 0;

for (let i = 0; i < 6; i++) {
  sum += i;
  console.log(`sis ciklas yra ${i}, bendra suma = ${sum} `);
}
console.log(`Bendra suma po visko = ${sum}`);
// debugger;
if (sum === 15) {
  console.log("penkiolika");
} else {
  console.log("nepenkiolika");
}
console.groupEnd();

console.group(`Continue`);
// atspausdinti skaicius  10-20, bet praleisti 15

for (let i = 10; i <= 20; i++) {
  if (i === 15) {
    // debugger;
    //   skipina sita skaiciu ir tesia funkcija toliau >>> i++ i step dali
    continue;
  }
  console.log(`Skaicius ${i}`);
}
console.groupEnd();
