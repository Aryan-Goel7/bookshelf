import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Book } from "../utils/definition";
import Container from "../components/Container";
import BookCardWrapper from "../components/BookCardWrapper";
function Shelf() {
  const [books, setBooks] = useState<Book[]>([]);
  const [noBooks, setNoBooks] = useState<boolean>(true);
  useEffect(() => {
    try {
      const storedBooks = localStorage.getItem("books") || "";
      if (storedBooks) {
        const parsedBooks: Book[] = JSON.parse(storedBooks);
        setNoBooks(false);
        setBooks(parsedBooks);
        console.log(parsedBooks);
      }
    } catch (err) {
      console.error("Error parsing localStorage books:", err);
    }
  }, []);
  if (!noBooks) {
    return (
      <Container>
        <div className="flex flex-col items-center mb-3">
          <h1>Book Shelf</h1>
        </div>
        <BookCardWrapper books={books} />
      </Container>
    );
  } else {
    return (
      <>
        <p>No books in the Shelf. Add it from </p>
        <Link to="/">here</Link>
      </>
    );
  }
}

export default Shelf;
