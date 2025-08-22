function calculadoraNotaA1(exercicios, trabalho, prova) {
    return exercicios + trabalho + prova;
}

function calculadoraNotaA2(exercicios, trabalho, prova) {
    return exercicios + trabalho + prova;
}

function calculadoraNotaFinal(notaA1, notaA2){
    return (notaA1 * 0.4) + (notaA2 * 0.6);
}

module.exports = {
    calculadoraNotaA1,
    calculadoraNotaA2,
    calculadoraNotaFinal
}