import axios from "axios";
import React, { useState } from "react";
import { Image } from "react-bootstrap";

const bookName = "mangiri_yarda_picturebook";

export default function Pages() {
  const [urlPrefix, setUrlPrefix] = useState("");
  const [pages, setPages] = useState();
  const [pagesLoading, setPagesLoading] = useState([]);
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  React.useEffect(() => {
    axios
      .get("https://warm-reef-17230.herokuapp.com/api/v1/getBook/" + bookName)
      .then((json) => {
        setUrlPrefix(
          "https://www.issco.unige.ch/en/research/projects/callector/word_locations/" +
            bookName +
            "/"
        );
        setPages(json.data);
        setPagesLoading(false);
        console.log("pages:", pages);
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
        <h2>Hang on a mo for pages</h2>
      ) : (
        <>
          <div className="row-fluid">
            <div className="col-lg-12 col-md-10 ">
              <div className="cover-container">
                {Object.keys(pages).map((page, i) => {
                  return (
                    <div className="cover-item">
                      <Image
                        src={urlPrefix + page}
                        className="thumbnail-image"
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
