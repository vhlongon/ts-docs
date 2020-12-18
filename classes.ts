export {};

class Vehicle {
  // color: string;

  // constructor(color?: string) {
  //   this.color = color || 'black';
  // }
  // easier way to write the above is:
  constructor(public color: string = 'black') {}

  drive(): void {
    console.log('brummm');
  }
  honk(): void {
    console.log('tutu');
  }
  private getSecret(): void {
    console.log('the secret');
  }
  protected getInfo(): void {
    console.log('vehicle info');
  }
}

const vehicle = new Vehicle();
//vehicle.getInfo(); // -> protected methods are not accessible either in a instance

class Car extends Vehicle {
  constructor(public wheels: number, color?: string) {
    super(color);
  }
  drive(): void {
    console.log('vruummm');
  }
  startProcess(): void {
    this.getInfo(); // -> protected methods can be accessed within the child class
  }
}

const myCar = new Car(4, 'orange');
myCar.drive();
myCar.honk();
console.log(myCar.color);

const myMotorcycle = new Car(2); // -> sets wheels as 2 for car and defaults to color black for vehicle
console.log(myMotorcycle.color);
