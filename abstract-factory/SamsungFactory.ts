import { Display, OperatingSystem, Smartphone } from "./Smartphone";
import { SmartphoneFactory } from "./SmartphoneFactory";

class BasicSamsung implements Smartphone {
  resolution: string;
  diagonal: number;
  display: Display;
  operatingSystem: OperatingSystem;
  threads: number;
  memory: number;
  camera: number;

  constructor() {
    this.resolution = '640x960';
    this.diagonal = 3;
    this.display = Display.IPS;
    this.operatingSystem = OperatingSystem.ANDROID;
    this.threads = 2;
    this.memory = 16;
    this.camera = 1;
  }
}

class ExpressionSamsung implements Smartphone {
  resolution: string;
  diagonal: number;
  display: Display;
  operatingSystem: OperatingSystem;
  threads: number;
  memory: number;
  camera: number;

  constructor() {
    this.resolution = '1334x750';
    this.diagonal = 4.7;
    this.display = Display.IPS;
    this.operatingSystem = OperatingSystem.ANDROID;
    this.threads = 4;
    this.memory = 64;
    this.camera = 5;
  }
}

class PremiumSamsung implements Smartphone {
  resolution: string;
  diagonal: number;
  display: Display;
  operatingSystem: OperatingSystem;
  threads: number;
  memory: number;
  camera: number;

  constructor() {
    this.resolution = '1920x1080';
    this.diagonal = 5.5;
    this.display = Display.SUPER_AMOLED;
    this.operatingSystem = OperatingSystem.ANDROID;
    this.threads = 8;
    this.memory = 128;
    this.camera = 15;
  }
}

export class SamsungFactory implements SmartphoneFactory {
  constructor() {}

  createBasicPhone(): Smartphone {
    return new BasicSamsung();
  }

  createExpressionPhone(): Smartphone {
    return new ExpressionSamsung();
  }

  createPremiumPhone(): Smartphone {
    return new PremiumSamsung();
  }
}
