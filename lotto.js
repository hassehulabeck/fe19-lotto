function getLottoRad(luckyNumbers = null, unluckyNumbers = null) {
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
    while (numbers.length < 7) {
        let slump = Math.ceil(Math.random() * 35);

        if (unluckyNumbers != null) {
            if (!unluckyNumbers.includes(slump)) {
                if (!numbers.includes(slump)) {
                    numbers.push(slump);
                }
            }
        }

    }
    // Sortera arrayen för bättre läsbarhet.
    numbers.sort(function (a, b) {
        return a - b;
    });
    return numbers;
}

// Anrop med flera turnummer som argument
// Samt olycksnummer som vi inte vill ha med.
var luckyNumbers = [3, 12, 33];
var unluckyNumbers = [7];
var lottorad = getLottoRad(luckyNumbers, unluckyNumbers);
console.log(lottorad);