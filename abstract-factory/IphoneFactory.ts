import { Display, OperatingSystem, Smartphone } from "./Smartphone";
import { SmartphoneFactory } from "./SmartphoneFactory";

class BasicIphone implements Smartphone {
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
    this.operatingSystem = OperatingSystem.IOS;
    this.threads = 2;
    this.memory = 32;
    this.camera = 3;
  }
}

class ExpressionIphone implements Smartphone {
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
    this.operatingSystem = OperatingSystem.IOS;
    this.threads = 4;
    this.memory = 128;
    this.camera = 8;
  }
}

class PremiumIphone implements Smartphone {
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
    this.display = Display.SUPER_LSD;
    this.operatingSystem = OperatingSystem.IOS;
    this.threads = 8;
    this.memory = 256;
    this.camera = 15;
  }
}

export class IphoneFactory implements SmartphoneFactory {
  constructor() {}

  createBasicPhone(): Smartphone {
    return new BasicIphone();
  }

  createExpressionPhone(): Smartphone {
   return new ExpressionIphone(); 
  }

  createPremiumPhone(): Smartphone {
    return new PremiumIphone();
  }
}
