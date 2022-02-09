import axios from "axios";
import React, { useState, useEffect } from "react";
import { Image, Container, Row, Col, Button } from "react-bootstrap";
import Page from "./Page";
import Words from "./Words";
import Editor from "./Editor";
export const VariableContext = React.createContext();

export default function Pages(props) {
  const [urlPrefix, setUrlPrefix] = useState("");
  const [pagesLoading, setPagesLoading] = useState([]);
  const [mainImageName, setMainImageName] = useState("");
  const [mainImageUrl, setMainImageUrl] = useState("");
  const [showHideImage, setShowHideImage] = useState("d-none");
  const [showHideImages, setShowHideImages] = useState("d-none");
  // const [editorVisible, setEditorVisible] = useState("hidden");
  const [wordsData, setWordsData] = useState([]);
  const [confirmSelection, setConfirmSelection] = useState("hidden");
  const [clearSelection, setClearSelection] = useState("hidden");
  const [selectedWord, setSelectedWord] = useState([]);
  const [canDraw, setCanDraw] = useState(true);
  const [clicks, setClicks] = useState([]);
  const [readyToSelect, setReadyToSelect] = useState(false);
  const [polyShowing, setPolyShowing] = useState(false);
  const [drawDot, setDrawDot] = useState([]);

  useEffect(() => {
    //console.log("props.book:", props.book);
    axios
      .get(
        "https://warm-reef-17230.herokuapp.com/api/v1/picturebook/getPictureBookByName/" +
          props.book
      )
      .then((json) => {
        setUrlPrefix(json.data[0].prefixURL);
        //console.log("props: ", props);
        //console.log("pages:", json.data[0].book);
        props.setPages(json.data[0].book);
        setPagesLoading(false);
        setShowHideImage("d-none");
        setClearSelection("hidden");
        setShowHideImages("");
      })
      .catch((err) => console.log("err:", err));
    setClicks([]);
  }, [props.book]);

  useEffect(() => {
    console.log("canDraw in useEffect:", canDraw);
  }, [canDraw]);

  useEffect(() => {
    // console.log('clicks.length:', clicks.length)
    // console.log('clicks[0]:', clicks[0])
    if (clicks.length === 0) {
      setReadyToSelect(false);
      //setClearSelection("hidden");
    }

    if (clicks.length === 1) {
      if (clicks[0].length !== 0) {
        setClearSelection("visible");
      } else {
        setClicks([]);
      }
    }

    if (clicks.length === 4) {
      setReadyToSelect(true);
    }
  }, [clicks]);

  useEffect(() => {
    if (polyShowing) {
      console.log("poly showing");
    } else {
      console.log("poly not showing");
    }
  }, [polyShowing]);

  const displayImageData = (e) => {
    //console.log("image:", e.target.name);
    setShowHideImage("");
    setMainImageName(e.target.name);
    setMainImageUrl(e.target.src);
    setWordsData(props.pages[e.target.name]);
    // setEditorVisible("visible");
  };

  return (
    <VariableContext.Provider
      value={{
        confirmSelection,
        setConfirmSelection,
        clearSelection,
        setClearSelection,
        selectedWord,
        setSelectedWord,
        wordsData,
        setWordsData,
        mainImageUrl,
        mainImageName,
        canDraw,
        setCanDraw,
        clicks,
        setClicks,
        readyToSelect,
        setReadyToSelect,
        polyShowing,
        setPolyShowing,
        drawDot,
        setDrawDot
      }}
    >
      <Container className="mt-4">
        <Container className={showHideImages}>
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
              <Container>
                <Editor />
              </Container>
              <Container className="mt-4" className={showHideImage}>
                <Row>
                  <Col id="imageCol">
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
        <Container>
          <Row className="m-1">
            <Col>
              <Button
                variant="success"
                //onClick={removePoly}
                className={showHideImage}
                size="lg"
              >
                Submit
              </Button>
            </Col>
          </Row>
        </Container>
      </Container>
    </VariableContext.Provider>
  );
}
