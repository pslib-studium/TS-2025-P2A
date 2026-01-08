import ITisknutelne from "./ITisknutelne"

class Faktura implements ITisknutelne {
    tiskni() {
        console.log("faktura");
    }
}

export default Faktura