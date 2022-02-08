import { Image, Container, Row, Col, Button } from "react-bootstrap";
import { useEffect, useState, useContext } from "react";
import { VariableContext } from "./Pages";

export default function Editor(props) {
  const {
    confirmSelection,
    clearSelection,
    selectedWord,
    setSelectedWord,
    wordsData,
    setWordsData,
    mainImageUrl,
    setClearSelection,
    canDraw,
    setCanDraw
  } = useContext(VariableContext);

  const removePoly = () => {
    console.log("selectedWord:", selectedWord);
    context.clearRect(0, 0, canvas.current.width, canvas.current.height);
    console.log("wordsData:", wordsData);
    //let coordsData = wordsData[selectedWord[1]][selectedWord[2]].slice(1)
    //console.log('corrdsData:', coordsData)
    wordsData[selectedWord[1]][selectedWord[2]] = [
      selectedWord[0],
      ["", ""],
      ["", ""]
    ];
    setWordsData(wordsData);
    setClearSelection("hidden");
  };

  return (
    <Container>
      <Row className="m-1">
        <Col>
          <Button
            variant="success"
            className="m-2"
            size="lg"
            style={{ visibility: confirmSelection }}
          >
            Confirm Selection
          </Button>
          <Button
            variant="danger"
            onClick={removePoly}
            className="m-2"
            size="lg"
            style={{ visibility: clearSelection }}
          >
            Clear Selection
          </Button>
        </Col>
      </Row>
    </Container>
  );
}
