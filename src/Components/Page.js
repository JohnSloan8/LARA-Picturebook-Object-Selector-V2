import { Image, Container, Row, Col } from "react-bootstrap";
import { useEffect, useState } from "react";

export default function Page(props) {
  const [imageURL, setImageURL] = useState("");
  const [imageID, setImageID] = useState("");
  const [clickPoints, setClickPoints] = useState([]);

  useEffect(() => {
    setImageURL(props.url);
    setImageID(props.name);
    //console.log("props.url", props.url);
  }, [props]);

  const dealWithClick = (evt) => {
    clickPoints.push([evt.offsetX, evt.offsetY]);
    console.log("clickPoints:", clickPoints);
    console.log("evt:", evt);
  };

  return (
    <Image id={imageID} src={imageURL} className="" onClick={dealWithClick} />
  );
}
