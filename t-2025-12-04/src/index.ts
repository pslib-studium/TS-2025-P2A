import Student from "./models/Student"
import IStudious from "./interfaces/IStudious";

let tonda: IStudious = new Student("Antonín","Pometlo","P2A");
let students: IStudious[] = Array<IStudious>();
console.log(tonda.results());
console.log(tonda.Name);