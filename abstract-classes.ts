// abstract can't be initiated directly
abstract class StreetFighter {
  constructor() {}

  move() {}
  fight() {
    console.log(`${this.name} attack with ${this.getSpecialAttack()}!`);
  }
  abstract getSpecialAttack(): string;
  abstract get name(): string;
}

class Ryu extends StreetFighter {
  getSpecialAttack(): string {
    return 'Hadouken';
  }
  get name(): string {
    return 'Ryu';
  }
}
const ryu = new Ryu();

ryu.fight();

class ChunLi extends StreetFighter {
  getSpecialAttack(): string {
    return 'Lightning kick';
  }
  get name(): string {
    return 'Chun-li';
  }
}
const chunLi = new ChunLi();

chunLi.fight();

