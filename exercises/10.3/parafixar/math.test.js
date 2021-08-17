const { somar, subtrair, multiplicar, dividir } = require('./math');

test("testar chamada da função subtrair", () => {
    math.subtrair = jest.fn();
  
    math.subtrair();
    expect(math.subtrair).toHaveBeenCalled();
  });

test('testar chamada da função multiplicar', () => {
    math.multiplicar = jest.fn().mockReturnValue(10);

    math.multiplicar();
    expect(math.multiplicar).toHaveBeenCalled();
    expect(math.multiplicar()).toBe(10);
});

test('Testa chamada, retorno e parâmetros passados para soma com entrada de dois valores', () => {
    const mockSomar = jest.spyOn(math, 'somar');

    mockSomar(2, 3);
    expect(mockSomar).toHaveBeenCalled();
    expect(mockSomar).toHaveBeenCalledTimes(1);
    expect(mockSomar).toHaveBeenCalledWith(2, 3);
    expect(mockSomar(2, 3)).resolves.toBe(5);
});