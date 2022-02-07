import { Button, Col } from "react-bootstrap";
import { useEffect, useState } from "react";

export default function Word(props) {
  const [buttonVariety, setButtonVariety] = useState("primary");
  // const [imageID, setImageID] = useState("");

  useEffect(() => {
    if (props.word[1][0] === "") {
      setButtonVariety("secondary");
    } else {
      setButtonVariety("primary");
    }
  }, [props]);

  let canv;
  let cont;
  const showPolygon = (e) => {
    console.log("showing polygons");
    console.log("this.id", e.target.id);
    let coordArray = e.target.id.split(",");
    coordArray.shift();
    let properCoords = [];
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
    console.log("clickPoints:", clickPoints);
    canv = document.querySelector("canvas");
    cont = canv.getContext("2d");
    drawPoly(cont, canv, properCoords);
  };

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
