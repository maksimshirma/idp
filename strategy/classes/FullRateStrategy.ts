import { rate, Rate } from "../enums/rate";
import { IStrategy } from "../interfaces/Strategy";

export class FullRateStrategy implements IStrategy {
  constructor() {}

  calculateSalary(totalWorkDays: number): number {
    return totalWorkDays * rate[Rate.FULL] * 8 * 326;
  }
}
