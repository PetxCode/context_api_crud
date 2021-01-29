import { Button } from "antd";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../ContextAPI/GlobalState";
import "./UseCase.css";

const UseCase = () => {
  const { std } = useContext(GlobalContext);
  return (
    <div>
      <center
        style={{
          marginBottom: "70px",
        }}
      >
        This is the Use case
      </center>
      <center>
        {std.map(({ id, name }) => (
          <div className="useCase">
            <div>{name}</div>
            <div>
              <Button className="useCase__Button">
                <Link to={`/student/${id}`}>Edit</Link>
              </Button>
              <Button className="useCase__Button1">Delete</Button>
            </div>
          </div>
        ))}
      </center>
    </div>
  );
};

export default UseCase;
