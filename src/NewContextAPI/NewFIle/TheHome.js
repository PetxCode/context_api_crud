import { Button } from "antd";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { StateContext } from "../TheContext/StateContext";
import { useHistory } from "react-router-dom";

const TheHome = () => {
  const { course, removeCourse } = useContext(StateContext);
  return (
    <div>
      <center>
        {course.map(({ id, name }) => (
          <div
            key={id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              margin: "10px 60px",
            }}
          >
            <div>{name}</div>
            <div>
              <Button>
                <Link to={`/editingCourse/${id}`}>Edit</Link>
              </Button>
              <Button
                onClick={() => {
                  removeCourse(id);
                }}
              >
                Remove
              </Button>
            </div>
          </div>
        ))}
      </center>
    </div>
  );
};

export default TheHome;
