// Método com CallableFunction para funções que precisam receber funções como parametro
function sumMoreOneInNumbersOfArray(arrayOfNumbers: number[], callbackFunction: CallableFunction): number[] {
    let newArrayOfNumbersMoreOne: number[] = []

    for (let i = 0; i < arrayOfNumbers.length; i++) {
        newArrayOfNumbersMoreOne.push(callbackFunction(arrayOfNumbers[i]))
    }

    return newArrayOfNumbersMoreOne
}

const arrayNumberInitial = [1, 2, 3, 4]

const arrayNumberAfterSumMoreOne = sumMoreOneInNumbersOfArray(arrayNumberInitial, (item: number) => item + 1)

console.log(arrayNumberAfterSumMoreOne)

// Criando tipagens para funções

type FunctionStrings = (value: string) => string

function arrayOfStringToUpperCase(arrayString: string[], upperCaseFn: FunctionStrings): string[] {
    let newArrayAfterUpperCase: string[] = []

    for (let i = 0; i < arrayString.length; i++) {
        newArrayAfterUpperCase.push(upperCaseFn(arrayString[i]))
    }

    return newArrayAfterUpperCase
}

const arrayOfStrings = ['vagner', 'siqueira', 'jr']

const arrayUpperCaseValues = arrayOfStringToUpperCase(arrayOfStrings, (item) => item.toLocaleUpperCase())

console.log(arrayUpperCaseValues)

export default 1
