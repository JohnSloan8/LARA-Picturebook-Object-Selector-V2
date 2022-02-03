import { Button } from "react-bootstrap";
import { useEffect, useState } from "react";

export default function Word(props) {
  const [buttonVariety, setButtonVariety] = useState("primary");
  // const [imageID, setImageID] = useState("");

  useEffect(() => {
    if (props.wordsDict[props.word][0][0] === "") {
      setButtonVariety("secondary");
    } else {
      setButtonVariety("primary");
    }
  }, [props]);

  const showPolygon = (e) => {
    console.log("showing polygons");
    console.log("this.id", e.target.id);
  };

  return (
    // {if ( props.word[1][0] === "" ) {
    <Button
      variant={buttonVariety}
      id={props.word}
      onClick={showPolygon}
      className="mt-2"
    >
      {props.word}
    </Button>
    // }}
  );
}
