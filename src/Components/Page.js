import { Image, Container, Row, Col } from "react-bootstrap";
import { useEffect, useState } from "react";

export default function Page(props) {
  const [imageURL, setImageURL] = useState("");
  const [imageID, setImageID] = useState("");

  useEffect(() => {
    setImageURL(props.url);
    setImageID(props.name);
    //console.log("props.url", props.url);
  }, [props]);

  return (
    <Image
      id={imageID}
      // src={"https://www.issco.unige.ch/en/research/projects/callector/word_locations/mangiri_yarda_picturebook/basic_barngarla_sentences.jpg"}
      src={imageURL}
      className=""
    />
  );
}
