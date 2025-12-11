import Utils from "./models/Utils"
import Human from "./models/Human"
import Cat from "./models/Cat"
import Dog from "./models/Dog"
import Animal from "./models/Animal"
/*
let u = new Utils(); // není potřeba
console.log(u.Add(4,4));
*/
console.log(Utils.Add(4,4));

let h1 = new Human("Alois");
let h2 = new Human("Beáta");
h1.Name = "Alfons"; // vlastnosti get/set vypadají lépe než metody
h2.setName("Běta");
console.log(h1.Name);
console.log(h2.getName());

console.log(Human.InstanceCounter);

let micka = new Cat();
let orech = new Dog();

micka.doSound();
orech.doSound();
micka.feed(); // je odvozena z Animal
console.log(micka.Amount);
console.log(orech.Amount);

//let a = new Animal(); // nelze - je abstract
// Animal je společný předek pro Cat a Dog, ale sám o sobě nedává smysl jako instance
