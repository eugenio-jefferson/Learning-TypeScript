export interface ILibraryItem {
  displayInfo(): string;
  borrow(): boolean;
  returnItem(): boolean;
}
