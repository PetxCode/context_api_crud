export const AppReducer = (state, action) => {
  switch (action.type) {
    case "ADD_STUDENT":
      return {
        ...state,
        students: [action.payload, ...state.students],
      };

    case "REMOVE_STUDENT":
      return {
        ...state,
        students: state.students.filter(
          (student) => student.id !== action.payload
        ),
      };

    case "EDIT_STUDENT":
      const editingStudents = action.payload;
      const updatingStudent = state.students.map((student) => {
        if (student.id === editingStudents.id) {
          return editingStudents;
        } else {
          return student;
        }
      });
      return {
        ...state,
        students: updatingStudent,
      };

    case "COMPLETE_STUDENT":
      return {
        ...state,
        students: state.students.map((student) =>
          student.id === action.payload
            ? { ...student, complete: !student.complete }
            : student
        ),
      };

    default:
      return state;
  }
};
