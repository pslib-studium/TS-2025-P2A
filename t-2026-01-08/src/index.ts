import Uzivatel from "./models/Uzivatel";
import Student from "./models/Student"
import Ucitel from "./models/Ucitel"
import ITisknutelne from "./models/ITisknutelne";
import Faktura from "./models/Faktura";
import Certifikat from "./models/Certifikat";

// Runtime polymorphism example
const uzivatele: Uzivatel[] = [ // 0 - Uzivatel, 1 - Student
  //new Uzivatel("Xaver"), // Default
  new Student("Eva"), // Student
  new Ucitel("Petr"), // Ucitel
];

// v C# (a skoro vsech C jazycich) je vychozi chovani volani metody podle vnejsiho typu, 
// v TS volame podle skutecneho vnitrniho typu - coz je castejsi

for (const u of uzivatele) {
  u.vypisInfo(); // Volá správnou metodu podle konkrétní třídy
  u.doSomething();
}

// Interface polymorphism example
function vytiskni(t: ITisknutelne) {
  t.tiskni();
}

vytiskni(new Faktura());
vytiskni(new Certifikat());
/*
let tisky : ITisknutelne[] = (
  new Faktura(),
  new Certifikat()
);
*/

// Function overloading example
function pozdrav(jmeno: string): string;
function pozdrav(pocet: number): string;
// function pozdrav(pocet: number | string): string;
function pozdrav(vstup: any): string {
  if (typeof vstup === "string") {
    return `Ahoj, ${vstup}!`;
  } else {
    return `Zdravím ${vstup} lidí!`;
  }
}

console.log(pozdrav("Martin"));
console.log(pozdrav(5));