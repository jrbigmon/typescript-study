// Singleton - GoF And Factory Methods - GoF

export class Database {
  private static database: Database;

  private constructor(
    private host: string,
    private user: string,
    private password: string
  ) { }

  static connect(host: string, user: string, password: string) : Database {
    if(Database.database) return Database.database;
    return Database.database = new Database(host, user, password);
  }
}

const db1 = Database.connect('localhost', 'root', '123456');
const db2 = Database.connect('localhost', 'melda', '123456');
const db3 = Database.connect('localhost', 'bosta', '123456');

console.log(db1); // Database { host: 'localhost', user: 'root', password: '123456' }
console.log(db2); // Database { host: 'localhost', user: 'root', password: '123456' }
console.log(db3); // Database { host: 'localhost', user: 'root', password: '123456' }

console.log(db1 === db2) // true
console.log(db1 === db3) // true
console.log(db2 === db3) // true