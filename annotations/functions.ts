// this annotates the function itself
const add = (a: number, b: number): number => a + b;

function divide(a: number, b: number): number {
  return a / b;
}

const multiply = function multiply(a: number, b: number): number {
  return a * b;
};

// void can actually return undefined and null
const logger = (message: string): void => {
  console.log(message);
  // return null;
  // return undefined;
};

// this means the function wont ever get there
const throwError = (message: string): never => {
  throw new Error(message);
};

// example with destructuring
const todaysWeather = {
  date: new Date(),
  weather: 'sunny',
};

const logWeather = ({
  date,
  weather,
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(date);
  console.log(weather);
};
