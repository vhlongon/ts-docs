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

// function ( this adds annotation for the variable holding the function not the function itself)
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

// WHEN TO USE ANNOTATIONS:

// * when a fucntion returns the 'any' type and we need to clarify the value
const json = '{"x": 10 , "y": 20}';
// JSON.parse will return any because it can't know all the possible returns values
// so annotation here is a good ideia
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates); // -> {x: 10, y: 20}

// * when we declare a variable on one line then initialize it later
let words = ['red', 'green', 'blue'];
let found: boolean; // or initialize directly so TS can infere like let found = false;
for (let i = 0; i < words.length; i++) {
  const element = words[i];
  if (element === 'green') {
    found = true;
  }
}

// * when we want the variable to have a type that can't be inferred correclty
let nums = [-10, -1, 12];
let numberAboveZero: boolean | number = false; // it can be either a boolean or number

for (let i = 0; i < nums.length; i++) {
  const element = nums[i];
  if (element > 0) {
    numberAboveZero = element;
  }
}

//bottom line is that for most cases we dont need to do that since ts will be able to infere the types by itself:
