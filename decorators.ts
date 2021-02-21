@classDecorator
class Boat {
  @testDecorator
  color: string = 'red';

  @testDecorator
  get formattedColor(): string {
    return `This boat color is ${this.color}`;
  }

  @logError('Oops, boat was sunk')
  pilot(
    @parameterDecorator speed: string,
    @parameterDecorator generateWake: boolean
  ): void {
    if (speed === 'fast') {
      console.log('swish');
    } else {
      console.log('nothing');
    }
  }
}

// decorators are applied only once when you define the class not everytime you create an instance!
// target is the class prototype reference
// key is the name of the method you are applying decorator to in that class
// desc is the decription of that property -
// PropertyDescriptor is globally available in ts and describes a property applied to an object
// you can get the value of it via Object.getOwnPropertyDescriptor function in any object
// likewise you can set the properties to a property via Object.defineProperty

function logError(errorMessage: string) {
  return (target: any, key: string, desc: PropertyDescriptor): void => {
    const method = desc.value;

    desc.value = () => {
      try {
        method();
      } catch (e) {
        console.error(errorMessage);
      }
    };
  };
}

function testDecorator(target: any, key: string) {}

function parameterDecorator(target: any, key: string, index: number) {
  console.log({ key, index });
}
// new Boat().pilot();

function classDecorator(
  constructor: Function /* or in this case would be typeof Boat */
) {
  console.log(constructor);
}
