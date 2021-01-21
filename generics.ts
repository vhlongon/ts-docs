// one function that only works with numbers
const ArrayOfNumbers = (collection: number[]) => ({
  get(index: number): number {
    return collection[index];
  },
});
// one function that only works with strings
const ArrayOfStrings = (collection: string[]) => ({
  get(index: number): string {
    return collection[index];
  },
});

// the class version 🤮
class ArrayOfAnythingClass<T> {
  constructor(public collection: T[]) {}

  get(index: number): T {
    return this.collection[index];
  }
}
// create a generic one where we can pass any type we needd
const ArrayOfAnything = <T>(collection: T[]) => ({
  get(index: number): T {
    return collection[index];
  },
});

const withStrings = ArrayOfAnything<string>(['a', 'b', 'c']);
const withNumbers = ArrayOfAnything<number>([1, 2, 3]);

// ====================================================== //

// Another example with functions declarations

function printStrings(arr: string[]): void {
  arr.forEach((x) => {
    console.log(x);
  });
}

function printNumber(arr: number[]): void {
  arr.forEach((x) => {
    console.log(x);
  });
}

function printAnything<T>(arr: T[]): void {
  arr.forEach((x) => {
    console.log(x);
  });
}

const printWithStrings = printAnything<string>(['a', 'b', 'c']);
const printWithNumbers = printAnything<number>([1, 2, 3]);

// you can even leave the generic type because of type inference depending on the type of argument sent to the function
// but for clarity is recommended to explicitly define the type
printAnything(['hello', 'there']);
printAnything([20, 30]);

// generic constraints

// we can garantee that even if we pass a generic it will have a print method
// by extending T so whatever it is, it will implement the Printable interface
interface Printable {
  print(): void;
}

// the Car extends Printable but has other specific methods
interface Car extends Printable {
  specificCarMethod(): void;
}

// the House extends Printable but has other specific methods
interface House extends Printable {
  specificHouseMethod(): void;
}

// create factory functions to returns cars and houses
const generateCar = <T>(item: T): Car => ({
  print(): void {
    console.log(`printing the car ${item}`);
  },
  specificCarMethod(): void {
    console.log('This method is for cars only');
  },
});

const generateHouse = <T>(item: T): House => ({
  print(): void {
    console.log(`printing the house ${item}`);
  },
  specificHouseMethod(): void {
    console.log('This method is for houses only');
  },
});

// this is the generic function that will print both cars and houses
const printSomething = <T extends Printable>(arr: T[]) => {
  arr.forEach((x) => {
    x.print();
  });
};

// printHousesOrCars([1, 2, 3]); // -> 🚫 will error since a number does not have a print method

// create some random arrays of cars and houses
const cars = Array.from({ length: 3 }, (_, i) => generateCar(i + 1));
const houses = Array.from({ length: 3 }, (_, i) => generateHouse((i + 1) * 2));

// ✅ all good since both a car and a house have a print method
// remember to explictly give the type of the generic for clarity sake
printSomething<Car>(cars);
printSomething<House>(houses);
