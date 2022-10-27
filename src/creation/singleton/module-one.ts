import { DatabaseClassic } from "./database-classic";

export const databaseClassic = DatabaseClassic.instance;

databaseClassic.add({ name: "john Doe", age: 20 });
databaseClassic.add({ name: "Linus Torvalds", age: 50 });
databaseClassic.add({ name: "Alan Turing", age: 80 });
databaseClassic.show();
