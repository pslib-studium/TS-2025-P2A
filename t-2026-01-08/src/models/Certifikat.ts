import ITisknutelne from "./ITisknutelne"

class Certifikat implements ITisknutelne {
    tiskni() {
        console.log("cert");
    }
    
    zkontroluj(): boolean {
        console.log("check");
        return true;
    }
}

export default Certifikat