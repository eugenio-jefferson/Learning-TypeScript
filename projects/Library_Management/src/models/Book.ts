import { LibraryItem } from "./LibraryItem";

export class Book extends LibraryItem {
  private isbn: string;
  private pages: number;
  private genre: string;

  constructor(id: string, title: string, author: string, year: number, isbn: string, pages: number, genre: string) {
    super(id, title, author, year);
    this.isbn = isbn;
    this.pages = pages;
    this.genre = genre;
  }

  public getIsbn(): string {
    return this.isbn;
  }

  public getPages(): number {
    return this.pages;
  }

  public getGenre(): string {
    return this.genre;
  }

  public displayInfo(): string {
    return `
=-=-=-=-=-= BOOK =-=-==-=-=
${this.formatBasicInfo()}
ISBN: ${this.isbn}
Pages: ${this.pages}
Genre: ${this.genre}
=-=-=-=-=-=-=-==-=-=-=-=-=-=
    `.trim();
  }

  public calculateReadingTime(pagesPerHour: number): number {
    return Math.ceil(this.pages / pagesPerHour);
  }
}
