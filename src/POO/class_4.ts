// public: Pode ser acessado de qualquer lugar
// private: Pode ser acessado apenas na classe em que foi criado
// protected: Pode ser apenas na classe que foi criada e nas exntesões dela

export class Vehicle {
    constructor(
        protected readonly keyAccess: number,
        readonly name: string,
        readonly tiresNumber: number,
        readonly type: string,
        readonly motor: boolean,
        readonly horsePower?: number | null,
        readonly releaseDate?: Date,
    ) { }
}

export class Bike extends Vehicle {
    constructor(
        readonly properClue: string,
        keyAccess: number,
        name: string,
        numberWheels: number,
        type: string,
        motor: boolean,
        horsePower?: number | null,
        releaseDate?: Date,
    ) { super(keyAccess, name, numberWheels, type, motor, horsePower, releaseDate) }

    get getKeyAccess(): number {
        return this.keyAccess
    }
}

const bike1 = new Bike('Road', 123456, 'Shimano', 2, 'Road', false, 0, new Date('1997/10/29'))

console.log(bike1.getKeyAccess)
