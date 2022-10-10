// Modo longo
export class Company {
    public readonly name: string; // Public não é necessário, pois todas as propriedades que não forem definidas como privada ou protected são por padrão publicas
    private readonly collaborators: Collaborator[] = [];
    protected readonly CNPJ: string;

    constructor(name: string, CNPJ: string) {
        this.name = name;
        this.CNPJ = CNPJ;
    };

    addNewCollaborator(collaborator: Collaborator): void {
        this.collaborators.push(collaborator);
    };

    getCollaborators(): Collaborator[] {
        return this.collaborators;
    };

    getNumberCollaborators(): number {
        return this.collaborators.length;
    };
};

// Modo curto (simplificado)
export class Collaborator {
    constructor(public readonly name: string, public readonly lastName: string) { };
};

const collaborator1 = new Collaborator('Vagner', 'Siqueira');
const collaborator2 = new Collaborator('Aretha', 'Silverio');
const collaborator3 = new Collaborator('Eunice', 'Siqueira');

const company1 = new Company('Shipeezi', '111-111-111/00001-11');

company1.addNewCollaborator(collaborator1);
company1.addNewCollaborator(collaborator2);
company1.addNewCollaborator(collaborator3);

const collaborators = company1.getCollaborators();
const numberCollaborators = company1.getNumberCollaborators();

console.log(company1);
console.log(collaborators);
console.log(numberCollaborators)
