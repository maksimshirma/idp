import { IStrategy } from "./Strategy";
import { IUser } from "./User";

export type SalaryInfo = Pick<IUser, 'id' | 'name' | 'rate'> & { salary: number };

export interface ISalaryTracker {
  getSalary(): SalaryInfo[];
}