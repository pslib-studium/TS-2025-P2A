abstract class Animal {
    protected _fedAmount: number = 0;

    public feed() {
        this._fedAmount++;
    }

    public get Amount(): number {
        return this._fedAmount;
    }
}

export default Animal;