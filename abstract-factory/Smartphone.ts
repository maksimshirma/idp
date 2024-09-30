export enum Display {
  SUPER_LSD = 'Super LSD',
  SUPER_AMOLED = 'Super Amoled',
  IPS = 'IPS',
  RETINA = 'Retina',
}

export enum OperatingSystem {
  ANDROID = 'Android',
  IOS = 'IOS',
  WINDOWS = 'Windows',
}

export interface Smartphone {
  resolution: string;
  diagonal: number;
  display: Display;
  operatingSystem: OperatingSystem;
  threads: number;
  memory: number;
  camera: number;
}
