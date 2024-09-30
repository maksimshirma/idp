import { rate } from './../enums/rate';
import { Rate } from "../enums/rate";
import { IStrategy } from "../interfaces/Strategy";

export class MidRateStrategy implements IStrategy {
  constructor() {}

  calculateSalary(totalWorkDays: number): number {
    return totalWorkDays * rate[Rate.MID] * 8 * 326;
  }
}
