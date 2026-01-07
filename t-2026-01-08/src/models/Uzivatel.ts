abstract class Uzivatel {
  constructor(public jmeno: string) {}

  abstract vypisInfo(): void;
}

export default Uzivatel;