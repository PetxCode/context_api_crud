import React from "react";
import { StateProvider } from "../TheContext/StateContext";
import TheHome from "./TheHome";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import AddCourse from "./AddCourse";
import EditCourse from "./EditCourse";

const NewContext = () => {
  return (
    <StateProvider>
      <Router>
        <Switch>
          <Route exact path="/addingCourse" component={AddCourse} />
          <Route exact path="/editingCourse/:id" component={EditCourse} />
          <div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-evenly",
              }}
            >
              <div>Total Entry</div>
              <center>
                <Link to="/addingCourse"> Add New Course </Link>
              </center>
            </div>
            <TheHome />
          </div>
        </Switch>
      </Router>
    </StateProvider>
  );
};

export default NewContext;
