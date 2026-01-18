import { LibraryManager } from "./services/LibraryManager";
import { Book } from "./models/Book";
import { Magazine } from "./models/Magazine";
import { User } from "./models/User";

function main(): void {
  console.log("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=");
  console.log("                         LIBRARY MANAGEMENT SYSTEM");
  console.log("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=\n");

  const library = new LibraryManager(3);

  console.log("\n--------------- Adding Books ---------------\n");

  const book1 = new Book("B001", "Clean Code", "Robert C. Martin", 2008, "978-0132350884", 464, "Technology");

  const book2 = new Book("B002", "The Lord of the Rings", "J.R.R. Tolkien", 1995, "978-0261103252", 1216, "Fantasy");

  const book3 = new Book("B003", "Design Patterns", "Gang of Four", 1995, "978-0201633610", 416, "Technology");

  library.addItem(book1);
  library.addItem(book2);
  library.addItem(book3);

  console.log("\n--------------- Adding Magazines ---------------\n");

  const magazine1 = new Magazine(
    "M001",
    "National Geographic",
    "National Geographic Society",
    2024,
    234,
    "National Geographic Society",
    "Janeiro/2024",
  );

  const magazine2 = new Magazine(
    "M002",
    "Scientific American",
    "Scientific American, Inc.",
    2024,
    123,
    "Scientific American, Inc.",
    "Fevereiro/2024",
  );

  library.addItem(magazine1);
  library.addItem(magazine2);

  console.log("\n--------------- Registering Users ---------------\n");

  const user1 = new User("U001", "John Doe", "john.doe@email.com");
  const user2 = new User("U002", "Mary Jane", "mary.jane@email.com");

  library.registerUser(user1);
  library.registerUser(user2);

  console.log("\n--------------- Library Report ---------------\n");
  library.displayReport();

  console.log("\n--------------- Item Information ---------------\n");
  console.log(book1.displayInfo());
  console.log("\n");
  console.log(magazine1.displayInfo());

  console.log("\n--------------- Borrowing Items ---------------\n");

  // John Doe borrowing books
  library.borrowItem("U001", "B001");
  library.borrowItem("U001", "B002");

  // Mary Jane borrowing magazine
  library.borrowItem("U002", "M001");

  console.log("\n--------------- User Information ---------------\n");
  console.log(user1.displayInfo());
  console.log("\n");
  console.log(user2.displayInfo());

  library.displayReport();

  const readingTime: number = book1.calculateReadingTime(50);
  console.log(`\n Time estimated to read "${book1.getTitle()}" (50 pages/hour): ${readingTime} hours`);

  const isRecent: boolean = magazine1.isRecent(12);
  console.log(`\n The magazine "${magazine1.getTitle()}" is recent (last 12 months)? ${isRecent ? "Yes" : "No"}`);

  const canBorrow: boolean = user1.canBorrow(3);
  console.log(`${user1.getName()} can borrow more items? ${canBorrow ? "Yes" : "No"}`);

  console.log("\n--------------- LISTING AVAILABLE ITEMS ---------------\n");
  const availableItems = library.listAvailableItems();
  console.log(`Total of available items: ${availableItems.length}`);
  availableItems.forEach((item) => {
    console.log(`- ${item.getTitle()} (${item.getId()})`);
  });

  console.log("\n--------------- LISTING BORROWED ITEMS ---------------\n");
  const borrowedItems = library.listBorrowedItems();
  console.log(`Total of borrowed items: ${borrowedItems.length}`);
  borrowedItems.forEach((item) => {
    console.log(`- ${item.getTitle()} (${item.getId()})`);
  });

  console.log("\n--------------- RETURNING ITEMS ---------------\n");

  // John Doe returning a book
  library.returnItem("U001", "B001");

  // Final report
  library.displayReport();

  console.log("\n--------------- TRYING TO BORROW MORE THAN THE LIMIT ---------------\n");

  // John Doe already has 1 item, let's try to borrow 2 more
  library.borrowItem("U001", "B003");
  library.borrowItem("U001", "M002");

  // Trying to borrow a 4th item (should fail)
  library.borrowItem("U001", "B001");

  console.log("\n");
  console.log(user1.displayInfo());
}

main();
