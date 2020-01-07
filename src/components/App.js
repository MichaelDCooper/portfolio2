import React from "react";
import Header from "./Header";
import { Container, Divider } from "semantic-ui-react";

const App = () => {
  return (
    <div>
      <Header />
      <Container textAlign="center">
        <h1>Name</h1>
        <Divider />
      </Container>
    </div>
  );
};

export default App;
