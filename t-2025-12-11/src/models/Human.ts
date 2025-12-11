class Human {
    private _name: string;
    private static _counter: number = 0;

    public constructor(name: string) {
        this._name = name;
        Human._counter++;
    }

    get Instances() {
        return Human._counter;
    }

    get Name() {
        return this._name;
    }

    set Name(value: string) {
        if (value.length > 2) {
            this._name = value;
        }
    }

    getName(): string {
        return this._name;
    }
    
    setName(value: string) : void {
        if (value.length > 2) {
            this._name = value;
        }
    }

    static get InstanceCounter(): number {
        return Human._counter;
    }
}

export default Human;