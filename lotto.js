function getLottoRad(luckyNumber = null) {
    var numbers = [];
    var antal = 7;
    /* 
    Ifall vi skickar med ett turnummer som argument, 
    så behöver vi inte slumpa fram 7 nummer, utan bara 6. 
    Därför har vi variabeln antal. 
    */
    if (luckyNumber != null) {
        antal = 6;
        numbers.push(luckyNumber);
    }
    for (i = 0; i < antal; i++) {
        let slump = Math.ceil(Math.random() * 35);
        if (numbers.includes(slump)) {
            i--; // Manuellt minska iteratorn i för att en iteration har "gått förlorad", då vi slumpade fram ett tal som redan fanns.
        } else {
            numbers.push(slump);
        }
    }
    // Sortera arrayen för bättre läsbarhet.
    numbers.sort(function (a, b) {
        return a - b;
    });
    return numbers;
}

// Anrop med turnummer som argument
var lottorad = getLottoRad(12);
console.log(lottorad);