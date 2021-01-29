import React, { useReducer, createContext } from "react";
import { AppReducer } from "./AppReducer";
import { v4 as uuid } from "uuid";

const initState = {
  students: [
    { id: uuid(), name: "Peter" },
    { id: uuid(), name: "Bukky" },
    { id: uuid(), name: "Ubani" },
    { id: uuid(), name: "Ndidi" },
  ],
};

export const GlobalContext = createContext(initState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initState);

  //Action for Adding Students to our DataBase

  const addStudent = (student) => {
    dispatch({
      type: "ADD_STUDENT",
      payload: student,
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        std: state.students,
        addStudent,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
