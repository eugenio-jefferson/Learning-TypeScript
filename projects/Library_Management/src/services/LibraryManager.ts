import { LibraryItem } from "../models/LibraryItem";
import { User } from "../models/User";

export class LibraryManager {
  private items: Map<string, LibraryItem>;
  private users: Map<string, User>;
  private maxItemsPerUser: number;

  constructor(maxItemsPerUser: number = 3) {
    this.items = new Map();
    this.users = new Map();
    this.maxItemsPerUser = maxItemsPerUser;
  }

  public addItem(item: LibraryItem): boolean {
    if (this.items.has(item.getId())) {
      console.log(` > Item with ID ${item.getId()} already exists in the library.`);

      return false;
    }
    this.items.set(item.getId(), item);
    console.log(` > Item "${item.getTitle()}" added to the library.`);

    return true;
  }

  public registerUser(user: User): boolean {
    if (this.users.has(user.getId())) {
      console.log(` > User with ID ${user.getId()} is already registered.`);

      return false;
    }
    this.users.set(user.getId(), user);
    console.log(` > User "${user.getName()}" registered successfully.`);

    return true;
  }
  public borrowItem(userId: string, itemId: string): boolean {
    const user = this.users.get(userId);
    const item = this.items.get(itemId);

    if (!user) {
      console.log(` > User with ID ${userId} not found.`);

      return false;
    }

    if (!item) {
      console.log(` > Item with ID ${itemId} not found.`);

      return false;
    }

    if (!user.canBorrow(this.maxItemsPerUser)) {
      console.log(` > ${user.getName()} has reached the limit of ${this.maxItemsPerUser} borrowed items.`);

      return false;
    }

    if (item.borrow()) {
      user.addBorrowedItem(itemId);

      return true;
    }

    return false;
  }

  public returnItem(userId: string, itemId: string): boolean {
    const user = this.users.get(userId);
    const item = this.items.get(itemId);

    if (!user) {
      console.log(` > User with ID ${userId} not found.`);

      return false;
    }

    if (!item) {
      console.log(` > Item with ID ${itemId} not found.`);

      return false;
    }

    if (!user.getBorrowedItems().includes(itemId)) {
      console.log(` > ${user.getName()} does not have this item borrowed.`);

      return false;
    }

    if (item.returnItem()) {
      user.removeBorrowedItem(itemId);

      return true;
    }

    return false;
  }

  public listAvailableItems(): LibraryItem[] {
    return Array.from(this.items.values()).filter((item) => item.getAvailable());
  }

  public listBorrowedItems(): LibraryItem[] {
    return Array.from(this.items.values()).filter((item) => !item.getAvailable());
  }

  public findItemById(itemId: string): LibraryItem | undefined {
    return this.items.get(itemId);
  }

  public findUserById(userId: string): User | undefined {
    return this.users.get(userId);
  }

  public displayReport(): void {
    console.log("\n---------------------------------------------------------------------------");
    console.log("                             LIBRARY REPORT");
    console.log("---------------------------------------------------------------------------");
    console.log(`   Total of Items: ${this.items.size}`);
    console.log(`   Available Items: ${this.listAvailableItems().length}`);
    console.log(`   Borrowed Items: ${this.listBorrowedItems().length}`);
    console.log(`   Total of Users: ${this.users.size}`);
    console.log("---------------------------------------------------------------------------\n");
  }
}
