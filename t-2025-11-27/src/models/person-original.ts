export class Person {
    // === Atributy ===
    public firstName: string;
    private age: number;         // Přístupné jen uvnitř třídy
    private _salary: number = 0; // Pro ukázku getter/setter páru

    // === Konstruktor bez parametrů ===
    constructor();
    // === Konstruktor s parametry ===
    constructor(firstName: string, age: number);
    constructor(firstName?: string, age?: number) {
        this.firstName = firstName ?? "Unknown";
        this.age = age ?? 0;
    }

    // === Metoda bez parametru ===
    public greet(): void {
        console.log(`Hello, I'm ${this.firstName}.`);
    }

    // === Metoda s parametrem ===
    public celebrateBirthday(years: number): void {
        this.age += years;
        console.log(`New age: ${this.age}`);
    }

    // === Getter jen pro čtení ===
    public get Age(): number {
        return this.age;
    }

    // === Getter + setter plně přístupný ===
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