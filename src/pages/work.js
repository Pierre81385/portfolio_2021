import React from "react";
import { CardColumns, CardImg, Card } from "react-bootstrap";
import beerMe from "../assets/Animation.gif";
import employeeTracker from "../assets/employeeTracker.png";
import budgetTracker from "../assets/budgetTracker.png";

export default function Work() {
  const style = {
    container: {
      display: "flex",
      flexWrap: "wrap",
    },
    card: {
      BackgroundColor: "rgba(251, 251, 251, 0.15)",
      padding: "15px",
      width: "250px",
    },
  };

  return (
    <div style={style.container}>
      <Card style={style.card}>
        <Card.Img src={beerMe} style={{ width: "250px", height: "250px" }} />
        <Card.Body>
          <Card.Text style={{ color: "white" }}>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card style={style.card}>
        <Card.Img
          src={employeeTracker}
          style={{ width: "250px", height: "250px" }}
        />
        <Card.Body>
          <Card.Text style={{ color: "white" }}>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card style={style.card}>
        <Card.Img
          src={budgetTracker}
          style={{ width: "250px", height: "250px" }}
        />
        <Card.Body>
          <Card.Text style={{ color: "white" }}>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
