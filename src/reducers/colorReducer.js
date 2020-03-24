const initialState = { 
  color: null
}


export const colorReducer = (state = initialState, action) => {
  switch (action.type) {
    case "COLOR_RED":
      return {
        color: `red` 
      };
    case "COLOR_GREEN":
      return {
        color: `green`
      };
    case "COLOR_BLUE":
      return {
        color: `blue`
      };
    default: return state;
  }
};