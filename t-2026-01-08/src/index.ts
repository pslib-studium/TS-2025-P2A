import Uzivatel from "./models/Uzivatel";
import ITisknutelne from "./models/ITisknutelne";

// Runtime polymorphism example
const uzivatele: Uzivatel[] = [
  //new Student("Eva"),
  //new Ucitel("Petr"),
];

for (const u of uzivatele) {
  u.vypisInfo(); // Volá správnou metodu podle konkrétní třídy
}

// Interface example
/*
function vytiskni(t: Tisknutelne) {
  t.tiskni();
}

vytiskni(new Faktura());
vytiskni(new Certifikat());
*/

// Function overloading example
function pozdrav(jmeno: string): string;
function pozdrav(pocet: number): string;
function pozdrav(vstup: any): string {
  if (typeof vstup === "string") {
    return `Ahoj, ${vstup}!`;
  } else {
    return `Zdravím ${vstup} lidí!`;
  }
}

console.log(pozdrav("Martin"));
console.log(pozdrav(5));