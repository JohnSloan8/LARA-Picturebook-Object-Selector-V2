import axios from "axios";
import { useState, useEffect } from "react";
import { Image, Container, Row, Col } from "react-bootstrap";
import Page from "./Page";
import Words from "./Words";

const bookName = "mangiri_yarda_picturebook";

export default function Pages(props) {
  const [urlPrefix, setUrlPrefix] = useState("");
  const [pagesLoading, setPagesLoading] = useState([]);
  const [mainImageName, setMainImageName] = useState("");
  const [mainImageUrl, setMainImageUrl] = useState("");
  const [wordsData, setWordsData] = useState([]);

  useEffect(() => {
    axios
      .get("https://warm-reef-17230.herokuapp.com/api/v1/getBook/" + bookName)
      .then((json) => {
        setUrlPrefix(
          "https://www.issco.unige.ch/en/research/projects/callector/word_locations/" +
            bookName +
            "/"
        );
        console.log("props: ", props);
        props.setPages(json.data);
        setPagesLoading(false);
        console.log("pages:", pages);
      })
      .catch((err) => console.log("err:", err));
  }, []);

  const displayImageData = (e) => {
    console.log("image:", e.target.name);
    setMainImageName(e.target.name);
    setMainImageUrl(e.target.src);
    setWordsData(props.pages[e.target.name]);
  };

  return (
    <Container className="mt-4">
      {pagesLoading ? (
        <h2>Hang on a mo for pages</h2>
      ) : (
        <>
          <p>Choose an image!</p>
          <Row>
            <Col>
              <div className="cover-container">
                {Object.keys(props.pages).map((page, i) => {
                  return (
                    <div className="cover-item">
                      <Image
                        onClick={displayImageData}
                        name={page}
                        key={page + "_key"}
                        src={urlPrefix + page}
                        className="thumbnail-image"
                      />
                    </div>
                  );
                })}
              </div>
            </Col>
          </Row>
          <Container className="mt-4">
            <Row>
              <Col>
                <Page name={mainImageName} url={mainImageUrl} />
              </Col>
              <Col>
                <Words wordsData={wordsData} setWordsData={setWordsData} />
              </Col>
            </Row>
          </Container>
        </>
      )}
    </Container>
  );
}
