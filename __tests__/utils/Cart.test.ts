import { getCartSum, loadCart, storeCart } from '@/utils/cart';
import AsyncStorage from '@react-native-async-storage/async-storage';

jest.mock('@react-native-async-storage/async-storage', () => {
  return {
    getItem: jest.fn(),
    setItem: jest.fn(),
  };
});

describe('Cart', () => {
  test('getCartSum', () => {
    const cart = [
      { id: 1, price: 100, name: 'item 1', quantity: 2 },
      { id: 2, price: 200, name: 'item 2', quantity: 1 },
    ];

    expect(getCartSum(cart)).toBe(300);
  });

  test('returns the correct cart item', () => {
    const cart = [
      { id: 1, price: 100, name: 'item 1', quantity: 2 },
      { id: 2, price: 200, name: 'item 2', quantity: 1 },
    ];

    storeCart(cart);

    expect(AsyncStorage.setItem).toHaveBeenCalledWith(
      'cart',
      JSON.stringify(cart)
    );

    loadCart();

    expect(AsyncStorage.getItem).toHaveBeenCalledTimes(1);
  });

  test('loads the correct item', async () => {
    const cart = [
      { id: 1, price: 100, name: 'item 1', quantity: 2 },
      { id: 2, price: 200, name: 'item 2', quantity: 1 },
    ];

    AsyncStorage.getItem = jest
      .fn()
      .mockResolvedValueOnce(JSON.stringify(cart));

    const result = await loadCart();

    expect(result).toMatchObject(cart);
  });
});
