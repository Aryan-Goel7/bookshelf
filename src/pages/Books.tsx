import { useEffect, useState } from "react";
import axios from "axios";
import BookCardWrapper from "../components/BookCardWrapper";
import { Book } from "../utils/definition";
import Container from "../components/Container";

function Books() {
  const [books, setBooks] = useState<Book[]>([]);
  const [bookName, setBookName] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      axios
        .get(import.meta.env.VITE_API_URL, {
          params: {
            q: bookName || "YOUR_QUERY",
            limit: 10,
            page: 1,
          },
        })
        .then((response) => {
          console.log(response.data);
          setBooks(response.data.docs);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
    }, 1000);

    // Cleanup function to clear the timeout if the component is unmounted or bookName changes
    return () => clearTimeout(timer);
  }, [bookName]);

  return (
    <Container>
      <div className="flex flex-col items-center mb-3">
        <h1 className="text-center w-full">Book Store</h1>
        <input
          className="pl-2 border border-indigo-500 w-full sm:max-w-md rounded-md"
          type="text"
          value={bookName}
          placeholder="Search Book"
          onChange={(e) => setBookName(e.target.value)}
        />
      </div>
      {loading ? (
        <h3 className="text-center">Loading...</h3>
      ) : (
        <BookCardWrapper books={books} />
      )}
    </Container>
  );
}

export default Books;
