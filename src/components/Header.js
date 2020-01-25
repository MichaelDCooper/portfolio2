import React, { useState } from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

const Header = () => {
  let currentPage = window.location.pathname.substr(1);

  const [activeItem, selectItem] = useState(
    currentPage === "" ? "Home" : currentPage
  );

  const categories = ["Home", "Portfolio", "Contact", "Uses"];

  const CreateItems = ({ name }) => {
    const getTo = name => {
      if (name === "Home") {
        return "/";
      }
      return `/${name}`;
    };

    return (
      <Menu.Item
        className="header-item"
        as={Link}
        to={getTo(name)}
        name={name}
        active={activeItem === name}
        onClick={() => selectItem(name)}
      ></Menu.Item>
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
