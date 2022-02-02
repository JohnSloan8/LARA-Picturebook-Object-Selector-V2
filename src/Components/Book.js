import axios from "axios";
import { useEffect, useState } from "react";
import { Form, Container } from "react-bootstrap";

export default function Book() {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://warm-reef-17230.herokuapp.com/api/v1/getBookList")
      .then((json) => {
        console.log("json.data:", json.data);
        setBooks(json.data.texts);
        setIsLoading(false);
      })
      .catch((err) => console.log("err:", err));
  }, []);

  return (
    <Container className="mt-4">
      {isLoading ? (
        <h2>Hang on a mo</h2>
      ) : (
        <>
          <p>Choose a book!</p>
          <Form.Select aria-label="Default select example">
            <option>books...</option>
            {books.map((book, i) => {
              return (
                <option key={i} value={i}>
                  {book}
                </option>
              );
            })}
          </Form.Select>
        </>
      )}
    </Container>
  );
}
