export interface IUser {
  getId(): string;
  getName(): string;
  getEmail(): string;
  getBorrowedItems(): string[];
  addBorrowedItem(itemId: string): void;
  removeBorrowedItem(itemId: string): void;
  displayInfo(): string;
}
