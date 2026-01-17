import { ILibraryItem } from "../interfaces/ILibraryItem";

export abstract class LibraryItem implements ILibraryItem {
  protected id: string;
  protected title: string;
  protected author: string;
  protected year: number;
  protected available: boolean;

  constructor(id: string, title: string, author: string, year: number) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.year = year;
    this.available = true;
  }

  public getId(): string {
    return this.id;
  }

  public getTitle(): string {
    return this.title;
  }

  public getAuthor(): string {
    return this.author;
  }

  public getYear(): number {
    return this.year;
  }

  public getAvailable(): boolean {
    return this.available;
  }

  public borrow(): boolean {
    if (this.available) {
      this.available = false;
      console.log(` > "${this.title}" was borrowed successfully!`);

      return true;
    }
    console.log(` > "${this.title}" is not available at the moment.`);

    return false;
  }

  public returnItem(): boolean {
    if (!this.available) {
      this.available = true;
      console.log(` > "${this.title}" was returned successfully!`);

      return true;
    }
    console.log(` > "${this.title}" is already available.`);

    return false;
  }

  public abstract displayInfo(): string;

  protected formatBasicInfo(): string {
    const status = this.available ? "Available" : "Borrowed";

    return `ID: ${this.id}\nTitle: ${this.title}\nAuthor: ${this.author}\nYear: ${this.year}\nStatus: ${status}`;
  }
}
