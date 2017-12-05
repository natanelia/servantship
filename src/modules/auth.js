export const SIGN_IN = "auth/SIGN_IN";
export const SIGN_OUT = "auth/SIGN_OUT";

const initialState = {
  token: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SIGN_IN: {
      return {
        ...state,
        token: action.payload.token
      };
    }
    case SIGN_OUT: {
      return {
        ...state,
        token: null
      };
    }
    default: {
      return state;
    }
  }
};

export const signIn = (username, password) => {
  const token = username + password;
  return dispatch => {
    dispatch({ type: SIGN_IN, payload: { token } });
  };
};

export const signOut = () => {
  return dispatch => {
    dispatch({ type: SIGN_OUT });
  };
};
