import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./pages/home";
import About from "./pages/about";
import Work from "./pages/work";
import Contact from "./pages/contact";
import BackgroundImage from "./assets/background.jpg";

function App() {
  const style = {
    background: {
      backgroundImage: `url(${BackgroundImage})`,
      backgroundSize: "cover",
      minHeight: "812px",
      marginTop: "-35px",
    },
  };

  return (
    <Router>
      <div
        className="flex-column justify-flex-start min-100-vh"
        style={style.background}
      >
        <Header />
        <div className="container">
          <Route exact path="/home">
            <Home />
          </Route>

          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/work">
            <Work />
          </Route>

          <Route exact path="/contact">
            <Contact />
          </Route>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
