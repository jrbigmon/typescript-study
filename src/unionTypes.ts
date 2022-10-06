// retorno de função tendo mais de um tipo
interface User {
    email: string
    password: string
    postalCode: string
    heigth?: number | null
}

function createUser({ email, password, postalCode, heigth }: User) {
    if (!email || !password || !postalCode) throw new Error('Email, password and postalCode is required!')
    propertyValidate({ email, password, postalCode })
    return {
        email: email.toLowerCase(),
        password,
        postalCode,
        heigth: heigth || null
    }
}
function propertyValidate({ email, password, postalCode }: User) {
    if (!email.includes('@')) throw new Error(`Invalid email: ${email}`)
    if (password.length <= 3 || password.length > 12) throw new Error('Password must be at least 3 characters long and at least 12 characters long.')
    if (postalCode.replace(/\+B/g, '').length < 8) throw new Error(`Postal Code: ${postalCode} must be at least 8 characters long.`)
}
const newUser = createUser({ email: 'Vagner@mail.com', password: '123456', postalCode: '12345678', heigth: 187 })
console.log(newUser)
