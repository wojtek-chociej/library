import { CustomersState } from './customers-state';

describe('CustomersState', () => {
  test('should create its instance', () => {
    expect(CustomersState.instance).toBeTruthy();
  });

  test('should be singleton', () => {
    const s1 = CustomersState.instance;
    const s2 = CustomersState.instance;
    expect(s1 === s2).toEqual(true);
  });

  describe('addCustomer', () => {
    test('should push customer to array', () => {
      expect(1).toEqual(true);
    });
  });
});
