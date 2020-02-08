import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./Header";
import About from "./About";
import Contact from "./Contact";
import Title from "./Title";
import Uses from "./Uses";
import Portfolio from "./Portfolio";
import Footer from "./Footer";
import "../Main.css";

//TODO fix the header link

import { Container } from "semantic-ui-react";

const App = () => {
  return (
    <div className="page-wrap">
      <Router>
        <Header />
        <Container textAlign="center">
          <Title />
          <Switch>
            <Route path="/" exact component={About} />
            <Route path="/Portfolio" component={Portfolio} />
            <Route path="/Contact" component={Contact} />
            <Route path="/Uses" component={Uses} />
          </Switch>
          <Footer />
        </Container>
      </Router>
    </div>
  );
};

export default App;
