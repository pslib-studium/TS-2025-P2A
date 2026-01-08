abstract class Uzivatel {
  constructor(public jmeno: string) {}

  vypisInfo() {
    console.log("Default");
  }

  doSomething() {
    console.log("SMTNG");
  }
}

export default Uzivatel;