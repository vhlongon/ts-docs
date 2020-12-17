// as an object
const drink = {
  colors: 'brown',
  carbonated: false,
  sugar: 40,
};

// as a tuple
const pepsi: [string, boolean, number] = ['broww', true, 40];

pepsi[0] = 40; // -> 🚫
pepsi[0] = 'orange'; // -> ✅

// if want to reuse the type with type alias
type Drink = [string, boolean, number];

const sprite: Drink = ['clear', true, 30];
const tea: Drink = ['brown', false, 0];

// tuples are not very clear, you see the type but can't understand what they actually represent
const carSpecs: [number, number] = [400, 3354];

// comparing with object, a lot clear of course
const carStats = {
  horsepower: 400,
  weight: 3354,
};
