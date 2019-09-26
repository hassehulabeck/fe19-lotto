function getLottoRad() {
    var numbers = [];
    for (i = 0; i < 7; i++) {
        let slump = Math.floor(Math.random() * 35);
        numbers.push(slump);
    }
    return numbers;
}

var lottorad = getLottoRad();