function getLottoRad() {
    var numbers = [];
    for (i = 0; i < 7; i++) {
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

var lottorad = getLottoRad();
console.log(lottorad);