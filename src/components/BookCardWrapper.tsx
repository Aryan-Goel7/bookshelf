import { Book } from "../utils/definition";
import BookCard from "./BookCard";

interface BookCardWrapperProps {
  books: Book[];
}

function BookCardWrapper({ books }: BookCardWrapperProps) {
  // console.log(books);
  // className = "sm:flex flex-wrap justify-around basis-1/3";
  return (
    // <Container className="sm:flex flex-wrap basis-1/4">
    <div className="sm:flex sm:flex-wrap">
      {books.map((book, index) => (
        <BookCard key={index} book={book} />
      ))}
    </div>
    // </Container>
  );
}

export default BookCardWrapper;
