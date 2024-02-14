import { Card } from './card';
import { v4 } from 'uuid';

abstract class Entity {
  public id: string | null = null;

  protected constructor(id?: string) {
    if (!id) {
      this.id = v4();
    }
  }
}

abstract class User extends Entity {
  constructor(
    public name: string,
    public surname: string,
    id?: string,
  ) {
    super(id);
  }
}

export class Customer extends User {
  card: Card;
  status: CustomerStatus;
}

export class Employee extends User {
  permissions: string[];
  status: EmployeeStatus;
}

enum CustomerStatus {
  Active,
  BlockedForRysowanieSiurasówWKsiazkach,
  Inactive,
  GimiMoney,
}

enum EmployeeStatus {
  L4,
  Worknk,
}
