import { Image, Container, Row, Col, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import Sent from "./Sent";

export default function Words(props) {
  const [buttonVariety, setButtonVariety] = useState("primary");

  return (
    <>
      <Row xs="auto" className="mb-3">
        <Col>
          {props.wordsData.map((sent, s_i) => {
            return (
              <Sent
                sent={sent}
                setEditorVisible={props.setEditorVisible}
                sentID={s_i}
              />
            );
          })}
        </Col>
      </Row>
    </>
  );
}
