import { Button } from "antd";
import React from "react";
import { Link, useHistory } from "react-router-dom";
import "./File.css";
const EditStudent = () => {
  const hist = useHistory();
  const [input, setInput] = React.useState("");
  return (
    <div>
      <center
        style={{
          marginTop: "40px",
          marginBottom: "50px",
        }}
      >
        Edit Students
      </center>
      <center>
        <div>
          <input
            className="edit"
            placeholder="Edit Name"
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
          />
          <div>
            <Button className="useCase__Button">
              <Link to="/student/1">Accept</Link>
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

export default EditStudent;
