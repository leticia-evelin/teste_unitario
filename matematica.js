function soma(a, b){
    return a + b
}
function multiplicacao (a, b){
    return a * b
}
function subratrair(a,b){
    return a - b
}

function fatorial (n){
    return n <= 1 ? 1 : n * fatorial(n-1)
}

module.exports = {
    soma,
    multiplicacao,
    fatorial
}
