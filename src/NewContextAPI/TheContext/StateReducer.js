// import React from "react"

export const StateReducer = (state, action) => {
  switch (action.type) {
    case "REMOVE_COURSE":
      return {
        ...state,
        courses: state.courses.filter((course) => course.id !== action.payload),
      };
    case "ADD_COURSE":
      return {
        ...state,
        courses: [action.payload, ...state.courses],
      };
    case "EDIT_COURSE":
      const doEdit = action.payload;
      const editNow = state.courses.map((course) => {
        if (course.id === doEdit.id) {
          return doEdit;
        } else {
          return course;
        }
      });

      return {
        courses: editNow,
      };

    default:
      return state;
  }
};
