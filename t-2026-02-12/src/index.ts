const ted = new Date();
console.log(ted);
console.log(ted.getTime());
console.log(ted.toString());
console.log(ted.toUTCString());
console.log(ted.toISOString());
console.log(ted.toLocaleDateString());
console.log(ted.toLocaleTimeString());
console.log(ted.toLocaleString());
console.log(ted.toISOString());

console.log(ted.getDay());
console.log(ted.getMonth()); // začínají 0 - protože 1995 byl hezký rok
console.log(ted.getDate());
console.log(ted.getFullYear());

const a = new Date(2026,1,12); // locale - ?????
console.log(a);
const b = new Date("2026-02-12"); // UTC
console.log(b);

const c = new Date("2026-02-30");
console.log(c);

const zac = new Date("2026-02-12");
const kon = new Date("2026-02-13");
const dif = kon.getTime() - zac.getTime();
console.log(dif / (1000 * 60 * 60 * 24));
const next = zac.getTime() + (1000 * 60 * 60 * 24);
const day = new Date();
day.setDate(zac.getDate() + 5);
console.log(day);

const now = new Date();
console.log(now);
const now2 = Date.now();
console.log(now2);

const zero = 0;
const dateX = new Date(zero);
console.log(dateX);