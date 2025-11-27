import { Person } from "./models/person";

const p1 = new Person();
console.log("p1:", p1.firstName, p1.Age);

const p2 = new Person("Alice", 20);
console.log("p2:", p2.firstName, p2.Age);

p2.greet();
p1.firstName = "Otmar";
// p1.age = 10; // nelze - age je privátní
console.log("p1:", p1.firstName, p1.Age);
p2.celebrateBirthday(1);

console.log("Age přes getter:", p2.Age);
// p2.Age = 30;

p2.salary = 50000;
console.log("Salary:", p2.salary);

try {
    p2.salary = -200;
} catch (e) {
    console.error("Caught error:", (e as Error).message);
}

p2.internalCode = "   ABC123   ";

// hack:
console.log("Internal code uvnitř objektu:", (p2 as any)._internalCode);