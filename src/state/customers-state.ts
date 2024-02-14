import { Customer } from '../class/user';

export class CustomersState {
  #customers: Customer[] = [];
  static #instance: CustomersState;

  private constructor() {}

  public static get instance(): CustomersState {
    if (!CustomersState.#instance) {
      CustomersState.#instance = new CustomersState();
    }
    return CustomersState.#instance;
  }

  public get customers(): Customer[] {
    return this.#customers;
  }

  public addCustomer(customer: Customer) {
    this.#customers.push(customer);
  }
}
