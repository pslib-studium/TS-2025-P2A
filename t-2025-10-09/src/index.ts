function op(a: number, b?: number): number { // volitelný parametr
    if (b === undefined) b = 3;
    return a * b;
}

function op2(a: number, b: number | undefined): number {
    if (b === undefined) b = 3;
    return a * b;
}

function op3(a: number, b: number = 3): number { // implicitní parametr
    return a * b;
}

function op4(a: number): number; // přetížené funkce
function op4(a: string): number;
function op4(a: any) : number
{
    return a ** a;
}

// ------------------

type BinaryOperation = (a: number, b: number) => number;

function doIt(x: number, y: number, op: (u: number,v: number)=> number): number {
    return (op(x, y) + 1);
}

function doIt2(x: number, y: number, op: BinaryOperation): number {
    return (op(x, y) * 10);
}

console.log(doIt(2, 3, (i,j)=>(i + j))); // funkce lze předat jiné funkci jako parametr
// je to uložitelné do proměnné
console.log(doIt(2, 3, (i,j)=>(i * j)));
console.log(doIt2(2, 3, (i,j)=>(i * j)));