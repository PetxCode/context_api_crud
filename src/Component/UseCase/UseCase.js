import { Button } from "antd";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../ContextAPI/GlobalState";
import "./UseCase.css";

const UseCase = () => {
  const { std, removeStudent, completeStudents, complete } = useContext(
    GlobalContext
  );
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
            <div style={{ display: "flex", alignItems: "center" }}>
              <Button
                style={{
                  width: "120px",
                  backgroundColor: "yellow",
                  color: "red",
                }}
              >
                <Link
                  onClick={(student) => {
                    complete(id);
                    console.log(complete(student.complete));
                  }}
                >
                  {" "}
                  Completed{" "}
                </Link>
              </Button>

              <div
                style={{
                  marginLeft: "20px",
                  color: complete ? "black" : "red",
                }}
              >
                {name}
              </div>
            </div>

            <div>
              <Button className="useCase__Button">
                <Link
                  to={`/student/${id}`}
                  // onClick={() => {
                  //   completeStudents(std.id);
                  // }}
                >
                  Edit
                </Link>
              </Button>
              <Button
                className="useCase__Button1"
                onClick={() => {
                  removeStudent(id);
                }}
              >
                Delete
              </Button>
            </div>
          </div>
        ))}
      </center>
    </div>
  );
};

export default UseCase;
