import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./Header";
import About from "./About";
import Contact from "./Contact";
import Title from "./Title";
import Portfolio from "./Portfolio";

//TODO fix the header link

import { Container } from "semantic-ui-react";

const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <Container textAlign="center">
          <Title />
          <Switch>
            <Route path="/" exact component={About} />
            <Route path="/Portfolio" component={Portfolio} />
            <Route path="/Contact" component={Contact} />
          </Switch>
        </Container>
      </Router>
    </div>
  );
};

export default App;
