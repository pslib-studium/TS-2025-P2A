console.log("Happy coding!");

const pole : number[] = [];
const pole2 = [];
const pole3 = new Array();

const pole4 = [1,2,3,4,5,6];
const pole5 = new Array(1,2,3,4);
const pole6 = new Array("adam", "boris", "cyril");

console.log(pole6[2]) // cyril
console.log(pole6[6])
pole6[7] = "daniel"
console.log(pole6[7])
console.log(pole6[6])
console.log(pole6);
console.table(pole6)

pole6.push("emil")
let x = pole6.pop()
console.log(x);
let y = pole6.shift();
console.log(y);
pole6.unshift("alice");
console.table(pole6);

console.log(pole6.length)
let z = pole6.join(",")
console.log(z);
let pole7 = z.split(",")
console.table(pole7)
let pole8 = pole6.reverse()
let pole9 = pole6.sort()
console.table(pole9)
console.log(pole9.indexOf("boris"))
console.log(pole9.indexOf("zoltan"))

let data = pole6.map((item, index) => item.length)
console.log(data)

let pole10 = ["jiri",...pole6, "xaver"]
console.log(pole10);
let pole11 = pole6.slice(2,4)
console.log(pole11)
let pole12 = pole6.splice(2,3)
console.log(pole12)
console.log(pole6)