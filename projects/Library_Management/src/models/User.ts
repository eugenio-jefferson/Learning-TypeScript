import { IUser } from "../interfaces/IUser";

export class User implements IUser {
  private id: string;
  private name: string;
  private email: string;
  private borrowedItems: string[];

  constructor(id: string, name: string, email: string) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.borrowedItems = [];
  }

  public getId(): string {
    return this.id;
  }

  public getName(): string {
    return this.name;
  }

  public getEmail(): string {
    return this.email;
  }

  public getBorrowedItems(): string[] {
    return [...this.borrowedItems];
  }

  public addBorrowedItem(itemId: string): void {
    if (!this.borrowedItems.includes(itemId)) {
      this.borrowedItems.push(itemId);
      console.log(` > Item ${itemId} added to ${this.name}'s borrowed items`);
    }
  }

  public removeBorrowedItem(itemId: string): void {
    const index = this.borrowedItems.indexOf(itemId);
    if (index !== -1) {
      this.borrowedItems.splice(index, 1);
      console.log(` > Item ${itemId} removed from ${this.name}'s borrowed items`);
    }
  }

  public displayInfo(): string {
    const itemsList = this.borrowedItems.length > 0 ? this.borrowedItems.join(", ") : "None";

    return `
=-=-=-=-=-= USER =-=-=-=-=-=
ID: ${this.id}
Name: ${this.name}
Email: ${this.email}
Borrowed Items: ${itemsList}
Total of Borrowed Items: ${this.borrowedItems.length}
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
    `.trim();
  }

  public canBorrow(maxItems: number): boolean {
    return this.borrowedItems.length < maxItems;
  }
}
