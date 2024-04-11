import { getCartSum } from '@/utils/cart';

describe('Cart', () => {
  test('getCartSum', () => {
    const cart = [
      { id: 1, price: 100, name: 'item 1', quantity: 2 },
      { id: 2, price: 200, name: 'item 2', quantity: 1 },
    ];

    expect(getCartSum(cart)).toBe(300);
  });
});
