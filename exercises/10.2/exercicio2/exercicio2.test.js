/* // O código a seguir simula uma chamada ao banco de dados para buscar usuários. O resultado dessa busca é uma Promise , que é utilizada pelo método getUserName .
// Utilizando a sintaxe de Promise , faça um teste que verifique o resultado da função getUserName para o caso em que o usuário é encontrado, e também um teste para o caso em que o usuário não é encontrado.
Dica: Veja os dados falsos utilizados no banco de dados, disponíveis na variável users , para saber quais IDs existem. */

const { getUserName } = require('./exercicio2');

describe('UserName', () => {
    describe('UserName exists', () => {
        it('caso em que o usuário é encontrado', () => {
            expect.assertions(1);
            return getUserName(4).then(data => expect(data).toEqual('Mark'));
        });
    });
    describe('UserName does not exist', () => {
        it('caso em que o usuário NAO é encontrado', () => {
            expect.assertions(1);
            return getUserName(2).catch(error => expect(error).toEqual({ error: 'User with ' + 2 + ' not found.' })
            );
        });
    });
});