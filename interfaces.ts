interface Reportable {
  // to declare a function in the interface, in this case a function the returns a string
  summary(): string;
}

const oldCivic = {
  name: 'civic',
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name ${this.name}`;
  },
};

const printSummary = (item: Reportable): void => {
  console.log(item.summary());
};

printSummary(oldCivic); // -> ✅

const myDrink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My drink has ${this.sugar} grams of sugar`;
  },
};

// althought drink and cars are very different concepts they are both reportable things
// because they satisfy the condition for the interface declared, i.e has a summary function the returns an array
printSummary(myDrink); // -> ✅
