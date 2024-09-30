import { IphoneFactory } from './IphoneFactory';
import { NokiaFactory } from './NokiaFactory';
import { SamsungFactory } from './SamsungFactory';


var iphoneFactory = new IphoneFactory();
console.log('basic iphone phone', iphoneFactory.createBasicPhone());
console.log('expression iphone phone', iphoneFactory.createExpressionPhone());
console.log('premium iphone phone', iphoneFactory.createPremiumPhone());

console.log('-'.repeat(25));

var nokiaFactory = new NokiaFactory();
console.log('basic nokia phone', nokiaFactory.createBasicPhone());
console.log('expression nokia phone', nokiaFactory.createExpressionPhone());
console.log('premium nokia phone', nokiaFactory.createPremiumPhone());

console.log('-'.repeat(25));

var samsungFactory = new SamsungFactory();
console.log('basic samsung phone', samsungFactory.createBasicPhone());
console.log('expression samsung phone', samsungFactory.createExpressionPhone());
console.log('premium samsung phone', samsungFactory.createPremiumPhone());
