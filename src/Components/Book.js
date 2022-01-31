import axios from 'axios'
import React, { useState } from 'react'
import { Form } from "react-bootstrap";

export default function Book() {
  const [books, setBooks] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  React.useEffect(() => {
    axios
      .get(
        "https://warm-reef-17230.herokuapp.com/api/v1/getBookList"
      )
      .then(json => {
        console.log("json.data:", json.data)
        setBooks(json.data.texts)
        setIsLoading(false)
      })
      .catch( err => 
        console.log('err:', err)
      )
  }, [])
  
  return (
    <div className="Book">
      {isLoading ? (
        <h2>Hang on a mo</h2>
      ) : (
        <>
          <h2>Choose a book!</h2>
          <Form.Select aria-label="Default select example">
            <option>books...</option>
            {books.map((book, i) => {
              return <option key={i} value={i}>{book}</option>
            })}
          </Form.Select>
        </>
      )}

    </div>
  );
}