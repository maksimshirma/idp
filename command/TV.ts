import { Command } from "./Command";

export class TV {
  isOn: boolean;

  constructor() {
    this.isOn = false;
  }

  on() {
    console.log('Turned on TV');
    this.isOn = true;
  }
  
  off() {
    console.log('Turned off TV');
    this.isOn = false;
  }
}

export class TVOnCommand implements Command {
  tv: TV;

  constructor(tv: TV) {
    this.tv = tv;
  }

  execute(): void {
    this.tv.on();
  }

  unexecute(): void {
    this.tv.off();
  }
}

export class TVOffCommand implements Command {
  tv: TV;

  constructor(tv: TV) {
    this.tv = tv;
  }

  execute(): void {
    this.tv.off();
  }

  unexecute(): void {
    this.tv.on();
  }
}
