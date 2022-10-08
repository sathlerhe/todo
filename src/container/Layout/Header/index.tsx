import React from "react";
import { Link } from "react-router-dom";
import { AppHeader, LinksList } from "./styles";

const Header: React.FC = () => {
  const links = [
    {
      name: "Notes",
      link: "/notes",
    },
    {
      name: "List",
      link: "/list",
    },
  ];

  return (
    <AppHeader>
      <Link to="/">
        <h1>ToDo</h1>
      </Link>

      <LinksList>
        {links?.map((link) => (
          <Link key={link?.name} to={link?.link}>
            <p>{link?.name}</p>
          </Link>
        ))}
      </LinksList>
    </AppHeader>
  );
};

export default Header;
