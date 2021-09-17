import React from "react";
import { CardColumns, CardImg, Card } from "react-bootstrap";

export default function Work() {
  const style = {
    container: {
      display: "flex",
      flex: "wrap",
      padding: "15px",
    },
  };

  return (
    <div class="row">
      <div class="col-sm-6 col-md-4">
        <div class="card border-white">
          <div class="card-header">Heading 1</div>
          <div class="card-body">
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
      </div>

      <div class="col-sm-6 col-md-4">
        <div class="card border-white">
          <div class="card-header">Heading 2</div>
          <div class="card-body">
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
      </div>

      <div class="col-sm-6 col-md-4">
        <div class="card border-white">
          <div class="card-header">Heading 3</div>
          <div class="card-body">
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
