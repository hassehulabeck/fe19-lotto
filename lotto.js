function getLottoRad(luckyNumbers = null) {
    var numbers = [];
    var antal = 7;
    /* 
    Ifall vi skickar med ett eller flera turnummer som argument, 
    så behöver vi inte slumpa fram 7 nummer, utan färre. 
    Därför har vi variabeln antal. 
    */
    if (luckyNumbers != null) {
        antal = 7 - luckyNumbers.length;
        /*
        Använd spread-operatorn för att kopiera en array till en annan.
        */
        numbers = [...luckyNumbers];
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

// Anrop med flera turnummer som argument
var turnummer = [3, 12, 33];
var lottorad = getLottoRad(turnummer);
console.log(lottorad);