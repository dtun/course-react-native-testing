import { getProducts } from '@/utils/api';

describe('Api', () => {
  // This test is skipped because it calls the api
  test.skip('getProducts', async () => {
    const products = await getProducts();

    expect(products.length).toBe(20);
  });

  test('rejects the promise', () => {
    global.fetch = jest.fn(() => Promise.reject('API is down'));

    expect(getProducts()).rejects.toEqual('API is down');
  });

  // No need to test this, but it's here for reference
  // Not sure how this worked for the tutorial author
  test.skip('calls the right endpoint', async () => {
    const fetchMock = global.fetch as jest.MockedFunction<typeof global.fetch>;

    // @ts-ignore
    fetchMock.mockResolvedValueOnce({
      json: jest.fn().mockResolvedValue([]),
    });

    await getProducts();

    expect(fetchMock).toHaveBeenCalledWith('https://api.example.com/products');
  });

  test('returns the right data', async () => {
    const fakeProducts = [
      {
        id: 1,
        title: 'Test Product',
        price: 100,
      },
    ];

    global.fetch = jest.fn().mockImplementationOnce(() => {
      return new Promise((res) => res({ json: () => fakeProducts }));
    });

    const products = await getProducts();

    expect(products).toEqual(fakeProducts);
  });
});
