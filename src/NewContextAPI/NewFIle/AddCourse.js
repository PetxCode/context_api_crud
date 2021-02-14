import { Button } from "antd";
import { Link, useHistory } from "react-router-dom";
import React, { useContext } from "react";
import { StateContext } from "../TheContext/StateContext";
import { v4 as uuid } from "uuid";
const AddCourse = () => {
  const [input, setInput] = React.useState("");
  const hist = useHistory();
  const { addCourse } = useContext(StateContext);

  const addUpCourse = () => {
    addCourse({ id: uuid(), name: input });
  };

  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <center>
        <div>
          <input
            placeholder="Enter new Course"
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
            style={{
              marginBottom: "20px",
            }}
          />
          <div>
            <Button
              onClick={(e) => {
                e.preventDefault();
                addUpCourse();
                hist.push("/new");
              }}
            >
              Enter
            </Button>
            <Button>
              {" "}
              <Link to="/new">Cancel</Link>
            </Button>
          </div>
        </div>
      </center>
    </div>
  );
};

export default AddCourse;
