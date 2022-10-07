// O TS faz assimilações por estrutura da tipagem, fazendo assim, com que os argumentos inseridos em uma função que possuam mais de uma propriedade, porém não são utilizados na tipagem daquela função, ele as ignora ex:

type VerifyUserFn = (userInDb: User, sentUser: User) => boolean
type User = {
    user: string
    password: string
}
const verifyUser: VerifyUserFn = (userInDb, sentUser) => {
    return userInDb.user === sentUser.user && userInDb.password === sentUser.password
}

const userInDb = {
    user: 'vagner',
    password: '123456',
    age: 25,
    height: 180
}
const sentUser = {
    user: 'vagner',
    password: '123456',
    age: 25,
    height: 180
}

const userVerified = verifyUser(userInDb, sentUser)

console.log(userVerified)
// Dessa forma o ts ignora as demais propriedades, e não infere assim o tipo específico para cada propriedade daquele objeto, ou seja, se eu enviar uma senha do tipo number, quem irá reclar será a função e não o objeto. Para que o objeto seja validado tb, ao criado é necessário tipar semelhante as propriedades que a função, porém acaba limitando o que relamente pode ser criado com aquele objeto e tendo que fazer uma validação maior para isso.
export default 1
