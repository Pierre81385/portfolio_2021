import React from "react";
import gitImage from "../assets/github.png";
import facebookImage from "../assets/facebook.png";
import instagramImage from "../assets/instagram.png";
import linkedinImage from "../assets/linkedin.png";

export default function Contact() {
  const style = {
    img: {
      height: "150px",
    },
    div: {
      textAlign: "center",
    },
    table: {
      marginLeft: "auto",
      marginRight: "auto",
    },
  };

  return (
    <div>
      <table style={style.table}>
        <tr>
          <td>
            <a href="https://github.com/Pierre81385">
              <img
                src={`${gitImage}`}
                alt="github"
                className="logo hover-shadow"
                id="gitLogo"
                style={style.img}
              />
            </a>
          </td>
        </tr>
        <tr>
          <td>
            <a href="https://www.linkedin.com/in/peter-bishop-46a51597/">
              <img
                src={`${linkedinImage}`}
                alt="github"
                className="logo"
                id="gitLogo"
                style={style.img}
              />
            </a>
          </td>
        </tr>
        <tr>
          <td>
            <a href="https://github.com/Pierre81385">
              <img
                src={`${instagramImage}`}
                alt="github"
                className="logo"
                id="gitLogo"
                style={style.img}
              />
            </a>
          </td>
        </tr>
        <tr>
          <td>
            <a href="https://www.facebook.com/PeterJBishop">
              <img
                src={`${facebookImage}`}
                alt="github"
                className="logo"
                id="gitLogo"
                style={style.img}
              />
            </a>
          </td>
        </tr>
      </table>
    </div>
  );
}
