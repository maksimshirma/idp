var getSpammers = (submits: string[]): string[] => {
  var map: { [key: string]: number } = {};

  submits.forEach((submit) => {
    if (map.hasOwnProperty(submit)) {
      map[submit]++;
    } else {
      map[submit] = 1;
    }
  });

  return Object.keys(map).filter((key) => map[key] > 1);
};

var submits = [
  'naucoder',
  'iceman',
  'abikbaev',
  'abikbaev',
  'petr',
  'abikbaev',
  'abikbaev',
  'x',
  'abikbaev',
  'acrush',
  'x',
];

console.log(getSpammers(submits));