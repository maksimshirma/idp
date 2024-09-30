import { rate } from './../enums/rate';
import { Rate } from "../enums/rate";
import { IStrategy } from "../interfaces/Strategy";

export class LowRateStrategy implements IStrategy {
  constructor() {}

  calculateSalary(totalWorkDays: number): number {
    return totalWorkDays * rate[Rate.LOW] * 8 * 326;
  }
}
