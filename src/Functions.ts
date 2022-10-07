interface PeopleModel {
    firstName: string
    lastName: string
    age?: number | null
    height?: number | null
}

// Função construtora de objetos
const constructorObjectPeople = ({ firstName, lastName, age, height }: PeopleModel): PeopleModel => {
    if (!firstName || !lastName) throw new Error(`firstName and lastName are required`)
    return {
        firstName,
        lastName,
        age: age || null,
        height: height || null
    }
}
// const p1 = constructorObjectPeople({ firstName: 'Vagner', lastName: 'Siqueira' })
// console.log(p1) // { firstName: 'Vagner', lastName: 'Siqueira', age: null, height: null }

// Ou
function CreatePeople(firstName: string, lastName: string, age?: number): PeopleModel {
    return {
        firstName,
        lastName,
        age
    }
}
// const p2 = CreatePeople('Aretha', 'Silvério', 24)
// console.log(p2) // { firstName: 'Aretha', lastName: 'Silvério', age: 24 }


// Função construtoras de array com tupla
function constructorArrayCar([name, year, motor]: [string, number, number]) {
    return [name, year, motor]
}
// const carro1 = constructorArrayCar(['Voyage', 2000, 1.5])
// console.log(carro1) //['Voyage', 2000, 1.5]

export default 1
