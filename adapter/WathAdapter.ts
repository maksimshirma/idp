import { IWatch, Watch } from "./Watch";

export interface IDigitalWatch {
  displayTime(): void;
}

export class WatchAdapter implements IDigitalWatch {
  watch: IWatch;

  constructor(watch: IWatch) {
    this.watch = watch;
  }

  displayTime(): void {
    var [secondHand, minuteHand, hourHand] = this.watch.getTime();
    var seconds = Math.round(secondHand / 6);
    var minutes = Math.round(minuteHand / 6);
    var hours = Math.round(hourHand / 30);
    console.log(`${hours}:${minutes}:${seconds}`);
  }
}

export class DigitalWatch extends Watch implements IDigitalWatch {
  time: string;

  constructor(time: string) {
    var [hours, minutes, seconds] = time.split(':');
    var secondHand = parseInt(seconds) * 6;
    var minuteHand = parseInt(minutes) * 6;
    var hourHand = parseInt(hours) * 30;
    super(secondHand, minuteHand, hourHand);
    this.time = time;
  }

  displayTime(): void {
    var [secondHand, minuteHand, hourHand] = super.getTime();
    var seconds = Math.round(secondHand / 6);
    var minutes = Math.round(minuteHand / 6);
    var hours = Math.round(hourHand / 30);
    console.log(`${hours}:${minutes}:${seconds}`);
  }
}