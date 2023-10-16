import Item from '../item.js';

describe('Testes dos itens', () => {
  it('Deve ter 3 campos: nome, valor e quantidade', () => {
    const item = new Item('Beterraba', 2.5, 10);

    expect(item.name).toBe('Beterraba');
    expect(item.value).toBe(2.5);
    expect(item.quantity).toBe(10);
  });

  it('Deve ter o preço calculado de acordo com a quantidade', () => {
    const item = new Item('Batata', 0.1, 3);

    expect(item.itemTotalValue()).toBeCloseTo(0.3); // toBeCloseTo para tratar valores decimais
  });
});