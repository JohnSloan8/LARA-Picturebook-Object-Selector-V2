import { Container, Row, Col } from "react-bootstrap";
import { useEffect, useState, useRef } from "react";

export default function Page(props) {
  const [imageURL, setImageURL] = useState("");
  const [imageID, setImageID] = useState("");
  const [clickPoints, setClickPoints] = useState([]);
  const canvas = useRef(); // ADDED

  useEffect(() => {
    const context = canvas.current.getContext("2d");
    window.context = context;

    setImageURL(props.url);
    setImageID(props.name);
    console.log("props.url:", props.url);
    if (props.url) {
      let clickPoints = [];
      window.clickPoints = clickPoints;
      var rawImg = new Image();
      rawImg.src = props.url;
      // imageDiv = document.getElementById("imageID");
      // imageDiv.innerHTML = "";
      // if (imageDiv !== null) {
      rawImg.onload = () => {
        canvas.current.style.backgroundImage = "url(" + props.url + ")";
        resize(canvas.current, rawImg.height, rawImg.width);
      };
      canvas.current.addEventListener("click", (evt) => {
        clickPoints.push([evt.offsetX, evt.offsetY]);
        drawDot(evt.offsetX, evt.offsetY);
        console.log("clickPoints:", clickPoints);
      });
      window.canvas = canvas;
      // }
    }
  }, [props.url]);

  const resize = (thisCanvas, x, y) => {
    thisCanvas.height = x;
    thisCanvas.width = y;
    let canvasContainer = document.getElementById("imageCol");
    canvasContainer.style.width = y.toString() + "px";
  };

  const drawDot = (x, y) => {
    context.beginPath();
    context.arc(x, y, 4, 0, 2 * Math.PI);
    context.fill();
  };
  window.drawDot = drawDot;

  const dealWithClick = (evt) => {
    setClickPoints(clickPoints.push([evt.offsetX, evt.offsetY]));
    // drawDot(evt.offsetX, evt.offsetY)
    console.log("clickPoints:", clickPoints);
    console.log("evt:", evt);
  };

  return (
    <div id="imageID">
      <canvas
        ref={canvas} // ADDED
      />
    </div>
  );
}
