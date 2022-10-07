// Tipos não literais
let name: string

// Tipos literais
let otherName = 'Vagner'

interface Person {
    name: string
    lastName: string
}

const person: Person = {
    name: 'Vagner' as const, // Criando tipo literal para propriedades de um objeto
    lastName: 'Siqueira'
}
// caso tente mudar essa variavel, o ts o alertará que não é permitido
// person.name = 'Jr' // Dessa forma, gerará um erro ao compilar
console.log(typeof person.name)
console.log(typeof person.lastName)
console.log(typeof person)

export default 1
