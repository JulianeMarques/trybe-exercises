const { obj1, obj2, obj3 } = require('./doisObjetos');

describe('Requisito 5', () => {
    it('Compare obj1 e obj2', () => {
        expect(obj1).toEqual(obj2)
    });
    it('Compara obj2 e obj3', () => {
        expect(obj2).not.toEqual(obj3)
    });
    it('Compara obj1 e obj3', () => {
        expect(obj1).not.toEqual(obj3)
    });
});