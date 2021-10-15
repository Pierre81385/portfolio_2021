import React from "react";
import { CardColumns, CardImg, Card, Button } from "react-bootstrap";
import beerMe from "../assets/Animation.gif";
import employeeTracker from "../assets/employeeTracker.png";
import budgetTracker from "../assets/budgetTracker.png";
import favoritRecipes from "../assets/FavoriteRecipes.png";

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

  const cardContent = [
    {
      image: beerMe,
      text: "BeerMe app info.",
    },
    {
      image: budgetTracker,
      text: "BudgetTracker app info",
    },
    {
      image: employeeTracker,
      text: "EmployeeTracker app info.",
    },
    {
      image: favoritRecipes,
      text: "Favorite Recipes app info",
    },
  ];

  //need a function to select from array above when next or previous buttons pressed!

  console.log(cardContent);

  var i;

  function previous() {
    if (localStorage.getItem("key") == 0) {
      localStorage.setItem("key", 0);

      console.log(cardContent[i] + "At the beginning of the array.");
      localStorage.setItem(
        "img",
        cardContent[localStorage.getItem("key")].image
      );
      localStorage.setItem(
        "txt",
        cardContent[localStorage.getItem("key")].text
      );
      window.location.reload();
    } else {
      localStorage.setItem("key", i--);

      localStorage.setItem(
        "img",
        cardContent[localStorage.getItem("key")].image
      );
      localStorage.setItem(
        "txt",
        cardContent[localStorage.getItem("key")].text
      );
      window.location.reload();
    }
  }

  function next() {
    if (localStorage.getItem("key") + 1 == cardContent.length) {
      localStorage.setItem("key", 0);

      console.log(
        cardContent[localStorage.getItem("key")] + "At the end of the array."
      );
      localStorage.setItem(
        "img",
        cardContent[localStorage.getItem("key")].image
      );
      localStorage.setItem(
        "txt",
        cardContent[localStorage.getItem("key")].text
      );
      window.location.reload();
    } else {
      localStorage.setItem("key", i++);
      console.log("advancing");
      localStorage.setItem(
        "img",
        cardContent[localStorage.getItem("key")].image
      );
      localStorage.setItem(
        "txt",
        cardContent[localStorage.getItem("key")].text
      );
      window.location.reload();
    }
  }

  return (
    <div style={style.container}>
      <Card style={style.card}>
        <Card.Img
          src={localStorage.getItem("img")}
          style={{ width: "250px", height: "250px" }}
        />
        <Card.Body>
          <Card.Text style={{ color: "white" }}>
            {localStorage.getItem("txt")}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          {" "}
          <Button variant="primary" onClick={previous}>
            Previous
          </Button>
          <Button variant="primary" onClick={next}>
            Next
          </Button>
        </Card.Footer>
      </Card>
    </div>
  );
}
