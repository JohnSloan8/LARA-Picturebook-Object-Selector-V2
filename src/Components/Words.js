import { Image, Container, Row, Col } from "react-bootstrap";
import { useEffect, useState } from "react";
import Word from "./Word";

export default function Words(props) {
  const [buttonVariety, setButtonVariety] = useState("primary");
  const [wordDict, setWordDict] = useState({});

  useEffect(() => {
    console.log("word", props.wordsData);
    let tempWordDict = {};
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
          tempWordDict[word] = coords;
        }
      });
    });
    console.log("tempWordDict:", tempWordDict);
  }, [props]);

  return (
    <>
      {props.wordsData.map((sentence, s_i) => {
        return (
          <Row xs="auto" className="mt-4">
            {sentence.map((word, w_i) => {
              if (w_i < sentence.length - 2)
                return (
                  <Col>
                    <Word word={word} />
                  </Col>
                );
            })}
          </Row>
        );
      })}
    </>
  );
}
