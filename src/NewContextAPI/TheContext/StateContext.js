import Recat, { useState, useEffect, createContext, useReducer } from "react";
import { StateReducer } from "./StateReducer";
import { v4 as uuid } from "uuid";

const initState = {
  courses: localStorage.getItem("course")
    ? JSON.parse(localStorage.getItem("course"))
    : [
        { id: uuid(), name: "ReactJS" },
        { id: uuid(), name: "VueJS" },
        { id: uuid(), name: "NextJS" },
      ],

  // courses: [
  //   { id: uuid(), name: "ReactJS" },
  //   { id: uuid(), name: "VueJS" },
  //   { id: uuid(), name: "NextJS" },
  // ],
};

export const StateContext = createContext(initState);

export const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(StateReducer, initState);

  const removeCourse = (id) => {
    dispatch({
      type: "REMOVE_COURSE",
      payload: id,
    });
  };

  const addCourse = (course) => {
    dispatch({
      type: "ADD_COURSE",
      payload: course,
    });
  };

  const editCourse = (course) => {
    dispatch({
      type: "EDIT_COURSE",
      payload: course,
    });
  };

  useEffect(() => {
    localStorage.setItem("course", JSON.stringify(state.courses));
  }, [state]);

  return (
    <StateContext.Provider
      value={{
        course: state.courses,
        removeCourse,
        addCourse,
        editCourse,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};
