import Uzivatel from "./Uzivatel"

class Ucitel extends Uzivatel{
    constructor(public jmeno: string) {
        super(jmeno);
    }
  
    vypisInfo() {
        console.log("Ucitel");
    }
  }
  
  export default Ucitel;