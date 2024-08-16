import { Button } from "antd";
import React, { useState, useContext, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { GlobalContext } from "../../ContextAPI/GlobalState";
import "./File.css";
const EditStudent = (props) => {
  const { std, editingStudents } = useContext(GlobalContext);

  const hist = useHistory();

  const [input, setInput] = useState("");
  const [selectedStudent, setSelectStudent] = useState({
    id: "",
    name: "",
  });

  const currentID = props.match.params.id;

  useEffect(() => {
    const studentID = currentID;
    const selectedStudent = std.find((student) => student.id === studentID);
    setSelectStudent(selectedStudent);
  }, [currentID, std]);
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
            value={selectedStudent.name}
            name="name"
            onChange={(e) => {
              setSelectStudent({
                ...selectedStudent,
                [e.target.name]: e.target.value,
              });
            }}
          />
          <div>
            <Button className="useCase__Button">
              <Link
                onClick={() => {
                  editingStudents(selectedStudent);
                  hist.push("/usecase");
                }}
              >
                Edit
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

export default EditStudent;
