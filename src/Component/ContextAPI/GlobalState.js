import React, { useReducer, createContext, useEffect } from "react";
import { AppReducer } from "./AppReducer";
import { v4 as uuid } from "uuid";

const initState = {
  students: localStorage.getItem("students")
    ? JSON.parse(localStorage.getItem("students"))
    : [],

  // students: [
  //   { id: uuid(), name: "Peter" },
  //   { id: uuid(), name: "Bukky" },
  //   { id: uuid(), name: "Ubani" },
  //   { id: uuid(), name: "Ndidi" },
  // ],
};

export const GlobalContext = createContext(initState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initState);

  useEffect(() => {
    localStorage.setItem("students", JSON.stringify(state.students));
  }, [state]);

  //Action for Adding Students to our DataBase

  const addStudent = (student) => {
    dispatch({
      type: "ADD_STUDENT",
      payload: student,
    });
  };

  //Removal Action
  const removeStudent = (id) => {
    dispatch({
      type: "REMOVE_STUDENT",
      payload: id,
    });
  };

  //Action for Reducing
  const editingStudents = (student) => {
    dispatch({
      type: "EDIT_STUDENT",
      payload: student,
    });
  };

  //Action for Complete
  const completeStudents = (id) => {
    dispatch({
      type: "COMPLETE_STUDENT",
      payload: id,
    });
  };
  return (
    <GlobalContext.Provider
      value={{
        std: state.students,
        addStudent,
        removeStudent,
        editingStudents,
        complete: completeStudents,
        // complete: state.student.complete,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
