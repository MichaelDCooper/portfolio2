import React, { useState } from "react";
import { Menu } from "semantic-ui-react";

const Header = () => {
  const [activeItem, selectItem] = useState("Home");

  const categories = ["Home", "About", "Portfolio", "Contact"];

  const CreateItems = ({ name }) => {
    return (
      <Menu.Item
        name={name}
        active={activeItem === { name }}
        onClick={(console.log(name), () => selectItem({ name }))}
      >
        <h4>{name}</h4>
      </Menu.Item>
    );
  };
  return (
    <div>
      <Menu fluid widths={4}>
        {categories.map(name => (
          <CreateItems name={name} key={name} />
        ))}
      </Menu>
    </div>
  );
};

export default Header;
