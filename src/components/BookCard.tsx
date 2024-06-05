import { useEffect, useState } from "react";
import { Book } from "../utils/definition";

function BookCard({ book }: { book: Book }) {
  const [isInShelf, setIsInShelf] = useState(false);

  useEffect(() => {
    const getShelfBooksString = localStorage.getItem("books");
    if (getShelfBooksString) {
      try {
        const shelfBooks: Book[] = JSON.parse(getShelfBooksString);
        const bookInShelf = shelfBooks.some(
          (shelfBook) => shelfBook.key === book.key
        );
        setIsInShelf(bookInShelf);
      } catch (error) {
        console.error("Error parsing localStorage books:", error);
      }
    }
  }, [book.key]);

  const addToShelfHandler = () => {
    const getShelfBooksString = localStorage.getItem("books");
    if (getShelfBooksString) {
      try {
        const shelfBooks: Book[] = JSON.parse(getShelfBooksString);
        if (!shelfBooks.some((shelfBook) => shelfBook.key === book.key)) {
          const updatedShelfBooks = [...shelfBooks, book];
          localStorage.setItem("books", JSON.stringify(updatedShelfBooks));
          setIsInShelf(true);
        }
      } catch (error) {
        console.error("Error parsing localStorage books:", error);
      }
    } else {
      localStorage.setItem("books", JSON.stringify([book]));
      setIsInShelf(true);
    }
  };

  const removeFromShelfHandler = () => {
    const getShelfBooksString = localStorage.getItem("books");
    if (getShelfBooksString) {
      try {
        const shelfBooks: Book[] = JSON.parse(getShelfBooksString);
        const updatedShelfBooks = shelfBooks.filter(
          (shelfBook) => shelfBook.key !== book.key
        );
        localStorage.setItem("books", JSON.stringify(updatedShelfBooks));
        setIsInShelf(false);
      } catch (error) {
        console.error("Error parsing localStorage books:", error);
      }
    }
  };

  return (
    <div className="w-64 p-4 mb-3 mr-3  bg-white border border-gray-200 rounded-lg shadow sm:p-6 dark:bg-gray-800 dark:border-gray-700">
      <h2 className="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white sm:text-2xl">
        {book.title}
      </h2>
      <p className="mb-2 text-base font-medium text-gray-700 dark:text-gray-400 sm:text-lg">
        Author: {book.author_name.join(", ")}
      </p>
      <p className="mb-2 text-sm text-gray-700 dark:text-gray-400 sm:text-base">
        Published: {book.publish_date[0]}
      </p>
      {/* <p className="mb-2 text-sm text-gray-700 dark:text-gray-400 sm:text-base">
        ISBN: {book.isbn?.join(", ")}
      </p> */}
      <p className="mb-2 text-sm text-gray-700 dark:text-gray-400 sm:text-base">
        Language:
        {book.language.length <= 3
          ? book.language.map((lang) => lang.toUpperCase()).join(", ")
          : `${book.language
              .slice(0, 2)
              .map((lang) => lang.toUpperCase())
              .join(", ")} and ${book.language.length - 2} more`}
      </p>
      <p className="mb-4 text-sm text-gray-700 dark:text-gray-400 sm:text-base">
        Genre: {book.type.toLocaleUpperCase()}
      </p>
      <div className="mt-2">
        {isInShelf ? (
          <button
            type="button"
            className="px-4 py-2 mb-2 mr-2 text-sm font-medium text-blue-700 border border-blue-700 rounded-lg hover:text-white hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800 sm:px-5 sm:py-2.5 sm:text-base"
            onClick={removeFromShelfHandler}
          >
            Remove from Shelf
          </button>
        ) : (
          <button
            type="button"
            className="px-4 py-2 mb-2 mr-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 sm:px-5 sm:py-2.5 sm:text-base"
            onClick={addToShelfHandler}
          >
            Add to Shelf
          </button>
        )}
      </div>
    </div>
  );
}

export default BookCard;
