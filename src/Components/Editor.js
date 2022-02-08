import { Image, Container, Row, Col, Button } from "react-bootstrap";
import { useEffect, useState, useContext } from "react";
import { VariableContext } from "./Pages";

export default function Editor(props) {
  const { confirmSelection, clearSelection } = useContext(VariableContext);
  return (
    <Container>
      <Row className="m-1">
        <Col>
          <Button
            variant="success"
            className="m-2"
            size="lg"
            style={{ visibility: confirmSelection }}
          >
            Confirm Selection
          </Button>
          <Button
            variant="danger"
            className="m-2"
            size="lg"
            style={{ visibility: clearSelection }}
          >
            Clear Selection
          </Button>
        </Col>
      </Row>
    </Container>
  );
}
