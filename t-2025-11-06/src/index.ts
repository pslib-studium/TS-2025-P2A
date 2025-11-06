let s1 = "Ahoj"
let s2 = "světe"
let s3 = s1 + s2
console.log(s3);
console.log(`XXXXX ${s3}`); // Alt+7
let s4 = "absd efgh ijk"
let x4 = Array.from(s4)
console.log(x4);
console.log(s4[2]);

console.log(s4.slice(1,3));
console.log(s4.replace(" ","-"));

const splitted = s4.split(" ")
console.log(splitted);
const joined = splitted.join("/");
console.log(joined);

const text = "Malý Daniel šel do Prahy";
console.log(text.toUpperCase());
console.log(text.toLowerCase());

const text2 = " třináct slonů        "
console.log("->" + text2.trim() + "<-")
// trimStart, trimEnd

console.log(text.startsWith("Malý"));
// endsWith
console.log(text.indexOf("Daniel"));
console.log(text.indexOf("X"));

function removeDiacritics(text: string): string {
  return text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

console.log(removeDiacritics(text)); 