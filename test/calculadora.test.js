const { somarDoisNumeros } = require('../src/calculadora');
const { expect } = require('chai');

describe('Teste da Função de Soma', function () {
    it('A função deve ser capaz de somar dois números zerados', function () {
        // Coleta o resultado da função
        const resultadoDaSoma = somarDoisNumeros(0, 0);

        // Compara o resultado com o valor esperado
        expect(resultadoDaSoma).to.equal(0); 
    });

    it('A função deve ser capaz de somar dois números negativos', function() {
        // Coleta o resultado da função
        const resultadoDaSoma = somarDoisNumeros(-15, -20);

        // Compara o resultado com o valor esperado
        expect(resultadoDaSoma).to.equal(-35); 

    });
})