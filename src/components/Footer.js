import React from "react";
import { Header, Icon } from "semantic-ui-react";
const Footer = () => {
  return (
    <div className="footer">
      <Header size="small" floated="left" color="grey">
        Copyright 2020 Michael Cooper
      </Header>

      <Header size="medium" floated="right">
        <a href="https://github.com/MichaelDCooper" target="_blank">
          <Icon name="github" color="grey" />
        </a>
        <a href="https://www.linkedin.com/in/michaelcooper51/" target="_blank">
          <Icon name="linkedin" color="grey" />
        </a>
      </Header>
    </div>
  );
};

export default Footer;
