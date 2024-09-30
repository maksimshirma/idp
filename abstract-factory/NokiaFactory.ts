import { Display, OperatingSystem, Smartphone } from "./Smartphone";
import { SmartphoneFactory } from "./SmartphoneFactory";

class BasicNokia implements Smartphone {
  resolution: string;
  diagonal: number;
  display: Display;
  operatingSystem: OperatingSystem;
  threads: number;
  memory: number;
  camera: number;

  constructor() {
    this.resolution = '320x480';
    this.diagonal = 3.5;
    this.display = Display.RETINA;
    this.operatingSystem = OperatingSystem.WINDOWS;
    this.threads = 1;
    this.memory = 8;
    this.camera = 0;
  }
}

class ExpressionNokia implements Smartphone {
  resolution: string;
  diagonal: number;
  display: Display;
  operatingSystem: OperatingSystem;
  threads: number;
  memory: number;
  camera: number;

  constructor() {
    this.resolution = '480x800';
    this.diagonal = 4;
    this.display = Display.RETINA;
    this.operatingSystem = OperatingSystem.WINDOWS;
    this.threads = 2;
    this.memory = 16;
    this.camera = 1;
  }
}

class PremiumNokia implements Smartphone {
  resolution: string;
  diagonal: number;
  display: Display;
  operatingSystem: OperatingSystem;
  threads: number;
  memory: number;
  camera: number;

  constructor() {
    this.resolution = '720×1280';
    this.diagonal = 4.7;
    this.display = Display.IPS;
    this.operatingSystem = OperatingSystem.ANDROID;
    this.threads = 2;
    this.memory = 32;
    this.camera = 2;
  }
}

export class NokiaFactory implements SmartphoneFactory {
  constructor() {}

  createBasicPhone(): Smartphone {
    return new BasicNokia();
  }

  createExpressionPhone(): Smartphone {
    return new ExpressionNokia();
  }

  createPremiumPhone(): Smartphone {
    return new PremiumNokia();
  }
}
