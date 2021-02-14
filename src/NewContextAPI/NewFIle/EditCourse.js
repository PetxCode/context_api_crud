import { Button } from "antd";
import { Link, useHistory } from "react-router-dom";
import React from "react";
import { StateContext } from "../TheContext/StateContext";

const EditCourse = (props) => {
  const hist = useHistory();
  const [input, setInput] = React.useState("");
  const [selectedCourse, setSelectedCourse] = React.useState({
    id: " ",
    name: " ",
  });
  const { course, editCourse } = React.useContext(StateContext);

  const editingTheCourse = () => {};

  const currentID = props.match.params.id;
  React.useEffect(() => {
    const courseID = currentID;
    const selectedCourse = course.find((courses) => courses.id === courseID);
    setSelectedCourse(selectedCourse);
  }, [currentID, course]);
  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <center>
        <div>
          <input
            placeholder="Edit Course"
            value={selectedCourse.name}
            name="name"
            onChange={(e) => {
              setSelectedCourse({
                ...selectedCourse,
                [e.target.name]: e.target.value,
              });
            }}
            style={{
              marginBottom: "20px",
            }}
          />
          <div>
            <Button
              onClick={(e) => {
                editCourse(selectedCourse);
                hist.push("/new");
              }}
            >
              Edit
            </Button>
            <Button>
              <Link to="/new">Cancel</Link>
            </Button>
          </div>
        </div>
      </center>
    </div>
  );
};

export default EditCourse;
