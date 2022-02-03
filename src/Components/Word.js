import { Button } from "react-bootstrap";
import { useEffect, useState } from "react";

export default function Word(props) {
  const [buttonVariety, setButtonVariety] = useState("primary");
  // const [imageID, setImageID] = useState("");

  var canvas = document.querySelector("canvas");
  var context = canvas.getContext("2d");

  useEffect(() => {
    //console.log("word", props.word[1][0]);
    if (props.word[1][0] === "") {
      setButtonVariety("secondary");
    } else {
      setButtonVariety("primary");
    }

    canvas.addEventListener("click", (evt) => {
      clickPoints.push([evt.offsetX, evt.offsetY]);
      drawDot(evt.offsetX, evt.offsetY);
      // infoPoints.textContent = clickPoints.join(" : ")
      buttonsCont.style.visibility = "visible";
    });
  }, []);

  var canvas = document.querySelector("canvas");
  var context = canvas.getContext("2d");

  const showPolygon = () => {
    console.log("showing polygons");
  };

  return (
    // {if ( props.word[1][0] === "" ) {
    <Button variant={buttonVariety} onClick={showPolygon} className="mt-1">
      {props.word[0]}
    </Button>
    // }}
  );
}
