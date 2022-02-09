import axios from "axios";
import { useEffect, useState } from "react";
import { Form, Container } from "react-bootstrap";

export default function Book(props) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(
        "https://warm-reef-17230.herokuapp.com/api/v1/picturebook/getAllPictureBookNames"
      )
      .then((json) => {
        //console.log("json.data:", json.data);
        props.setBooks(json.data);
        setIsLoading(false);
      })
      .catch((err) => console.log("err:", err));
  }, []);

  const displayImages = (e) => {
    //console.log("book:", e.target.id);
    props.setBook(e.target.id);
  };

  return (
    <Container className="mt-4">
      {isLoading ? (
        <p>Please wait...</p>
      ) : (
        <>
          <p>Choose a book</p>
          <Form.Select aria-label="Default select example">
            <option>books...</option>
            {props.books.map((book, i) => {
              return (
                <option key={i} value={i} id={book} onClick={displayImages}>
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
