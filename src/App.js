import "./styles.css";
import Book from "./Components/Book";
import Pages from "./Components/Pages";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";

export default function App() {
  return (
    <div className="App">
      <Container>
        <h1>LARA Picturebook Object Selector</h1>
        <Book />
        <Pages />
      </Container>
    </div>
  );
}
