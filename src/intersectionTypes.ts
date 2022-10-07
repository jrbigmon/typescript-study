type People = {
    name: string
    lastName: string
    cpf: string
    postalCode: string
    numberAddress: number
}

type FavoriteFood = {
    nameFood: string
    localeFood: string
    priceFood: number
}

type DataCorporation = {
    id: string
    email: string
    password: string
    workLocale: string
    addressIp: string
}

type PeopleCorporation = People & DataCorporation | FavoriteFood

function createPeople(name: string, lastName: string, cpf: string, postalCode: string, numberAddress: number): People {
    return {
        name,
        lastName,
        cpf,
        postalCode,
        numberAddress
    }
}

function createDataCorporation(id: string, email: string, password: string, workLocale: string, addressIp: string): DataCorporation {
    return {
        id,
        email,
        password,
        workLocale,
        addressIp
    }
}

function createPeopleCorporation(people: People, dataCorporation: DataCorporation, favoriteFood?: FavoriteFood): PeopleCorporation {
    if (favoriteFood) {
        return {
            ...people,
            ...dataCorporation,
            ...favoriteFood
        }
    }
    return {
        ...people,
        ...dataCorporation
    }
}
const foodMonday: FavoriteFood = {
    nameFood: 'Lasanha',
    localeFood: 'Italy',
    priceFood: 30.99
}

// Criando pessoa sem comida favorita
const people1 = createPeople('Vagner', 'Siqueira', '47223888814', '08830050', 218)
const dataCorporation1 = createDataCorporation('b1d3g4', 'siqueira@gmail.com', '123456', 'SP', '192.100.0.1')
const peopleCorporation = createPeopleCorporation(people1, dataCorporation1)
console.log(peopleCorporation)

// Criando peossoa com comida favorita
const people2 = createPeople('Aretha', 'Terriaga', '47623577724', '08830050', 218)
const dataCorporation2 = createDataCorporation('g1d3b4', 'terriaga@gmail.com', '123456', 'SP', '193.100.0.1')
const peopleCorporation2 = createPeopleCorporation(people2, dataCorporation2, foodMonday)
console.log(peopleCorporation2)
