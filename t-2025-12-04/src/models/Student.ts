import Human from "./Human"
import IStudious from "../interfaces/IStudious"

class Student extends Human implements IStudious {

    private _className: string = "";

    public constructor(fn: string, ln: string, cl: string) {
        super(fn, ln);
        this._className = cl;
        this.gender = "other";
    }

    public study(): boolean {
        return true;
    }

    public results(): number {
        return 3;
    }
}

export default Student;