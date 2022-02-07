import { Container, Row, Col } from "react-bootstrap";
import { useEffect, useState } from "react";

export default function Page(props) {
  const [imageURL, setImageURL] = useState("");
  const [imageID, setImageID] = useState("");
  const [clickPoints, setClickPoints] = useState([]);

  let canvas;
  let context;
  useEffect(() => {
    setImageURL(props.url);
    setImageID(props.name);
    console.log("props.url:", props.url);
    if (props.url) {
      let clickPoints = [];
      window.clickPoints = clickPoints;
      var rawImg = new Image();
      rawImg.src = props.url;
      imageDiv = document.getElementById("imageID");
      imageDiv.innerHTML = "";
      if (imageDiv !== null) {
        canvas = document.createElement("canvas");
        imageDiv.appendChild(canvas);
        context = canvas.getContext("2d");
        rawImg.onload = () => {
          canvas.style.backgroundImage = "url(" + props.url + ")";
          resize(canvas, rawImg.height, rawImg.width);
        };
        canvas.addEventListener("click", (evt) => {
          clickPoints.push([evt.offsetX, evt.offsetY]);
          drawDot(evt.offsetX, evt.offsetY);
          console.log("clickPoints:", clickPoints);
        });
        console.log(
          "canvas.style.backgroundImage",
          canvas.style.backgroundImage
        );
      }
    }
  }, [props]);

  const resize = (thisCanvas, x, y) => {
    thisCanvas.height = x;
    thisCanvas.width = y;
    let canvasContainer = document.getElementById("imageCol");
    canvasContainer.style.width = y.toString() + "px";
  };

  const drawPoly = (split) => {
    context.lineWidth = 2;
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.beginPath();
    context.moveTo(split[0][0], split[0][1]);
    for (i of split.reverse()) context.lineTo(i[0], i[1]);
    context.stroke();
  };
  window.drawPoly = drawPoly;

  const drawDot = (x, y) => {
    context.beginPath();
    context.arc(x, y, 4, 0, 2 * Math.PI);
    context.fill();
  };

  const dealWithClick = (evt) => {
    setClickPoints(clickPoints.push([evt.offsetX, evt.offsetY]));
    // drawDot(evt.offsetX, evt.offsetY)
    console.log("clickPoints:", clickPoints);
    console.log("evt:", evt);
  };

  return <div id="imageID"></div>;
}
