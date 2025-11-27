export class Person {
    public firstName: string = "Alois" // veřejný atribut
    private age: number; // privátní atribut
    private _salary: number = 0; // Pro ukázku getter/setter páru

  // === Konstruktor bez parametrů ===
    constructor();
    // === Konstruktor s parametry ===
    constructor(firstName: string, age: number); // přetížené konstruktory
    constructor(firstName?: string, age: number = 0) { // konstruktor
        this.firstName = firstName ?? "Unknown";
        this.age = age;
    }

    public greet(): void { // metoda
        console.log(`Hello, I'm ${this.firstName}.`);
    }

    public celebrateBirthday(years: number): void { // metoda s parametrem
        this.age += years;
        console.log(`New age: ${this.age}`);
    }

    // === Getter jen pro čtení ===
    public get Age(): number {  // vlastnost
        if (this.age < 0 ) return 0;
        return this.age;
    }

    public get salary(): number {
        return this._salary;
    }

    public set salary(value: number) {
        if (value < 0) {
            throw new Error("Salary cannot be negative.");
        }
        this._salary = value;
    }

    // === Pouze setter (např. logika bez čtení) ===
    private _internalCode: string = "";
    
    public set internalCode(value: string) {
        this._internalCode = value.trim();
    }
}

export default Person;