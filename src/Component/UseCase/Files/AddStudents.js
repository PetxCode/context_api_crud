import { Button } from "antd";
import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { GlobalContext } from "../../ContextAPI/GlobalState";
import "./File.css";
import { v4 as uuid } from "uuid";

const AddStudent = () => {
  const hist = useHistory();
  const [input, setInput] = React.useState("");
  const { addStudent, std } = useContext(GlobalContext);

  const addingNewStudent = () => {
    const newStudent = {
      id: uuid(),
      name: input,
    };

    addStudent({ id: uuid(), name: input });
  };

  return (
    <div>
      <center
        style={{
          marginTop: "40px",
          marginBottom: "50px",
        }}
      >
        Add Students
      </center>
      <center>
        <div>
          <input
            className="edit"
            placeholder="Add Name"
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
          />
          <div>
            <Button className="useCase__Button">
              <Link
                onClick={() => {
                  addingNewStudent();
                  hist.push("/usecase");
                }}
              >
                Accept
              </Link>
            </Button>
            <Button className="useCase__Button1">
              <Link
                onClick={() => {
                  hist.push("/usecase");
                }}
              >
                Cancel
              </Link>
            </Button>
          </div>
        </div>
      </center>
    </div>
  );
};

export default AddStudent;
