function power(x: number) : number {
    return x * x
}
function formatX(x: number) : void {
    console.log(">>>" + x);
}

function rng() : number {
    return Math.random() * 1000;
}

function sw(a: number, b: number ) :Array<number> {
    const ret = new Array<number>();
    ret[0] = b;
    ret[1] = a;
    return ret;
}

function xxxxxx(x: Array<number>): Array<number> {
    return x;
}

const aaa = function(x: number): number {
    return 2 * x;
}

const bbb = (x: number): number => {
    return 3 * x;
}

// this <-- nepoužívat (zatím)
// jednotkové testování - vitest

// vícepoužitelnost
// organizace kódu
// single responsibility
// rekurze (rekurence)

// n! = n * (ń - 1) * (n - 2) * .... * 2;
// n! = n * (n-1)!

// rekurentní faktorial - muze vycerpat systemove prostredky velmi rychle
// je srozumitelny, pochopitelny a citelny
function fact(x: number): number {
    x = Math.abs(Math.trunc(x)) // x je kladné a celé
    console.log(x);
    if (x == 0) return 0;
    if (x == 1) return 1;
    if (x == 2) return 2;
    return x * fact(x - 1);
}

function fact2(x: number): number {
    let i = x;
    while(x > 0) {
        x = i * x;
        i = i - 1;
        console.log(x);
    }
    return x;
}

const a = fact(5);
console.log(a);
const b = fact2(5);
console.log(b);

// signatura
// ošetříme vstupy
// tělo funkce
// vrácení výstupu