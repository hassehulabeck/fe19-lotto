function getLottoRad(luckyNumbers = null, unluckyNumbers = null) {
    var numbers = [];
    var antal = 7;
    /* 
    Ifall vi skickar med ett eller flera turnummer som argument, 
    så behöver vi inte slumpa fram 7 nummer, utan färre. 
    Därför har vi variabeln antal. 
    */


    if (luckyNumbers != null) {
        // Kolla att argumentet är av typen array, annars returnera en varning.
        if (!Array.isArray(luckyNumbers)) {
            throw new TypeError("Du måste lägga dina turnummer i en array.")
        }

        antal = 7 - luckyNumbers.length;
        /*
        Använd spread-operatorn för att kopiera en array till en annan.
        */
        numbers = [...luckyNumbers];
    }
    while (numbers.length < 7) {
        let slump = Math.ceil(Math.random() * 35);

        if (unluckyNumbers != null) {
            // Kolla så att argumentets typ uppfyller våra krav.
            if (!Array.isArray(unluckyNumbers)) {
                throw new TypeError("Du måste lägga dina olycksnummer i en array.")
            }

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

function check(correctNumbers) {
    var count = 0;
    // Loopa igenom den rätta raden, och kolla om det återfinns i lottorad.
    correctNumbers.forEach(function (nummer) {
        if (lottorad.includes(nummer)) {
            count++;
        }
    });
    return count;
}

// Anrop med flera turnummer som argument
// Samt olycksnummer som vi inte vill ha med.
var luckyNumbers = [3, 12, 33];
var unluckyNumbers = [7];
var lottorad = getLottoRad(luckyNumbers, unluckyNumbers);
try {
    console.log(lottorad);
} catch (err) {
    // För att se hur felhanteringen fungerar, ändra typ på lucky- eller unluckyNumbers.
    console.error(err.message);
}

// Kolla hur många rätt det blev.
var correctNumbers = [2, 14, 9, 11, 24, 1, 29];
console.log(check(correctNumbers));