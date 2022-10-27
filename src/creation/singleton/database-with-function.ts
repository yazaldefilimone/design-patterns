import { IUser } from "./IUser";

export const databaseWithFunction = (() => {
  const users: IUser[] = [];
  return {
    add(user: IUser): void {
      users.push(user);
    },

    remove(index: number): void {
      users.slice(index, 1);
    },
    show(): void {
      users.forEach((user) => {
        console.log(user);
      });
    },
  };
})();
