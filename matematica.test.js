const { subscribe } = require("diagnostics_channel")
const { describe } = require("yargs")
const {soma, multiplicacao, fatorial} = require("./matematica")

describe('Teste funções básicas', ()=> {
    test('A soma de 1 + 1 deve ser 2', () => {
        expect(soma(1, 1)).toBe(2)
    })
    test('A multiplicação de 0 e 1 deve ser 0', () => {
        expect(multiplicacao(0, 1)).toBe(0)
    })
    test('A multiplicação de 3 e 3 deve ser 0', () => {
        expect(multiplicacao(3, 3)).toBe(9)
    })
    test('O fatorial de 0 deve ser 1', () => {
        expect(fatorial(0)).toBe(1)
    })
    test('O fatorial de 5 deve ser 120', () => {
        expect(fatorial(5)).toBe(120)
    })
    
})

    test('A soma de 1 + 1 deve ser 2', () => {
        expect(soma(1, 1)).toBe(2)
    })
    test('A multiplicação de 0 e 1 deve ser 0', () => {
        expect(multiplicacao(0, 1)).toBe(0)
    })
    test('A multiplicação de 3 e 3 deve ser 0', () => {
        expect(multiplicacao(3, 3)).toBe(9)
    })
    test('O fatorial de 0 deve ser 1', () => {
        expect(fatorial(0)).toBe(1)
    })
    test('O fatorial de 5 deve ser 120', () => {
        expect(fatorial(5)).toBe(120)
    })



