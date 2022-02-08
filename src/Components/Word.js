import { Button, Col } from "react-bootstrap";
import { useEffect, useState, useContext } from "react";
import { VariableContext } from "./Pages";

export default function Word(props) {
  const [buttonVariety, setButtonVariety] = useState("primary");
  const {
    setConfirmSelection,
    setClearSelection,
    setSelectedWord,
    selectedWord,
    wordsData,
    setWordsData,
    setCanDraw
  } = useContext(VariableContext);

  useEffect(() => {
    if (props.word[1][0] === "") {
      setButtonVariety("secondary");
    } else {
      setButtonVariety("primary");
    }
  }, [props]);

  const showPolygon = (e) => {
    // console.log("showing polygons");
    // console.log("this.id", e.target.id);
    // console.log('props.sentID:', props.sentID)
    // console.log('props.wordID:', props.wordID)
    let coordArray = e.target.id.split("_");
    console.log("coordArray:", coordArray);
    let word = coordArray[0];
    console.log("word:", word);
    console.log("wordsData:", wordsData);
    setSelectedWord([word, props.sentID, props.wordID]);
    // console.log('coordArray:', coordArray)

    console.log("coo:", wordsData[coordArray[1]][coordArray[2]]);
    if (wordsData[coordArray[1]][coordArray[2]].length >= 4) {
      clickPoints = wordsData[coordArray[1]][coordArray[2]].slice(1);
      drawPoly(clickPoints);
      setClearSelection("visible");
      setCanDraw(false);
    } else {
      // console.log('empty coords')
      setClearSelection("hidden");
      clearPoly();
      setCanDraw(true);
    }
  };

  const drawPoly = (coords) => {
    context.lineWidth = 2;
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.beginPath();
    context.moveTo(coords[0][0], coords[0][1]);
    for (i of coords.reverse()) context.lineTo(i[0], i[1]);
    context.stroke();
  };
  window.drawPoly = drawPoly;

  const clearPoly = () => {
    context.clearRect(0, 0, canvas.current.width, canvas.current.height);
    // setWordsData[props.sentID][props.WordID]
    setClearSelection("hidden");
  };

  return (
    // {if ( props.word[1][0] === "" ) {
    <Col className="gx-1">
      <Button
        variant={buttonVariety}
        id={props.word[0] + "_" + props.sentID + "_" + props.wordID}
        onClick={showPolygon}
        className="mb-2"
      >
        {props.word[0]}
      </Button>
    </Col>
    // }}
  );
}
