import {type gender} from "../types/Gender"

export class Human {
    private _firstName: string;
    private _lastName: string;
    public NickName: string = "";
    protected gender: gender = "unknown"; // neveřejný, ale dědí se (je dostupný z potomků)

    public constructor(fn: string, ln: string) {
        this._firstName = fn;
        this._lastName = ln;
    }

    public get FirstName(): string {
        return this._firstName;
    }

    public set FirstName(value: string) {
        if (value !== "Zoltan") {
            this._firstName = value;
        }
        else
        {
            throw Error("Zoltan is not a real name!!");
        }
    }

    public get Name(): string {
        return this.formatName();
    }

    // pomocná metoda - nechceme, aby byla dostupná mimo třídu
    private formatName() : string {
        return (this.FirstName  + " " + this._lastName);
    }
}

export default Human;