export interface IWatch {
  getTime(): number[];
}

export class Watch implements IWatch {
  secondHand: number;
  minuteHand: number;
  hourHand: number;

  constructor(secondHand: number, minuteHand: number, hourHand: number) {
    this.secondHand = secondHand;
    this.minuteHand = minuteHand;
    this.hourHand = hourHand;
  }

  getTime() {
    return [this.secondHand, this.minuteHand, this.hourHand];
  }
}