import { Image, Container, Row, Col } from "react-bootstrap";
import { useEffect, useState } from "react";
import Word from "./Word";

export default function Words(props) {
  const [buttonVariety, setButtonVariety] = useState("primary");
  const [wordsDict, setWordsDict] = useState({});

  useEffect(() => {
    console.log("word", props.wordsData);
    let tempWordsDict = {};
    props.wordsData.forEach((s) => {
      s.forEach((w, i) => {
        if (i === 0) {
          let word;
          let coords = [];
          w.forEach((m, j) => {
            if (j > 0) {
              coords.push(m);
            } else {
              word = m;
            }
          });
          tempWordsDict[word] = coords;
        }
      });
    });
    console.log("tempWordsDict:", tempWordsDict);
    setWordsDict(tempWordsDict);
  }, [props]);

  return (
    <>
      <Row xs="auto" className="m-3">
        {Object.keys(wordsDict).map((word, w_i) => {
          // if (w_i < sentence.length - 2)
          return (
            <Col>
              <Word word={word} wordsDict={wordsDict} />
            </Col>
            // );
          );
        })}
      </Row>
    </>
  );
}
