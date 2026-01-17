import { LibraryItem } from "./LibraryItem";

export class Magazine extends LibraryItem {
  private issueNumber: number;
  private publisher: string;
  private monthYear: string;

  constructor(
    id: string,
    title: string,
    author: string,
    year: number,
    issueNumber: number,
    publisher: string,
    monthYear: string,
  ) {
    super(id, title, author, year);
    this.issueNumber = issueNumber;
    this.publisher = publisher;
    this.monthYear = monthYear;
  }

  public getIssueNumber(): number {
    return this.issueNumber;
  }

  public getPublisher(): string {
    return this.publisher;
  }

  public getMonthYear(): string {
    return this.monthYear;
  }

  public displayInfo(): string {
    return `
=-=-=-=-=-= MAGAZINE =-=-==-=-=
${this.formatBasicInfo()}
Edition: #${this.getIssueNumber()}
Publisher: ${this.getPublisher()}
Period: ${this.getMonthYear()}
=-=-=-=-=-=-=-==-=-=-=-=-=-=-=
    `.trim();
  }

  public isRecent(monthsThreshold: number): boolean {
    const currentYear = new Date().getFullYear();
    const ageInYears = currentYear - this.year;
    const ageInMonths = ageInYears * 12;

    return ageInMonths <= monthsThreshold;
  }
}
