const carMakers = ['ford', 'toyota', 'chevy'];
const dates = [new Date(), new Date()];

// to annotate 2 dimensional arrays
const carsByMake: string[][] = [['f150'], ['corollla'], ['camaro']];

// Help With inference when extracting values
const firstCar = carMakers[0];
const myCar = [...carMakers].pop();

// Help us to prevent adding incompatible values
carMakers.push(100);

// help with built-in functions in built-in methods
carMakers.map((car: string): string => {
  // this will get auto-complete for all string methods in this case
  return car;
});

// Flexible types
const importanDates: (Date | string)[] = [];
importanDates.push('2020-12-05'); // ok
importanDates.push(new Date()); // ok
importanDates.push(100); // not ok
