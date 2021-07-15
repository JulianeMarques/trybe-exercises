const { getUserName , findUserById } = require('./exercicio3');

describe('userName async/await', () => {
    describe('usuario encontrado', () => {
        it('returns the user name', async () => {
            expect.assertions(1);
            const data = await getUserName(4);
            expect(data).toEqual('Mark');
        });
    });
    describe('usuario NAO encontrado', () => {
        it('returns an error', async () => {
            expect.assertions(1);
            try {
                await getUserName(2);
            } catch (error) {
                expect(error).toEqual({ error: 'User with 2 not found.' });
            }
        });
    });
});