import { Button } from "react-bootstrap";
import { useEffect, useState } from "react";

export default function Word(props) {
  const [buttonVariety, setButtonVariety] = useState("primary");
  // const [imageID, setImageID] = useState("");

  useEffect(() => {
    console.log("word", props.word[1][0]);
    if (props.word[1][0] === "") {
    }
  }, []);

  return (
    // {if ( props.word[1][0] === "" ) {
    <Button varient={buttonVariety} className="mt-1">
      {props.word}
    </Button>
    // }}
  );
}
