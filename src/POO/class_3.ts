export class Company {
    private readonly collaborators: Collaborator[] = [];

    constructor(
        private readonly name: string,
        protected readonly CPNJ: string
    ) { };

    get getCompanyName(): string {
        return this.name;
    };

    addNewCollaborator(...collaborators: Collaborator[]): void {
        for (const collaborador of collaborators) {
            this.collaborators.push(collaborador);
        };
    };

    get getCollaborators(): Collaborator[] {
        return this.collaborators;
    };

    get getNumberCollaborators(): number {
        return this.collaborators.length;
    };
};

export class People {
    constructor(
        readonly name: string,
        readonly lastName: string,
        private readonly cpf?: string
    ) { };
};

export class Collaborator extends People {
    constructor(
        name: string,
        lastName: string,
        private readonly area: string,
        private readonly liderName: string,
        cpf?: string,
    ) { super(name, lastName, cpf) };

    get getArea(): string {
        return this.area;
    };

    get getLiderName(): string {
        return this.liderName;
    };

    get getFullName(): string {
        return `${this.name} ${this.lastName}`
    };
};

const collaborator1 = new Collaborator('Vagner', 'Siqueira', 'Dev', 'Rodrigo', '47223888814');
console.log(collaborator1)

const collaborator2 = new Collaborator('Aretha', 'Silverio', 'RH', 'Leandro', '12345678912');
console.log(collaborator2)

const collaborator3 = new Collaborator('Eunice', 'Siqueira', 'Teacher', 'Isabel', '12345678912');
console.log(collaborator3)

const company1 = new Company('Shipeezi', '111-111-111/00001-11');

company1.addNewCollaborator(collaborator1, collaborator2, collaborator3);

const collaborators = company1.getCollaborators;
const collaboratorsFullName = collaborators.map(collaborator => collaborator.getFullName);
const numberCollaborators = company1.getNumberCollaborators;

console.log('Company name: ' + company1.getCompanyName);
console.log('Number of collaborators: ' + numberCollaborators);
console.log(collaboratorsFullName);
