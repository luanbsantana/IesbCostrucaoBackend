function somar(numero01, numero02) {
    return numero01 + numero02
}
function subtrair(numero01, numero02) {
    return numero01 - numero02
}
function multiplicacao(numero01, numero02) {
    return numero01 * numero02
}
function divisao(numero01, numero02) {
    return numero01 / numero02
}
function quadrado(numero01) {
    return Math.pow(numero01, 2)
}
function raizQuadrada(numero01) {
    return Math.sqrt(numero01)
}
module.exports = {
    somar,
    subtrair,
    multiplicacao,
    divisao,
    quadrado,
    raizQuadrada
}