interface PeopleModelObject {
    firstName: string
    lastName: string
    age?: number
}
const pessoa1: PeopleModelObject = {
    firstName: 'Vagner',
    lastName: 'Siqueira',
    age: 24
}
// Ou
const pessoa2: {
    firstName: string
    lastName: string
    age?: number
} = {
    firstName: 'Vagner',
    lastName: 'Siqueira',
    age: 24
}
// Ou
const pessoa3 = {
    firstName: 'Eunice',
    lastName: 'Siqueira',
    age: 54
}

console.log(pessoa1)
console.log(pessoa2)
console.log(pessoa3)

export default 1
