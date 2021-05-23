type Name = {
  first: string;
  last: string;
};

function addFullName(name: Name): Name & { fullName: string } {
  return { ...name, fullName: `${name.first} ${name.last}` };
}

// the most basic and generic type for a function
type FunctionType = (...args: any[]) => any;

function permuteRows<T extends FunctionType>(
  iteratorFunc: T,
  // gets the type for the first parameter for the provided generic
  data: Parameters<T>[0][]
  // build the type based on the provided generic
): ReturnType<T>[] {
  return data.map(iteratorFunc);
}

console.log(permuteRows(addFullName, [{ first: 'John', last: 'Doe' }]));

// with classes uses ConstructorParameters and InstanceType instead:

class PersonWithFullName {
  constructor(public name: Name) {}

  getFullName() {
    return `${this.name.first} ${this.name.last}`;
  }
}

type ConstructorType = new (...args: any[]) => any;
function createObjects<T extends ConstructorType>(
  ObjectType: T,
  data: ConstructorParameters<T>[0][]
): InstanceType<T>[] {
  return data.map(item => new ObjectType(item));
}

console.log(
  createObjects(PersonWithFullName, [{ first: 'Bobby', last: 'Jones' }]).map(
    obj => obj.getFullName()
  )
);
