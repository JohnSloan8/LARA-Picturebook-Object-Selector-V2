import { Image, Container, Row, Col } from "react-bootstrap";
import { useEffect, useState } from "react";
import Word from "./Word";

export default function Words(props) {
  const [buttonVariety, setButtonVariety] = useState("primary");
  // const [imageID, setImageID] = useState("");

  useEffect(() => {
    console.log("word", props.wordData);
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
