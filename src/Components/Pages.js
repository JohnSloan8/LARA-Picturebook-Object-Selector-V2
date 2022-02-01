import axios from "axios";
import React, { useState } from "react";
import { Form } from "react-bootstrap";

export default function Pages() {
  const [pages, setPages] = useState({});
  const [pagesLoading, setPagesLoading] = useState([]);

  React.useEffect(() => {
    axios
      .get(
        "https://warm-reef-17230.herokuapp.com/api/v1/getBook/mangiri_yarda_picturebook"
      )
      .then((json) => {
        console.log("Pages json.data:", json.data);
        setPages(json.data);
        console.log("pages:", pages);
        setPagesLoading(false);
      })
      .catch((err) => console.log("err:", err));
    // setTimeout( function(){
    //   setIsLoading(false)
    //   setBooks(["mangiri_yarda_picturebook"])
    //   console.log('books', books)
    // }, 1000)
  }, []);

  return (
    <div className="Pages">
      {pagesLoading ? (
        <h2>Hang on a mo</h2>
      ) : (
        <>
          <h2>Choose a page!</h2>
          <Form.Select aria-label="Default select example">
            <option>pages...</option>
            {Object.keys(pages).map((p, i) => {
              return (
                <option key={i} value={p}>
                  {p}
                </option>
              );
            })}
          </Form.Select>
        </>
      )}
    </div>
  );
}
