export const AppReducer = (state, action) => {
  switch (action.type) {
    case "ADD_STUDENT":
      return {
        ...state,
        students: [action.payload, ...state.students],
      };

    default:
      return state;
  }
};
