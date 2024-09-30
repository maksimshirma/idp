import { ISalaryTracker, SalaryInfo } from "../interfaces/SalaryTracker";
import { IStrategy } from "../interfaces/Strategy";
import { IStatement } from '../interfaces/Statement';
import { IUser } from '../interfaces/User';

export class SalaryTracker implements ISalaryTracker {
  private statement: IStatement;
  private users: IUser[];
  private strategy: IStrategy;
  
  constructor(strategy: IStrategy, statement: IStatement, users: IUser[]) {
    this.statement = statement;
    this.users = users;
    this.strategy = strategy;
  }

  getSalary(): SalaryInfo[] {
    return this.users.map((user) => ({
        id: user.id,
        name: user.name,
        rate: user.rate,
        salary: this.strategy.calculateSalary(this.statement[user.id].days),
      })
    );
  }
}