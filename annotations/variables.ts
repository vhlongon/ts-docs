let apples: number = 5;
// apples = "a string" -> this will throw an error

// in this case the type is the same as the value which is ok
let nothingMuch: null = null;
let nothing: undefined = undefined;

// built in objects
let now: Date = new Date();

// for array
let colors: string[] = ['red', 'green', 'blue'];
let numbers: number[] = [1, 2, 3];
let booleans: boolean[] = [false, true, false];

// Classes

class Car {}

let car: Car = new Car();

// object literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

// function
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};
