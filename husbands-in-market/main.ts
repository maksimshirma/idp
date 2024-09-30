var getTime = (products: string[], customers: string[]) => {
  var hash: { [key: string]: number } = {};

  products.forEach((product) => {
    var [value, key] = product.split(' of ');
    hash[key] = parseInt(value);
  });

  var i = 0;
  var index = 0;

  for (i; index !== customers.length; i++) {
    var [val, key] = customers[index].split(' of ');
    var value = parseInt(val);

    if (!hash.hasOwnProperty(key)) {
      index++;
      continue;
    }

    if (hash[key] > value) {
      hash[key] = hash[key] - value;
      index++;
      continue;
    } 
    
    if (hash[key] === value) {
      delete hash[key];
      index++;
      continue;
    }

    if (customers.length - 1 === index) break;

    customers[index] = `${value - 1} of ${key}`;
    [customers[index], customers[index + 1]] = [customers[index + 1], customers[index]];
  }

  return i;
};

var products = ["2 of sweets", "4 of milk", "1 of sausage"];
var customers = ["2 of milk", "3 of sweets", "3 of milk", "1 of cheese"];

console.log(getTime(products, customers));
