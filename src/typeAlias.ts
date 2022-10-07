type Age = number
type Color = 'Red' | 'Green' | 'Blue' | 'Magenta' | 'Yellow'

type Person = {
    name: string
    lastName: string
    age: Age
    adrresNumber: number
    postalCode: string
    favoriteColor?: string
}

const person1: Person = {
    name: 'Vagner',
    lastName: 'Siqueira',
    age: 25,
    adrresNumber: 30_000, // == 30000
    postalCode: '08830050'
}

function addFavoriteColorInPerson(person: Person, favoriteColor: Color): Person {
    return {
        ...person,
        favoriteColor
    }
}

console.log(addFavoriteColorInPerson(person1, 'Red'))

export default 1
