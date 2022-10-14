export class People {
    constructor(
        readonly firstName: string,
        readonly lastName: string,
        private readonly cpf: string,
        protected _birthday: Date,
        protected _age?: number
    ) { }
}

export class Student extends People {
    constructor(
        readonly classNumber: number,
        firstName: string,
        lastName: string,
        cpf: string,
        _birthday: Date,
        _age?: number
    ) {
        super(firstName, lastName, cpf, _birthday, _age)
        this.age
    }

    get age(): number {
        const dateNow = new Date()
        const month = this._birthday.getMonth() - dateNow.getMonth()
        const day = this._birthday.getDate() - dateNow.getDate()
        const age = dateNow.getFullYear() - this._birthday.getFullYear()
        this._age = month < 0 || (month == 0 && day <= 0) ? age : age - 1
        return this.age
    }

    get birthday(): Date {
        return this._birthday
    }

    set birthday(value: Date) {
        this._birthday = value
    }

}

const student = new Student(13, 'Vagner', 'Siqueira', '47223888814', new Date('1997/10/10'), 15)

student.birthday = new Date('1997/11/19')
console.log(student.birthday)
console.log(student.age)
