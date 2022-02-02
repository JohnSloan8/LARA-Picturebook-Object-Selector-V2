import { Button } from "react-bootstrap";
import { useEffect, useState } from "react";

export default function Word(props) {
  // const [imageURL, setImageURL] = useState("");
  // const [imageID, setImageID] = useState("");

  useEffect(() => {
    console.log("word", props.word);
  }, [props]);

  return <Button varient={props.type}>{props.word}</Button>;
}
