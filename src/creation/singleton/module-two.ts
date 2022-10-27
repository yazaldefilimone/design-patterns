import { DatabaseClassic } from "./database-classic";
import { databaseClassic as databaseClassicOne } from "./module-one";
const databaseClassic = DatabaseClassic.instance;

databaseClassic.add({ name: "Yazalde Filimone", age: 20 });
databaseClassic.add({ name: "Walter O'Brain ", age: 50 });
databaseClassic.show();

console.log(databaseClassicOne === databaseClassic);
