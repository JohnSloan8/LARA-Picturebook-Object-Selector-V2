import "./styles.css";
import Book from "./Components/Book";
import Pages from "./Components/Pages";
import Page from "./Components/Page";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { useState } from "react";

export default function App() {
  const [pages, setPages] = useState([]);
  return (
    <div className="App">
      <Container className="mt-4">
        <h1>LARA Picturebook Object Selector</h1>
        <Book />
        <Pages pages={pages} setPages={setPages} />
        <Page pages={pages} setPages={setPages} />
      </Container>
    </div>
  );
}
