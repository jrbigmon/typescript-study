function sumDoubleValues(this: Date, value1: number, value2: number) {
    return {
        Date: this,
        sum: value1 + value2
    }
}

const sumValuesAndDateOfMath = sumDoubleValues.call(new Date(), 50, 30)
console.log(sumValuesAndDateOfMath)

// This no escopo global
type PeopleHere = {
    name: string
    lastName: string
}

const people: PeopleHere = {
    name: 'Vagner',
    lastName: 'Siqueira'
}

function createPeople(this: PeopleHere) {
    return {
        name: this.name,
        lastName: this.lastName,
    }
}

console.log(createPeople.call(people))
export default 1
