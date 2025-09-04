import readlineSync from "readline-sync";

//const userName = "světe, jak se máš?";
//console.log(`Ahoj, ${userName}!`);

function askNumber(prompt: string, min: number = 0, max: number = 10): number {
  while (true) {
    const input = readlineSync.question(
      `${prompt} ${min} - ${max}: `
    );
    const num = Number(input);

    if (Number.isInteger(num) && num >= min && num <= max) {
      return num;
    }
    console.log("Neplatná hodnota, zkuste to znovu.");
  }
}

const number = askNumber("Zadejte cislo mezi", 0, 10);
console.log(`Zadal jste cislo: ${number} dvojnásobek této hodnoty je ${number * 2}`);