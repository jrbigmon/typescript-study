export class Car {
  static patternColor = 'white';
  static patternEngine = 'V8'

  constructor(
    readonly name: string,
    readonly engine: string,
    readonly height: number,
    color: string,
    readonly releaseDate: Date,
  ) { } 

  static newCar (name: string, height: number, releaseDate: Date): Car {
    return new Car(name, Car.patternEngine, height, Car.patternColor, releaseDate)
  }
}

const car1 = Car.newCar('Volvo', 1500, new Date('2022/05/01'))

console.log(car1)