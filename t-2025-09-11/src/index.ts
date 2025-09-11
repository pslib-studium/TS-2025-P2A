let a = 3;
let b = 0;
if (a == 0) console.log("To nemuzes"); // předcházení chybám
let vysledek; 
console.log(a);
try // chráněný blok
{
    let c = a / b;
    vysledek = JSON.parse("{bad {{coding}");
    console.log("xyz"); // neproběhne
    // uživatel něco zadává
    // externí data
    // závislost na externím zařízení
}
catch (err) // výjimka zachytává chybu
{
    if (err instanceof TypeError) {
        console.log("Špatný typ");
    }
    vysledek = "";
    console.error("Nejde delit nulou!" + err);
}
finally
{
    console.log("hotovo"); // proběhne vždy - při success i failure
}
// Error, SyntaxError, TypeError, ReferenceError, RangeError