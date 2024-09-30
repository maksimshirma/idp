import { Smartphone } from "./Smartphone";

export interface SmartphoneFactory {
  createBasicPhone(): Smartphone;
  createExpressionPhone(): Smartphone;
  createPremiumPhone(): Smartphone;
}