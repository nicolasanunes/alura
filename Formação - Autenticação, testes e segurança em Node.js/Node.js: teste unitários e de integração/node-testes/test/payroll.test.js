import { sumExtraHours, calculateDiscounts } from '../index';

describe('Testes dos cálculos da folha de pagamento', () => {
  it('Deve retornar a soma das horas extras', () => {
    const expected = 2500;
    const returned = sumExtraHours(2000, 500);

    expect(returned).toBe(expected);
  });

  it('Deve descontar o valor do salário', () => {
    const expected = 2300;
    const returned = calculateDiscounts(2500, 200);

    expect(returned).toBe(expected);
  });
});
