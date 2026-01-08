import Uzivatel from "./Uzivatel"

class Student extends Uzivatel{
    constructor(public jmeno: string) {
        super(jmeno);
    }
  
    vypisInfo() {
        super.vypisInfo();
        //console.log("Student");
    }

    doStudy() {
        console.log("Studuji");
    }
  }
  
  export default Student;