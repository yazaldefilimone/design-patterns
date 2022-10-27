import { IUser } from "./IUser";

export class DatabaseClassic {
  private users: IUser[] = [];
  private static _instance: DatabaseClassic = null;

  private constructor() {}

  public static get instance(): DatabaseClassic {
    if (DatabaseClassic._instance === null) {
      DatabaseClassic._instance = new DatabaseClassic();
    }

    return DatabaseClassic._instance;
  }
  public add(user: IUser): void {
    this.users.push(user);
  }

  public remove(index: number): void {
    this.users.slice(index, 1);
  }
  public show(): void {
    this.users.forEach((user) => {
      console.log(user);
    });
  }
}
