import { LOGIN_START, LOGIN_RESOLVED } from "../actions";

const initialState = {
  friends: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_START: {
      return {
        ...state,
        isLoggin: true
      };
    }
    case LOGIN_RESOLVED: {
      return {
        ...state,
        isLogginIn: false
      };
    }
    default:
      return state;
  }
};

export default reducer;
