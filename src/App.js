import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./pages/home";
import About from "./pages/about";
import Work from "./pages/work";
import Contact from "./pages/contact";
import BackgroundVideo from "./utils/backgroundVideo";
import { Link } from "react-router-dom";

function App() {
  const style = {
    background: {
      position: "fixed",
      padding: "50px",
      zIndex: 2,
    },
    Link: {
      fontFamily: "'Ubuntu Mono', monospace",
      color: "white",
      padding: "15px",
    },
    nav: {
      zIndex: 3,
    },
    h1: {
      fontSize: "3rem",
      color: "white",
      fontFamily: "'Libre Barcode 39 Text', cursive",
      position: "relative",
      zIndex: 3,
    },
  };

  return (
    <Router>
      <div className="flex-column justify-flex-start min-100-vh">
        <h1 className="m-0" style={style.h1}>
          Peter J Bishop
        </h1>
        <div
          style={{
            margin: "25px",
            zIndex: "4",
            position: "relative",
            textAlign: "right",
          }}
        >
          <Link
            variant="outline-dark"
            className="btn btn-lg m-2"
            to="/home"
            style={style.Link}
          >
            HOME
          </Link>
          <Link
            variant="outline-dark"
            className="btn btn-lg m-2"
            to="/about"
            style={style.Link}
          >
            ABOUT
          </Link>
          <Link className="btn btn-lg m-2" to="/Work" style={style.Link}>
            WORK
          </Link>
          <Link className="btn btn-lg m-2" to="/contact" style={style.Link}>
            CONTACT
          </Link>
        </div>
        <div className="container">
          <Route exact path="/home">
            <div style={style.background}>
              <Home />
            </div>
          </Route>

          <Route exact path="/about">
            <div style={style.background}>
              <About />
            </div>
          </Route>
          <Route exact path="/work">
            <div style={style.background}>
              <Work />
            </div>
          </Route>

          <Route exact path="/contact">
            <div style={style.background}>
              <Contact />
            </div>
          </Route>
          <div style={{ zIndex: -1 }}>
            <BackgroundVideo />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
