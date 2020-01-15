import React, { useState } from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [activeItem, selectItem] = useState("Home");

  const categories = ["Home", "About", "Portfolio", "Contact", "Uses"];

  const CreateItems = ({ name }) => {
    return (
      <Menu.Item
        name={name}
        active={activeItem === name}
        onClick={() => selectItem(name)}
      >
        <Link to={`/${name}`}>
          <h4>{name}</h4>
        </Link>
      </Menu.Item>
    );
  };
  return (
    <div>
      <Menu fluid widths={5}>
        {categories.map(name => (
          <CreateItems name={name} key={name} />
        ))}
      </Menu>
    </div>
  );
};

export default Header;
