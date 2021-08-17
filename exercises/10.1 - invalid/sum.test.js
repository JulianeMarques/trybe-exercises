const sum = require('./sum');

describe('Requisito 1', () => {
    it('Teste se o retorno de sum(4, 5) é 9', () => {
        expected(sum(4, 5)).toBe(9);
    });
});