import { Command } from "./Command";

export class Light {
  location: string;
  isOn: boolean;

  constructor(location: string) {
    this.location = location;
    this.isOn = false;
  }

  on() {
    console.log(`Turned on light in ${this.location}`);
    this.isOn = true;
  }
  
  off() {
    console.log(`Turned off light in ${this.location}`);
    this.isOn = false;
  }
}

export class LightOnCommand implements Command {
  light: Light;

  constructor(light: Light) {
    this.light = light;
  }

  execute(): void {
    this.light.on();
  }

  unexecute(): void {
    this.light.off();
  }
}

export class LightOffCommand implements Command {
  light: Light;

  constructor(light: Light) {
    this.light = light;
  }

  execute(): void {
    this.light.off();
  }

  unexecute(): void {
    this.light.on();
  }
}

