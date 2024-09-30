import { LowRateStrategy } from './classes/LowRateStrategy';
import { MidRateStrategy } from './classes/MidRateStrategy';
import { FullRateStrategy } from './classes/FullRateStrategy';
import { SalaryTracker } from "./classes/SalaryTracker";
import { users } from './data/Users';
import { Rate } from './enums/rate';
import { statement } from './data/Statement';

var fullRatedSalaryTracker = new SalaryTracker(
  new FullRateStrategy(),
  statement,
  users.filter((user) => user.rate === Rate.FULL)
);
console.log(fullRatedSalaryTracker.getSalary());

var midRatedSalaryTracker = new SalaryTracker(
  new MidRateStrategy(),
  statement,
  users.filter((user) => user.rate === Rate.MID)
);
console.log(midRatedSalaryTracker.getSalary());

var lowRatedSalaryTracker = new SalaryTracker(
  new LowRateStrategy(),
  statement,
  users.filter((user) => user.rate === Rate.LOW)
);
console.log(lowRatedSalaryTracker.getSalary());
