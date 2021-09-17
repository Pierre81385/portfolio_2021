import React from "react";
import { Carousel, CarouselItem } from "react-bootstrap";

export default function About() {
  const style = {
    container: {
      display: "flex",
      flex: "wrap",
      padding: "5px",
      color: "white",
    },
    divLeft: {
      width: "35%",
      textAlign: "left",
      color: "white",
      flex: "wrap",
    },
    divRight: {
      width: "65%",
      textAlign: "left",
      color: "white",
      flex: "wrap",
    },
  };
  return (
    <div style={style.container}>
      <div style={style.divLeft}>
        <div style={{ textAlign: "left" }}>
          <h1>Skills</h1>
          <ul style={{ paddingLeft: 0 }}>
            <li>React.js</li>
            <li>MongoDB</li>
            <li>React Bootstrap</li>
            <li>GraphQL</li>
            <li>Node.js</li>
            <li>JavaScript</li>
            <li>MERN Stack</li>
            <li>RESTful API</li>
            <li>Agile Methodology</li>
            <li>SQL</li>
            <li>JQuery</li>
            <li>Heroku</li>
            <li>GitHub</li>
          </ul>
        </div>
      </div>

      <div style={style.divRight}>
        <h1>About Me</h1>
        <p>
          My name is Peter Bishop, and after years of working lower level roles
          in various tech startups while maintaining side jobs bartending at
          various establishments in downtown Denver, I've decided to take the
          next step by completing the Full Stack bootcamp at DU. This is an
          exciting opportunity for me, and I look forward to an exciting career
          learning new technologies, and problem solving.
        </p>
      </div>
    </div>
  );
}
