export class Animal {
    constructor(
        readonly name: string,
        readonly age: number,
        readonly features: string[] = []
    ) { }

    addFeature(...args: string[]): void {
        for (const feature of args) {
            this.features.push(feature)
        }
    }
}

export class Dog extends Animal {
    constructor(name: string, age: number) {
        super(name, age)
    }
}

export class Cat extends Animal {
    constructor(name: string, age: number) {
        super(name, age)
    }
}

const dog1 = new Dog('Binho', 11)
dog1.addFeature('Chato', 'Late alto', 'Cheira mal')

const cat1 = new Cat('Marye', 5)
cat1.addFeature('Branca', 'Mia muito', 'Sempre com fome')

console.log(dog1)
console.log(cat1)
