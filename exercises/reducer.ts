// implement forEach method with reducer with type safety
const myforEach = <T>(items: T[], callback: (v: T) => void): void => {
  items.reduce((acc, val) => {
    callback(val);
    return undefined;
  }, undefined);
};

myforEach(['a', 'b', 'c'], v => console.log(`for each on ${v}`));

// implement filter method with reducer with type safety
const myFilter = <T>(items: T[], predicate: (v: T) => boolean): T[] => {
  return items.reduce(
    (acc: T[], val) => (predicate(val) ? [...acc, val] : acc),
    []
  );
};

console.log(myFilter([1, 2, 3, 4, 5, 6], v => v % 2 === 0));

// implement map method with reducer with type safety
const myMap = <T, K>(items: T[], callback: (v: T) => K): K[] => {
  return items.reduce((acc: K[], val) => [...acc, callback(val)], []);
};

console.log(myMap([1, 2, 3, 4, 5, 6], v => (v * 10).toString()));
