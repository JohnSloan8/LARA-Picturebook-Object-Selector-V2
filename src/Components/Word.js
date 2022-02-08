import { Button, Col } from "react-bootstrap";
import { useEffect, useState, useContext } from "react";
import { VariableContext } from "./Pages";

export default function Word(props) {
  const [buttonVariety, setButtonVariety] = useState("primary");
  const { setConfirmSelection, setClearSelection } = useContext(
    VariableContext
  );

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
    let coordArray = e.target.id.split(",");
    coordArray.shift();
    // console.log('coordArray:', coordArray)
    let properCoords = [];
    if (coordArray.length >= 8) {
      let twoCoords = [];
      let count = 0;
      coordArray.forEach((c, i) => {
        twoCoords.push(parseInt(c));
        if (i % 2 !== 0) {
          properCoords.push(twoCoords);
          twoCoords = [];
          count += 1;
        }
      });
      clickPoints = properCoords;
      // console.log("clickPoints:", clickPoints);
      drawPoly(clickPoints);
      setClearSelection("visible");
    } else {
      // console.log('empty coords')
      setClearSelection("hidden");
      clearPoly();
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

  const clearPoly = () => {};

  return (
    // {if ( props.word[1][0] === "" ) {
    <Col className="gx-1">
      <Button
        variant={buttonVariety}
        id={props.word}
        onClick={showPolygon}
        className="mb-2"
      >
        {props.word[0]}
      </Button>
    </Col>
    // }}
  );
}
