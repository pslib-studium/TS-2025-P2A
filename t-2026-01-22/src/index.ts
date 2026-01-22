class ContainerNumber {
    private _value: number;

    constructor(value: number) {
        this._value = value;
    }

    public getValue(): number {
        return this._value;
    }

    public setValue(val: number) {
        this._value = val;
    }
}

class ContainerBoolean {
    private _value: boolean;

    constructor(value: boolean) {
        this._value = value;
    }

    public getValue(): boolean {
        return this._value;
    }

    public setValue(val: boolean) {
        this._value = val;
    }
}

class ContainerString {
    private _value: string;

    constructor(value: string) {
        this._value = value;
    }

    public getValue(): string {
        return this._value;
    }
}

class Container<T> { // zástupný datový typ - generika
    private _value: T;

    constructor(value: T) {
        this._value = value;
    }

    public getValue(): T {
        return this._value;
    }

    public setValue(val: T) {
        this._value = val;
    }
}

interface IEnumerable<T> {
    value: T;
    getValue() : T;
    next(): void;
    reset(): void;
}

class Converter<Tin, Tout> {
    public Convert(input: Tin) : Tout {
        //return 
    }
}

function enlarge<T>(value: T): T {
    return (value);
}

function format<T extends Container<number>>(x: T): string {
    return String(x.getValue());
}

function format2<T = number>(x: T): string {
    return String(x);
}

console.log(format2(8));

let x = new Container<number>(10);
console.log(x.getValue());