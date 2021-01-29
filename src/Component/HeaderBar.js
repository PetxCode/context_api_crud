import { Button } from "antd";
import { Header } from "antd/lib/layout/layout";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "./ContextAPI/GlobalState";
import "./headerbar.css";

const HeaderBar = () => {
  const { std } = useContext(GlobalContext);
  return (
    <div>
      <Header className="header">
        <Link to="/" className="header__Link">
          Home
        </Link>
        <Link to="/usecase" className="header__Link">
          Use Case
        </Link>

        <div
          style={{
            color: "#fff",
          }}
        >
          {std.length}
        </div>

        <Button>
          <Link to="/add" className="header__Link">
            Add Student
          </Link>
        </Button>
      </Header>
    </div>
  );
};

export default HeaderBar;

// <Link to="/feed" className="header__Link">
// Feed Back
// </Link>
