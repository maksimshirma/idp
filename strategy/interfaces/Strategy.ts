export interface IStrategy {
  calculateSalary(totalWorkDays: number): number;
}
